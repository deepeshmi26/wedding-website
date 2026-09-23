import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const saveTheDate = readFileSync(new URL("../src/app/SaveTheDateSection.tsx", import.meta.url), "utf8");
const gatheringSection = readFileSync(new URL("../src/app/GatheringSection.tsx", import.meta.url), "utf8");
const journeyTrail = readFileSync(new URL("../src/app/JourneyTrail.tsx", import.meta.url), "utf8");
const journeyStyles = readFileSync(new URL("../src/app/OurJourneySection.module.css", import.meta.url), "utf8");
const englishMessages = readFileSync(new URL("../src/messages/en.ts", import.meta.url), "utf8");
const bengaliMessages = readFileSync(new URL("../src/messages/bn.ts", import.meta.url), "utf8");
const rootLayout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");

test("save-the-date opens a timed wedding event on 4 December", () => {
  assert.ok(saveTheDate.includes('dates: "20261204T174500/20261204T234500"'));
  assert.ok(saveTheDate.includes('ctz: "Asia/Kolkata"'));
  assert.doesNotMatch(saveTheDate, /target="_blank"/);
});

test("first-screen dates use ordinal wording in both locales", () => {
  assert.match(englishMessages, /date: "3rd & 4th December 2026"/);
  assert.match(bengaliMessages, /date: "৩রা ও ৪ঠা ডিসেম্বর ২০২৬"/);
});

test("journey keeps the tram out of the opening mobile moment", () => {
  assert.match(journeyTrail, /const isTramVisible = !reducedMotion && routeProgress > 0\.015;/);
  assert.match(journeyTrail, /showTram && isTramVisible/);
});

test("secret chapters sits closer to its trail point", () => {
  assert.match(journeyTrail, /\{ align: "left", offsetX: 18, offsetY: -24 \}/);
});

test("journey hides its optional intro on short screens", () => {
  assert.match(journeyStyles, /@media \(max-height: 44rem\)/);
  assert.match(journeyStyles, /\.intro \{\s*display: none;/);
});

test("Kolkata invitation keeps the photo strips on mobile and uses one Howrah scene on desktop", () => {
  assert.match(gatheringSection, /grid grid-rows-5 sm:hidden/);
  assert.match(gatheringSection, /hidden sm:block/);
  assert.match(gatheringSection, /src="\/graphics\/howrah-bridge-sunset-wash-v2\.jpeg"/);
  assert.match(gatheringSection, /sizes="100vw"/);
});

test("desktop keeps the Howrah scene fixed while the invitation rises over it", () => {
  assert.doesNotMatch(gatheringSection, /desktopBackgroundOpacity/);
  assert.match(gatheringSection, /className="absolute inset-0 hidden sm:block"/);
  assert.match(gatheringSection, /className="absolute inset-0 z-\[5\] flex items-center justify-center/);
  assert.match(gatheringSection, /sm:flex sm:px-12/);
  assert.match(gatheringSection, /style=\{\{ y: shouldReduceMotion \? "0%" : paperCoverY \}\}/);
});

test("the invitation copy has one responsive layer", () => {
  assert.match(gatheringSection, /<InvitationCopy headingId="gathering-heading" \/>/);
  assert.doesNotMatch(gatheringSection, /<InvitationCopy \/>/);
});

test("secret-chapters copy ends without the parent aside", () => {
  assert.doesNotMatch(englishMessages, /Sorry, parents\./);
  assert.doesNotMatch(bengaliMessages, /সরি, বাবা-মা।/);
});

test("root layout loads GA4 only when a measurement ID is configured", () => {
  assert.match(rootLayout, /import Script from "next\/script"/);
  assert.match(rootLayout, /process\.env\.NEXT_PUBLIC_GA_MEASUREMENT_ID/);
  assert.match(rootLayout, /googletagmanager\.com\/gtag\/js\?id=/);
  assert.match(rootLayout, /gtag\("config",/);
});
