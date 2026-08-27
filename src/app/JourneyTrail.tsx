"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type JourneyLabel = {
  kicker: string;
  lines: [string, string];
  align: "left" | "right" | "center";
  offsetX: number;
  offsetY: number;
};

// Every curve after the first adds two handles and a new endpoint.
const initialPoints: Point[] = [
  { x: 0.03, y: 0.0693 },
  { x: 0.107, y: 0.1237 },
  { x: 0.6449, y: 0.03 },
  { x: 0.8031, y: 0.1178 },
  { x: 0.8432, y: 0.2304 },
  { x: 0.3768, y: 0.1513 },
  { x: 0.2627, y: 0.196 },
  { x: 0.1448, y: 0.3105 },
  { x: 0.3875, y: 0.2519 },
  { x: 0.7912, y: 0.2737 },
  { x: 0.97, y: 0.3307 },
  { x: 0.1795, y: 0.5139 },
  { x: 0.1933, y: 0.3923 },
  { x: 0.3773, y: 0.3263 },
  { x: 0.877, y: 0.4223 },
  { x: 0.6392, y: 0.4538 },
  { x: 0.275, y: 0.5298 },
  { x: 0.0311, y: 0.6368 },
  { x: 0.2377, y: 0.6875 },
  { x: 0.7367, y: 0.6659 },
  { x: 0.415, y: 0.83 },
  { x: 0.68, y: 0.82 },
  { x: 0.94, y: 0.8 },
  { x: 0.7506, y: 0.9156 },
  { x: 0.4, y: 0.88 },
  { x: 0.1235, y: 0.9352 },
  { x: 0.2316, y: 0.97 },
  { x: 0.92, y: 0.97 },
];

const curveCount = (initialPoints.length - 1) / 3;
const showEditorGuides = false;
const showTram = true;
const isEditable = false;
const journeyLabels: Array<JourneyLabel | null> = [
  { kicker: "Before the plot twist", lines: ["Living our own", "rocking lives."], align: "left", offsetX: 16, offsetY: -46 },
  { kicker: "First call", lines: ["Two hours", "just vanished."], align: "right", offsetX: -16, offsetY: 14 },
  { kicker: "First date", lines: ["Two hungry birds", "finally met."], align: "left", offsetX: 16, offsetY: 14 },
  { kicker: "The next day", lines: ["So we met", "again."], align: "right", offsetX: -16, offsetY: 14 },
  { kicker: "Somewhere between", lines: ["What the hell", "is love?"], align: "center", offsetX: 0, offsetY: 16 },
  { kicker: "One month later", lines: ["We were", "in love."], align: "left", offsetX: 16, offsetY: 14 },
  { kicker: "Test of time", lines: ["Ultraaa long", "distance calls."], align: "center", offsetX: 0, offsetY: 16 },
  { kicker: "Big reveal", lines: ["We told", "our parents."], align: "left", offsetX: 16, offsetY: -46 },
  { kicker: "Right now", lines: ["You are", "reading this."], align: "right", offsetX: -16, offsetY: -20 },
  { kicker: "Future", lines: ["See yaa at", "the wedding."], align: "right", offsetX: -16, offsetY: -54 },
];

function cubicPointAt(start: Point, controlOne: Point, controlTwo: Point, end: Point, progress: number): Point {
  const inverse = 1 - progress;

  return {
    x: inverse ** 3 * start.x + 3 * inverse ** 2 * progress * controlOne.x + 3 * inverse * progress ** 2 * controlTwo.x + progress ** 3 * end.x,
    y: inverse ** 3 * start.y + 3 * inverse ** 2 * progress * controlOne.y + 3 * inverse * progress ** 2 * controlTwo.y + progress ** 3 * end.y,
  };
}

function cubicTangentAt(start: Point, controlOne: Point, controlTwo: Point, end: Point, progress: number): Point {
  const inverse = 1 - progress;

  return {
    x: 3 * inverse ** 2 * (controlOne.x - start.x) + 6 * inverse * progress * (controlTwo.x - controlOne.x) + 3 * progress ** 2 * (end.x - controlTwo.x),
    y: 3 * inverse ** 2 * (controlOne.y - start.y) + 6 * inverse * progress * (controlTwo.y - controlOne.y) + 3 * progress ** 2 * (end.y - controlTwo.y),
  };
}

function curvePositionAt(progress: number) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const curveIndex = clampedProgress === 1 ? curveCount - 1 : Math.floor(clampedProgress * curveCount);

  return {
    pointIndex: curveIndex * 3,
    progress: clampedProgress === 1 ? 1 : clampedProgress * curveCount - curveIndex,
  };
}

