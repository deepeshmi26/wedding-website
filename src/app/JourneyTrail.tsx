"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Point = { x: number; y: number };
type ArcLengthMap = {
  samples: Array<{ distance: number; progress: number }>;
  totalDistance: number;
};
type JourneyMoment = {
  kicker: string;
  copy: string;
  align: "left" | "right" | "center";
  offsetX: number;
  offsetY: number;
};

// Every curve after the first adds two handles and a new endpoint.
const initialPoints: Point[] = [
  { x: 0.1576, y: 0.06 },
  { x: 0.0463, y: 0.1304 },
  { x: 0.8579, y: 0.0458 },
  { x: 0.8506, y: 0.1578 },
  { x: 0.7857, y: 0.2914 },
  { x: 0.3768, y: 0.2072 },
  { x: 0.2627, y: 0.2556 },
  { x: 0.1448, y: 0.3809 },
  { x: 0.3875, y: 0.3259 },
  { x: 0.7912, y: 0.3533 },
  { x: 0.97, y: 0.396 },
  { x: 0.2485, y: 0.3945 },
  { x: 0.3411, y: 0.4511 },
  { x: 0.3552, y: 0.5075 },
  { x: 0.877, y: 0.4865 },
  { x: 0.6392, y: 0.5489 },
  { x: 0.275, y: 0.5985 },
  { x: 0.1718, y: 0.6254 },
  { x: 0.3977, y: 0.6467 },
  { x: 0.7367, y: 0.6748 },
  { x: 0.415, y: 0.7627 },
  { x: 0.68, y: 0.7444 },
  { x: 0.94, y: 0.7354 },
  { x: 0.7506, y: 0.8849 },
  { x: 0.5154, y: 0.8422 },
  { x: 0.093, y: 0.8218 },
  { x: 0.2316, y: 0.94 },
  { x: 0.92, y: 0.94 },
];

const curveCount = (initialPoints.length - 1) / 3;
const routeIntroProgress = 0.08;
const showEditorGuides = false;
const showTram = true;
const isEditable = false;
const journeyMomentLayout: Array<Omit<JourneyMoment, "kicker" | "copy">> = [
  { align: "left", offsetX: 44, offsetY: 56 }, { align: "right", offsetX: -16, offsetY: 14 }, { align: "left", offsetX: 16, offsetY: 14 }, { align: "right", offsetX: -16, offsetY: 14 }, { align: "left", offsetX: 16, offsetY: 16 }, { align: "right", offsetX: 0, offsetY: 14 }, { align: "left", offsetX: 0, offsetY: 16 }, { align: "right", offsetX: 0, offsetY: -46 }, { align: "center", offsetX: 0, offsetY: -150 }, { align: "right", offsetX: -16, offsetY: 60 }
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

function createArcLengthMap(points: Point[], width: number, height: number): ArcLengthMap {
  const samples: ArcLengthMap["samples"] = [{ distance: 0, progress: 0 }];
  let distance = 0;
  let previous = { x: points[0].x * width, y: points[0].y * height };

  for (let curveIndex = 0; curveIndex < curveCount; curveIndex += 1) {
    const pointIndex = curveIndex * 3;
    const start = points[pointIndex];
    const controlOne = points[pointIndex + 1];
    const controlTwo = points[pointIndex + 2];
    const end = points[pointIndex + 3];

    for (let step = 1; step <= 96; step += 1) {
      const curveProgress = step / 96;
      const point = cubicPointAt(start, controlOne, controlTwo, end, curveProgress);
      const scaled = { x: point.x * width, y: point.y * height };
      distance += Math.hypot(scaled.x - previous.x, scaled.y - previous.y);
      samples.push({ distance, progress: (curveIndex + curveProgress) / curveCount });
      previous = scaled;
    }
  }

  return { samples, totalDistance: distance };
}

function routeProgressAtDistance(map: ArcLengthMap, distanceProgress: number) {
  const targetDistance = Math.min(Math.max(distanceProgress, 0), 1) * map.totalDistance;
  const sampleIndex = map.samples.findIndex((sample) => sample.distance >= targetDistance);
  if (sampleIndex === -1) return map.samples.at(-1)?.progress ?? 1;
  if (sampleIndex <= 0) return map.samples[0].progress;

  const previous = map.samples[sampleIndex - 1];
  const next = map.samples[sampleIndex] ?? previous;
  const segmentDistance = next.distance - previous.distance;
  const segmentProgress = segmentDistance === 0 ? 0 : (targetDistance - previous.distance) / segmentDistance;

  return previous.progress + (next.progress - previous.progress) * segmentProgress;
}

function distanceProgressAtRoute(map: ArcLengthMap, routeProgress: number) {
  const sampleIndex = map.samples.findIndex((sample) => sample.progress >= routeProgress);
  if (sampleIndex <= 0 || map.totalDistance === 0) return 0;

  const previous = map.samples[sampleIndex - 1];
  const next = map.samples[sampleIndex] ?? previous;
  const segmentProgress = next.progress === previous.progress ? 0 : (routeProgress - previous.progress) / (next.progress - previous.progress);

  return (previous.distance + (next.distance - previous.distance) * segmentProgress) / map.totalDistance;
}

function stationArrivalAt(progress: number, stationProgresses: number[]) {
  return Math.max(...stationProgresses.map((stationProgress) => Math.max(0, 1 - Math.abs(progress - stationProgress) / 0.035)));
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

function drawRouteUntil(context: CanvasRenderingContext2D, points: Point[], progress: number) {
  const { pointIndex, progress: curveProgress } = curvePositionAt(progress);

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);

  for (let curveIndex = 0; curveIndex < curveCount; curveIndex += 1) {
    const curvePointIndex = curveIndex * 3;
    const start = points[curvePointIndex];
    const controlOne = points[curvePointIndex + 1];
    const controlTwo = points[curvePointIndex + 2];
    const end = points[curvePointIndex + 3];

    if (curvePointIndex < pointIndex) {
      context.bezierCurveTo(controlOne.x, controlOne.y, controlTwo.x, controlTwo.y, end.x, end.y);
      continue;
    }

    if (curvePointIndex === pointIndex) {
      const steps = Math.max(1, Math.ceil(curveProgress * 28));
      for (let step = 1; step <= steps; step += 1) {
        const point = cubicPointAt(start, controlOne, controlTwo, end, (curveProgress * step) / steps);
        context.lineTo(point.x, point.y);
      }
    }
    break;
  }

  context.stroke();
}

function drawTram(context: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, angle: number, width: number, scale: number) {
  const tramWidth = Math.min(Math.max(width * 0.17, 58), 86) * scale;
  const tramHeight = tramWidth * 0.76;

  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 220, 45, 1100, 840, -tramWidth / 2, -tramHeight / 2, tramWidth, tramHeight);
  context.restore();
}

