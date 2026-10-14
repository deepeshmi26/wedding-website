import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const saveTheDate = readFileSync(new URL("../src/app/SaveTheDateSection.tsx", import.meta.url), "utf8");
const gatheringSection = readFileSync(new URL("../src/app/GatheringSection.tsx", import.meta.url), "utf8");
const journeyTrail = readFileSync(new URL("../src/app/JourneyTrail.tsx", import.meta.url), "utf8");
const journeyStyles = readFileSync(new URL("../src/app/OurJourneySection.module.css", import.meta.url), "utf8");
const journeySection = readFileSync(new URL("../src/app/OurJourneySection.tsx", import.meta.url), "utf8");
const storyPhotoCarousel = readFileSync(new URL("../src/app/StoryPhotoCarousel.tsx", import.meta.url), "utf8");
const storySection = readFileSync(new URL("../src/app/StorySection.tsx", import.meta.url), "utf8");
const englishMessages = readFileSync(new URL("../src/messages/en.ts", import.meta.url), "utf8");
const bengaliMessages = readFileSync(new URL("../src/messages/bn.ts", import.meta.url), "utf8");
const rootLayout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const weddingSite = readFileSync(new URL("../src/app/WeddingSite.tsx", import.meta.url), "utf8");
const rsvpBanner = weddingSite;
const rsvpSection = readFileSync(new URL("../src/app/RsvpSection.tsx", import.meta.url), "utf8");
const staySection = readFileSync(new URL("../src/app/StaySection.tsx", import.meta.url), "utf8");
const eventCardVariants = readFileSync(new URL("../src/app/EventsCardVariants.tsx", import.meta.url), "utf8");
const heroCompositionSwitcher = readFileSync(
  new URL("../src/app/HeroCompositionSwitcher.tsx", import.meta.url),
  "utf8",
);
const backgroundMusic = readFileSync(new URL("../src/app/BackgroundMusic.tsx", import.meta.url), "utf8");
const heroSection = readFileSync(new URL("../src/app/HeroSection.tsx", import.meta.url), "utf8");
const languageSwitcher = readFileSync(new URL("../src/app/LanguageSwitcher.tsx", import.meta.url), "utf8");
const countdownSection = readFileSync(new URL("../src/app/CountdownSection.tsx", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");

test("save-the-date follows the live wedding calendar", () => {
  assert.match(saveTheDate, /calendar\.google\.com\/calendar\/u\/0\?cid=/);
  assert.match(saveTheDate, /webcal:\/\/calendar\.google\.com\/calendar\/ical\/be25df75d3c1cefb6785e1614466516f5fb93a9a435d70093af7ebfc7c69ee04%40group\.calendar\.google\.com\/public\/basic\.ics/);
  assert.match(saveTheDate, /Macintosh\|Mac OS X\|iPhone\|iPad\|iPod/);
  assert.match(saveTheDate, /t\("calendar\.apple"\)/);
  assert.doesNotMatch(saveTheDate, /action: "TEMPLATE"/);
  assert.doesNotMatch(saveTheDate, /target="_blank"/);
  assert.match(englishMessages, /apple: "Add to Apple Calendar"/);
  assert.match(bengaliMessages, /apple: "অ্যাপল ক্যালেন্ডারে যোগ করুন"/);
});

test("first-screen dates use ordinal wording in both locales", () => {
  assert.match(englishMessages, /date: "3rd & 4th December 2026"/);
  assert.match(bengaliMessages, /date: "৩রা ও ৪ঠা ডিসেম্বর ২০২৬"/);
});

test("Bengali events invite guests to celebrate with করুন", () => {
  assert.match(bengaliMessages, /invite: "আসুন আমাদের সঙ্গে উদযাপন করুন"/);
});

test("Bengali Haldi event uses the full traditional name", () => {
  assert.match(bengaliMessages, /name: "গায়ে হলুদ"/);
});

test("siblings photo is the final carousel slide in both locales", () => {
  assert.match(storySection, /copyIndex: 12,[\s\S]*?src: "\/photos\/siblings\.jpg"/);
  assert.match(englishMessages, /alt: "Rajshree and Deepesh with their siblings", caption: "With our siblings"/);
  assert.match(bengaliMessages, /alt: "ভাইবোনদের সঙ্গে রাজশ্রী ও দীপেশ", caption: "ভাইবোনদের সঙ্গে"/);
});

test("the RSVP banner leads with a direct bilingual RSVP action", () => {
  assert.match(rsvpBanner, /t\("rsvp\.banner"\)[\s\S]*?<HeroSection/);
  assert.match(rsvpBanner, /href="#rsvp"/);
  assert.match(rsvpSection, /export const RSVP_FORM_URL = "https:\/\/docs\.google\.com\/forms\/d\/e\/1FAIpQLSfuAZgHWb6qDUd7oW3KMIs4TIUGytB9n14BpKvc2v9lbUGbdQ\/viewform"/);
  assert.match(rsvpSection, /href=\{RSVP_FORM_URL\}/);
  assert.doesNotMatch(rsvpBanner, /sticky|fixed/);
  assert.match(englishMessages, /banner: "RSVP by 22nd Oct for hotel bookings"/);
  assert.match(bengaliMessages, /banner: "হোটেল বুকিংয়ের জন্য ২২ অক্টোবরের মধ্যে RSVP করুন"/);
});

test("the slim RSVP banner states the hotel deadline and can be dismissed", () => {
  assert.match(englishMessages, /banner: "RSVP by 22nd Oct for hotel bookings"/);
  assert.match(bengaliMessages, /banner: "হোটেল বুকিংয়ের জন্য ২২ অক্টোবরের মধ্যে RSVP করুন"/);
  assert.match(rsvpBanner, /useState/);
  assert.match(rsvpBanner, /aria-label=\{t\("rsvp\.dismiss"\)\}/);
  assert.match(rsvpBanner, /onClick=\{\(\) => setIsRsvpBannerVisible\(false\)\}/);
  assert.match(rsvpBanner, /py-1(?:\s|"|`)/);
  assert.match(englishMessages, /dismiss: "Dismiss RSVP reminder"/);
  assert.match(bengaliMessages, /dismiss: "RSVP বার্তাটি বন্ধ করুন"/);
});

test("the banner RSVP action smoothly reveals the on-page RSVP section", () => {
  assert.match(rsvpBanner, /href="#rsvp"/);
  assert.doesNotMatch(rsvpBanner, /href=\{RSVP_FORM_URL\}/);
  assert.match(rsvpSection, /<section id="rsvp"/);
  assert.match(rsvpSection, /href=\{RSVP_FORM_URL\}/);
  assert.match(globalStyles, /html\s*\{\s*scroll-behavior:\s*smooth;/);
  assert.match(globalStyles, /prefers-reduced-motion:\s*reduce[\s\S]*?scroll-behavior:\s*auto/);
});

test("the RSVP strip centers its grouped content on larger screens", () => {
  assert.match(rsvpBanner, /sm:justify-center/);
  assert.match(rsvpBanner, /sm:flex-none/);
  assert.match(rsvpBanner, /sm:text-center/);
});

test("event cards do not repeat the Kolkata image caption", () => {
  assert.doesNotMatch(eventCardVariants, /Kolkata, held close\./);
});

test("the site gives every guest both hotel stays and clear arrival guidance", () => {
  assert.match(weddingSite, /import \{ StaySection \} from "\.\/StaySection"/);
  assert.match(weddingSite, /<RsvpSection \/>\s*<StaySection \/>\s*<SaveTheDateSection \/>/);
  assert.match(heroSection, /nav\.rsvp[\s\S]*nav\.stay[\s\S]*nav\.calendar/);
  assert.match(staySection, /id="stay"/);
  assert.match(staySection, /t\.raw\("stay\.hotels"\)/);
  assert.match(staySection, /MapPin/);
  assert.match(staySection, /import Image from "next\/image"/);
  assert.match(staySection, /hotel\.characterImage/);
  assert.match(staySection, /h-16 w-auto object-contain sm:h-20/);
  assert.match(staySection, /p-5 shadow-\[0_14px_32px_rgba\(87,43,50,0\.08\)\] sm:p-6/);
  assert.match(staySection, /min-h-\[4\.75rem\] pr-20 sm:min-h-\[5\.25rem\] sm:pr-24/);
  assert.match(englishMessages, /characterImage: "\/graphics\/stay-groom-character\.png"/);
  assert.match(englishMessages, /characterImage: "\/graphics\/stay-bride-character\.png"/);
  assert.match(englishMessages, /stay: \{ eyebrow: "Stay", title: "Stay in Kolkata"/);
  assert.doesNotMatch(englishMessages, /Both hotel stays are here for easy reference/);
  assert.match(englishMessages, /name: "Stayotel Hotel"/);
  assert.match(englishMessages, /name: "The Grace"/);
  assert.match(englishMessages, /side: "groom"/);
  assert.match(englishMessages, /side: "bride"/);
  assert.match(englishMessages, /maps: "Open in Maps"/);
  assert.match(englishMessages, /3 December/);
  assert.match(englishMessages, /Check-in available from 3 December, 11 AM/);
  assert.match(englishMessages, /Please arrive by 12 noon at the latest on 3 December to settle in, join us for lunch, and enjoy every celebration from the start\./);
  assert.match(bengaliMessages, /stay: \{ eyebrow: "থাকার ব্যবস্থা", title: "কলকাতায় থাকার ব্যবস্থা"/);
  assert.match(bengaliMessages, /আরামে গুছিয়ে নিয়ে, দুপুরের খাবারে যোগ দিতে ও শুরু থেকেই সব অনুষ্ঠানে থাকতে ৩ ডিসেম্বর সর্বোচ্চ দুপুর ১২টার মধ্যে পৌঁছনোর অনুরোধ রইল।/);
  assert.match(bengaliMessages, /সকাল ১০টার আগে পৌঁছলে, দয়া করে আগে থেকে আমাদের জানাবেন।/);
  assert.match(bengaliMessages, /checkIn: "৩ ডিসেম্বর, সকাল ১১টা থেকে চেক-ইন উপলব্ধ"/);
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

test("desktop journey keeps its introduction clear of the route canvas", () => {
  assert.match(journeySection, /className=\{styles\.headingRow\}/);
  assert.match(journeyStyles, /\.headingRow \{\s*align-items: flex-end;\s*display: flex;/);
  assert.match(journeyStyles, /@media \(min-width: 768px\)[\s\S]*?\.canvasWrap \{\s*height: 68svh;\s*max-width: none;\s*top: 23svh;/);
});

test("desktop photo album cards are capped by viewport height", () => {
  assert.match(storyPhotoCarousel, /lg:flex-\[0_0_min\(42vw,56svh\)\]/);
});

test("Bengali desktop hero reserves a readable text rhythm", () => {
  assert.match(heroCompositionSwitcher, /useLocale/);
  assert.match(heroCompositionSwitcher, /const isBengali = locale === "bn";/);
  assert.match(heroCompositionSwitcher, /font-serif leading-\[0\.96\] tracking-normal/);
  assert.match(heroCompositionSwitcher, /mb-7 max-w-\[34rem\] leading-relaxed tracking-\[0\.2em\]/);
});

test("background music keeps its actual state across a locale change", () => {
  assert.match(backgroundMusic, /src="\/audio\/pardesiya\.mp3"/);
  assert.match(backgroundMusic, /loop/);
  assert.match(backgroundMusic, /audio\.play\(\)/);
  assert.match(backgroundMusic, /BACKGROUND_MUSIC_STATE_KEY/);
  assert.match(backgroundMusic, /sessionStorage\.getItem\(BACKGROUND_MUSIC_STATE_KEY\) === "paused"/);
  assert.match(languageSwitcher, /document\.querySelector<HTMLAudioElement>\("\[data-background-music\]"\)/);
  assert.match(languageSwitcher, /sessionStorage\.setItem\(BACKGROUND_MUSIC_STATE_KEY, audio\.paused \? "paused" : "playing"\)/);
  assert.doesNotMatch(backgroundMusic, /autoPlay/);
  assert.match(backgroundMusic, /aria-label=\{isPlaying \? t\("audio\.pause"\) : t\("audio\.play"\)\}/);
  assert.match(backgroundMusic, /h-9 w-9/);
  assert.match(backgroundMusic, /bg-\[\#6e1836\]\/90/);
  assert.match(backgroundMusic, /active:scale-\[0\.94\]/);
  assert.match(backgroundMusic, /useReducedMotion/);
  assert.match(backgroundMusic, /!isPlaying && !shouldReduceMotion/);
  assert.match(backgroundMusic, /scale: \[1, 1\.65, 1\.9\]/);
  assert.match(backgroundMusic, /duration: 0\.82/);
  assert.match(backgroundMusic, /repeatDelay: 0\.12/);
  assert.match(backgroundMusic, /delay: 0\.38/);
  assert.match(backgroundMusic, /y: \[0, -1\.5, 0\], rotate: \[0, -4, 3, 0\]/);
  assert.match(backgroundMusic, /repeatDelay: 0\.28/);
  assert.match(heroSection, /import \{ BackgroundMusic \} from "\.\/BackgroundMusic"/);
  assert.match(heroSection, /<BackgroundMusic className="absolute right-4 top-16 z-40 lg:bottom-8 lg:right-8 lg:top-auto" \/>/);
  assert.doesNotMatch(countdownSection, /BackgroundMusic/);
  assert.match(backgroundMusic, /export function BackgroundMusicProvider/);
  assert.match(heroCompositionSwitcher, /import \{ LanguageSwitcher \} from "\.\/LanguageSwitcher"/);
  assert.match(heroCompositionSwitcher, /<LanguageSwitcher className="absolute bottom-5 right-5 z-20 text-\[\#fff8ef\] \[text-shadow:0_2px_8px_rgba\(45,20,13,0\.55\)\] sm:bottom-8 sm:right-8 lg:hidden" \/>/);
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