function tramProgressAt(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

function stationArrivalAt(progress: number) {
  const nearestStation = Math.round(Math.min(Math.max(progress, 0), 1) * curveCount) / curveCount;

  return Math.max(0, 1 - Math.abs(progress - nearestStation) / 0.035);
}

function pointAt(points: Point[], progress: number): Point {
  const curve = curvePositionAt(progress);

  return cubicPointAt(
    points[curve.pointIndex],
    points[curve.pointIndex + 1],
    points[curve.pointIndex + 2],
    points[curve.pointIndex + 3],
    curve.progress,
  );
}

function tangentAt(points: Point[], progress: number): Point {
  const curve = curvePositionAt(progress);

  return cubicTangentAt(
    points[curve.pointIndex],
    points[curve.pointIndex + 1],
    points[curve.pointIndex + 2],
    points[curve.pointIndex + 3],
    curve.progress,
  );
}

function drawTram(context: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, angle: number, width: number, scale: number) {
  const tramWidth = Math.min(Math.max(width * 0.15, 52), 76) * scale;
  const tramHeight = tramWidth * 0.76;

  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 220, 45, 1100, 840, -tramWidth / 2, -tramHeight / 2, tramWidth, tramHeight);
  context.restore();
}

function drawJourneyLabel(context: CanvasRenderingContext2D, label: JourneyLabel, anchor: Point, fontSize: number, arrival: number) {
  const kickerSize = Math.max(fontSize * 0.58, 9);
  const lineHeight = fontSize * 0.98;

  context.textAlign = "left";
  context.font = `700 ${kickerSize}px Arial, sans-serif`;
  const kickerWidth = context.measureText(label.kicker.toUpperCase()).width;
  context.font = `600 ${fontSize}px "Cormorant Garamond Variable", Georgia, serif`;
  const copyWidth = Math.max(...label.lines.map((line) => context.measureText(line).width));
  const labelWidth = Math.max(kickerWidth, copyWidth);
  const labelX =
    label.align === "left"
      ? anchor.x + label.offsetX
      : label.align === "right"
        ? anchor.x + label.offsetX - labelWidth
        : anchor.x + label.offsetX - labelWidth / 2;
  const labelY = anchor.y + label.offsetY;

  context.fillStyle = arrival > 0 ? "#c8424d" : "#b86b3f";
  context.font = `700 ${kickerSize}px Arial, sans-serif`;
  context.textBaseline = "top";
  context.fillText(label.kicker.toUpperCase(), labelX, labelY);
  context.fillRect(labelX, labelY + kickerSize + 2, Math.min(labelWidth, 28), 1);

  context.fillStyle = "#2f1723";
  context.font = `600 ${fontSize}px "Cormorant Garamond Variable", Georgia, serif`;
  context.shadowColor = arrival > 0 ? `rgba(245, 53, 69, ${0.68 * arrival})` : "rgba(248, 243, 234, 0.98)";
  context.shadowBlur = arrival > 0 ? 10 + arrival * 11 : 9;
  context.fillText(label.lines[0], labelX, labelY + kickerSize + 7);
  context.fillText(label.lines[1], labelX, labelY + kickerSize + 7 + lineHeight);
  context.shadowColor = "transparent";
  context.shadowBlur = 0;
}

type JourneyTrailProps = {
  className?: string;
};