type JourneyTrailProps = {
  className?: string;
};

export function JourneyTrail({ className }: JourneyTrailProps) {
  const t = useTranslations();
  const journeyMoments = useMemo(() => {
    const copy = t.raw("journey.moments") as Array<Pick<JourneyMoment, "kicker" | "copy">>;
    return journeyMomentLayout.map((layout, index) => ({ ...layout, ...copy[index] }));
  }, [t]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [revealedStation, setRevealedStation] = useState(0);
  const [isOpeningMomentVisible, setIsOpeningMomentVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scrollRoot = canvas?.closest<HTMLElement>("[data-journey-scroll]");
    if (!canvas || !scrollRoot) return;

    const points = initialPoints.map((point) => ({ ...point }));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tramImage = new Image();
    let activePoint = -1;
    let scrollProgress = 0;
    let routeProgress = 0;

    const draw = () => {
      const context = canvas.getContext("2d");
      const { height, width } = canvas.getBoundingClientRect();
      if (!context || width === 0 || height === 0) return;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const trackHeight = height * (width < 768 ? 5.5 : 4.5);
      const distanceProgress = reducedMotion ? 1 : Math.max(routeProgress, 0.01);
      const arcLengthMap = createArcLengthMap(points, width, trackHeight);
      const revealedProgress = routeProgressAtDistance(arcLengthMap, distanceProgress);
      const tramProgress = reducedMotion ? 0 : revealedProgress;
      const tramDistanceProgress = reducedMotion ? 0 : distanceProgress;
      const stationProgresses = Array.from({ length: curveCount + 1 }, (_, index) => distanceProgressAtRoute(arcLengthMap, index / curveCount));
      const traveler = pointAt(points, tramProgress);
      const trackOffset = height * 0.33 - traveler.y * trackHeight;
      const scaled = points.map((point) => ({ x: point.x * width, y: point.y * trackHeight }));

      if (trackRef.current) {
        trackRef.current.style.height = `${trackHeight}px`;
        trackRef.current.style.transform = `translate3d(0, ${trackOffset}px, 0)`;
      }

      context.save();
      context.translate(0, trackOffset);

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
      drawRouteUntil(context, scaled, 1);

      context.strokeStyle = "#842b45";
      context.lineWidth = 2;
      context.setLineDash([6, 10]);
      context.lineCap = "round";
      drawRouteUntil(context, scaled, revealedProgress);

      context.setLineDash([]);
      scaled.forEach((point, index) => {
        const isAnchor = index % 3 === 0;
        if (!isAnchor && !showEditorGuides) return;
        const stationProgress = isAnchor ? stationProgresses[index / 3] : 0;
        const arrival = isAnchor ? Math.max(0, 1 - Math.abs(tramDistanceProgress - stationProgress) / 0.035) : 0;

        context.globalAlpha = 1;

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

        context.globalAlpha = 1;
      });

      if (showTram && tramImage.complete && tramImage.naturalWidth > 0) {
        const tangent = tangentAt(points, tramProgress);
        const angle = Math.atan2(tangent.y * trackHeight, tangent.x * width);
        drawTram(context, tramImage, traveler.x * width, traveler.y * trackHeight, angle, width, 1 + stationArrivalAt(tramDistanceProgress, stationProgresses) * 0.08);
      }

      context.restore();
    };

    const updateScrollProgress = () => {
      const bounds = scrollRoot.getBoundingClientRect();
      const travelDistance = bounds.height - window.innerHeight;

      scrollProgress = travelDistance > 0 ? Math.min(Math.max(-bounds.top / travelDistance, 0), 1) : 0;
      routeProgress = reducedMotion ? 1 : Math.max((scrollProgress - routeIntroProgress) / (1 - routeIntroProgress), 0);
      const nextRevealedStation = reducedMotion ? curveCount : Math.floor(Math.min(routeProgress + 0.035, 1) * curveCount);
      setRevealedStation((current) => (current === nextRevealedStation ? current : nextRevealedStation));
      setIsOpeningMomentVisible(reducedMotion || scrollProgress >= routeIntroProgress);
      draw();
    };

    const resizeObserver = new ResizeObserver(updateScrollProgress);
    resizeObserver.observe(canvas);
    resizeObserver.observe(scrollRoot);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    tramImage.addEventListener("load", updateScrollProgress);
    tramImage.src = "/graphics/kolkata-tram-journey.png";
    updateScrollProgress();

    const pointFromEvent = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const trackHeight = bounds.height * (bounds.width < 768 ? 5.5 : 4.5);
      const distanceProgress = reducedMotion ? 1 : Math.max(routeProgress, 0.01);
      const arcLengthMap = createArcLengthMap(points, bounds.width, trackHeight);
      const tramProgress = reducedMotion ? 0 : routeProgressAtDistance(arcLengthMap, distanceProgress);
      const traveler = pointAt(points, tramProgress);
      const trackOffset = bounds.height * 0.33 - traveler.y * trackHeight;

      return {
        trackHeight,
        width: bounds.width,
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top - trackOffset,
      };
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
      activePoint = points.findIndex((point) => Math.hypot(point.x * pointer.width - pointer.x, point.y * pointer.trackHeight - pointer.y) < 30);
      if (activePoint !== -1) canvas.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (activePoint === -1) return;
      const pointer = pointFromEvent(event);
      points[activePoint] = {
        x: Math.min(Math.max(pointer.x / pointer.width, 0.03), 0.97),
        y: Math.min(Math.max(pointer.y / pointer.trackHeight, 0.03), 0.97),
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
  }, [journeyMoments]);

  return (
    <div className={`relative h-full w-full ${className ?? ""}`}>
      <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full ${isEditable ? "cursor-grab touch-none" : ""}`} aria-label={t("accessibility.journeyTrail")} />
      <ol ref={trackRef} aria-label={t("accessibility.journeyList")} className="pointer-events-none absolute left-0 top-0 m-0 w-full list-none p-0 will-change-transform">
        {journeyMoments.map((moment, index) => {
          const anchor = initialPoints[index * 3];
          const transform = moment.align === "left" ? "translate(0, -50%)" : moment.align === "right" ? "translate(-100%, -50%)" : "translate(-50%, -50%)";

          return (
            <li
              className="absolute w-[min(17rem,60vw)] text-[#2f1723] transition-[opacity,transform] duration-500 ease-out [text-shadow:0_1px_14px_rgba(248,243,234,0.98)]"
              key={moment.kicker}
              style={{
                left: `calc(${anchor.x * 100}% + ${moment.offsetX}px)`,
                opacity: index === 0 ? (isOpeningMomentVisible ? 1 : 0) : index <= revealedStation ? 1 : 0,
                top: `calc(${anchor.y * 100}% + ${moment.offsetY}px)`,
                transform: `${transform} ${index === 0 ? (isOpeningMomentVisible ? "translateY(0)" : "translateY(1rem)") : index <= revealedStation ? "translateY(0)" : "translateY(1rem)"}`,
              }}
            >
              <p className="m-0 font-sans text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#842b45]">{moment.kicker}</p>
              <p className="mt-2 font-serif text-[1.1rem] font-semibold italic leading-[1.2] text-[#2f1723]">{moment.copy}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