export function JourneyTrail({ className }: JourneyTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const points = initialPoints.map((point) => ({ ...point }));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tramImage = new Image();
    let activePoint = -1;
    let scrollProgress = 0;

    const draw = () => {
      const context = canvas.getContext("2d");
      const { height, width } = canvas.getBoundingClientRect();
      if (!context || width === 0 || height === 0) return;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const scaled = points.map((point) => ({ x: point.x * width, y: point.y * height }));
      const trainProgress = reducedMotion ? 0 : scrollProgress;
      const tramProgress = tramProgressAt(trainProgress);

      if (showEditorGuides) {
        context.strokeStyle = "rgba(184, 132, 72, 0.42)";
        context.lineWidth = 1;
        context.setLineDash([4, 7]);
        for (let curveIndex = 0; curveIndex < curveCount; curveIndex += 1) {
          const pointIndex = curveIndex * 3;
          const start = scaled[pointIndex];
          const controlOne = scaled[pointIndex + 1];
          const controlTwo = scaled[pointIndex + 2];
          const end = scaled[pointIndex + 3];

          context.beginPath();
          context.moveTo(start.x, start.y);
          context.lineTo(controlOne.x, controlOne.y);
          context.moveTo(end.x, end.y);
          context.lineTo(controlTwo.x, controlTwo.y);
          context.stroke();
        }
      }

      context.strokeStyle = "#842b45";
      context.lineWidth = 2;
      context.setLineDash([6, 10]);
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(scaled[0].x, scaled[0].y);
      for (let curveIndex = 0; curveIndex < curveCount; curveIndex += 1) {
        const pointIndex = curveIndex * 3;
        const controlOne = scaled[pointIndex + 1];
        const controlTwo = scaled[pointIndex + 2];
        const end = scaled[pointIndex + 3];
        context.bezierCurveTo(controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, end.x, end.y);
      }
      context.stroke();

      context.setLineDash([]);
      scaled.forEach((point, index) => {
        const isAnchor = index % 3 === 0;
        if (!isAnchor && !showEditorGuides) return;
        const stationProgress = isAnchor ? index / (3 * curveCount) : 0;
        const arrival = isAnchor ? Math.max(0, 1 - Math.abs(tramProgress - stationProgress) / 0.035) : 0;

        if (arrival > 0) {
          const glowRadius = 10 + arrival * 20;
            const glow = context.createRadialGradient(point.x, point.y, 1, point.x, point.y, glowRadius);
            glow.addColorStop(0, `rgba(255, 120, 108, ${0.9 * arrival})`);
            glow.addColorStop(0.32, `rgba(245, 53, 69, ${0.48 * arrival})`);
            glow.addColorStop(1, "rgba(245, 53, 69, 0)");
            context.fillStyle = glow;
            context.beginPath();
            context.arc(point.x, point.y, glowRadius, 0, Math.PI * 2);
            context.fill();
        }

        context.beginPath();
        context.fillStyle = isAnchor ? (arrival > 0 ? "#b51f37" : "#842b45") : "#f0a72f";
        context.strokeStyle = "#b88448";
        context.lineWidth = 2;
        context.arc(point.x, point.y, isAnchor ? 6 : 7, 0, Math.PI * 2);
        context.fill();
        context.stroke();

        if (arrival > 0) {
          context.fillStyle = "#ff6f62";
          context.beginPath();
          context.arc(point.x, point.y, 3.4, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = "#fff0d6";
          context.beginPath();
          context.arc(point.x, point.y, 1.25, 0, Math.PI * 2);
          context.fill();
        }
      });

      const labelFontSize = Math.min(Math.max(width * 0.044, 15), 21);
      journeyLabels.forEach((label, index) => {
        if (!label) return;
        const anchor = scaled[index * 3];
        const stationProgress = index / curveCount;
        const arrival = Math.max(0, 1 - Math.abs(tramProgress - stationProgress) / 0.035);
        drawJourneyLabel(context, label, anchor, labelFontSize, arrival);
      });

      if (showTram && tramImage.complete && tramImage.naturalWidth > 0) {
        const traveler = pointAt(points, tramProgress);
        const tangent = tangentAt(points, tramProgress);
        const angle = Math.atan2(tangent.y * height, tangent.x * width);
        drawTram(context, tramImage, traveler.x * width, traveler.y * height, angle, width, 1 + stationArrivalAt(tramProgress) * 0.08);
      }
    };

    const updateScrollProgress = () => {
      const bounds = canvas.getBoundingClientRect();
      const startLine = window.innerHeight * 0.25;
      const endLine = window.innerHeight * 0.25;
      const travelDistance = bounds.height + startLine - endLine;

      scrollProgress = Math.min(Math.max((startLine - bounds.top) / travelDistance, 0), 1);
      draw();
    };

    const resizeObserver = new ResizeObserver(updateScrollProgress);
    resizeObserver.observe(canvas);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    tramImage.addEventListener("load", updateScrollProgress);
    tramImage.src = "/graphics/kolkata-tram-journey.png";
    updateScrollProgress();

    const pointFromEvent = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      return { x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height };
    };

    const logPoints = () => {
      const copyReadyPoints = points.map((point) => ({
        x: Number(point.x.toFixed(4)),
        y: Number(point.y.toFixed(4)),
      }));
      console.info("JourneyTrail points:", JSON.stringify(copyReadyPoints, null, 2));
    };

    const onPointerDown = (event: PointerEvent) => {
      const pointer = pointFromEvent(event);
      activePoint = points.findIndex((point) => Math.hypot(point.x - pointer.x, point.y - pointer.y) < 0.06);
      if (activePoint !== -1) canvas.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (activePoint === -1) return;
      const pointer = pointFromEvent(event);
      points[activePoint] = {
        x: Math.min(Math.max(pointer.x, 0.03), 0.97),
        y: Math.min(Math.max(pointer.y, 0.03), 0.97),
      };
      draw();
    };

    const releasePoint = (event: PointerEvent) => {
      if (activePoint !== -1 && canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
        logPoints();
      }
      activePoint = -1;
    };

    if (isEditable) {
      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", releasePoint);
      canvas.addEventListener("pointercancel", releasePoint);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      tramImage.removeEventListener("load", updateScrollProgress);
      if (isEditable) {
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", releasePoint);
        canvas.removeEventListener("pointercancel", releasePoint);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={`h-full w-full ${className ?? ""}`} aria-label="Wedding journey trail" />;
}
