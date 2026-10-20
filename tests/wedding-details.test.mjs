import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

function loadTypeScriptModule(path) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const transpiledModule = { exports: {} };
  new Function("module", "exports", outputText)(transpiledModule, transpiledModule.exports);
  return transpiledModule.exports;
}

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
const eventsSection = readFileSync(new URL("../src/app/EventsSection.tsx", import.meta.url), "utf8");
const heroCompositionSwitcher = readFileSync(
  new URL("../src/app/HeroCompositionSwitcher.tsx", import.meta.url),
  "utf8",
);
const backgroundMusic = readFileSync(new URL("../src/app/BackgroundMusic.tsx", import.meta.url), "utf8");
const heroSection = readFileSync(new URL("../src/app/HeroSection.tsx", import.meta.url), "utf8");
const languageSwitcher = readFileSync(new URL("../src/app/LanguageSwitcher.tsx", import.meta.url), "utf8");
const countdownSection = readFileSync(new URL("../src/app/CountdownSection.tsx", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const english = loadTypeScriptModule("../src/messages/en.ts").default;
const bengali = loadTypeScriptModule("../src/messages/bn.ts").default;
const weddingData = loadTypeScriptModule("../src/app/weddingData.ts");

test("Raigarh events follow Kolkata events as a separate bilingual group", () => {
  const locales = [english, bengali];
  const expectedNames = [
    ["Bou Bhaat", "Reception Dinner"],
    ["বউভাত", "সংবর্ধনা নৈশভোজ"],
  ];
  const expectedInvitations = [
    "Joining us in Raigarh? We’d love to celebrate with you there too.",
    "রায়গড়ে আমাদের সঙ্গে যোগ দিচ্ছেন? সেখানেও আপনাদের সঙ্গে উদযাপন করতে চাই।",
  ];

  for (const [index, locale] of locales.entries()) {
    const groups = weddingData.getEventGroups(locale.events.groups);
    assert.deepEqual(groups.map(({ id }) => id), ["kolkata", "raigarh"]);
    assert.equal(groups[0].events.length, 3);
    assert.equal(groups[0].events[0].name, locale.events.groups[0].events[0].name);
    assert.deepEqual(
      groups[0].events.map(({ date }) => date),
      index === 0 ? ["03 December", "04 December", "04 December"] : ["৩ ডিসেম্বর", "৪ ডিসেম্বর", "৪ ডিসেম্বর"],
    );
    assert.equal(groups[1].invitation, expectedInvitations[index]);
    assert.deepEqual(groups[1].events.map(({ name }) => name), expectedNames[index]);
    assert.deepEqual(groups[1].events.map(({ date }) => date), [
      index === 0 ? "06 December" : "০৬ ডিসেম্বর",
      index === 0 ? "06 December" : "০৬ ডিসেম্বর",
    ]);
    assert.deepEqual(groups[1].events.map(({ time }) => time),
      index === 0 ? ["1:00 PM", "7:00 PM"] : ["দুপুর ১:০০", "সন্ধ্যা ৭:০০"]);
    assert.deepEqual(
      groups[1].events.map(({ place }) => place),
      index === 0 ? ["Red Queen, Raigarh", "Red Queen, Raigarh"] : ["রেড কুইন, রায়গড়", "রেড কুইন, রায়গড়"],
    );
    assert.deepEqual(groups[1].events.map(({ mapUrl }) => mapUrl), [
      "https://share.google/YsUFwMhoT02GxT2P5",
      "https://share.google/YsUFwMhoT02GxT2P5",
    ]);
    assert.equal(groups[1].events[0].washImage, "/photos/raigarh-bou-bhaat-editorial.jpg");
    assert.equal(groups[1].events[1].washImage, "/photos/raigarh-reception-editorial.jpg");
    assert.match(groups[1].events[0].washImageAlt, /Bengali|বাঙালি/);
    assert.match(groups[1].events[1].washImageAlt, /reception|সংবর্ধনা/);
    assert.match(groups[1].events[1].washImageAlt, /guests|অতিথি/);
  }
});

test("both event layouts render grouped events and preserve the Red Queen map link", () => {
  assert.match(eventCardVariants, /groups\.map\([\s\S]*?group\.events\.map\(/);
  assert.match(eventCardVariants, /group\.invitation/);
  assert.equal((eventCardVariants.match(/group\.events\.map\(/g) ?? []).length, 2);
  assert.match(eventsSection, /getEventGroups\(t\.raw\("events\.groups"\)/);
  assert.match(eventsSection, /<EventsCardVariants groups=\{groups\} version=\{version\} \/>/);
  assert.match(english.events.groups[1].events[0].place, /Red Queen/);
  assert.match(eventCardVariants, /\{t\("events\.directions"\)\}/);
  for (const image of ["../public/photos/raigarh-bou-bhaat-editorial.jpg", "../public/photos/raigarh-reception-editorial.jpg"]) {
    assert.equal(existsSync(new URL(image, import.meta.url)), true);
  }
  const attributions = readFileSync(new URL("../docs/asset-attributions.md", import.meta.url), "utf8");
  assert.match(attributions, /raigarh-bou-bhaat-editorial\.jpg.*AI-generated/i);
  assert.match(attributions, /raigarh-reception-editorial\.jpg.*AI-generated/i);
  assert.match(attributions, /guests in the distance/i);
});

test("Raigarh photos get a darker text-safe wash in the royal event layout", () => {
  assert.match(eventCardVariants, /group\.id === "raigarh"[\s\S]*?rgba\(28,8,14,0\.3\)[\s\S]*?rgba\(28,8,14,0\.54\)/);
});

test("royal desktop dress-code colors appear only on the Haldi card", () => {
  const desktopRoyalLayout = eventCardVariants.slice(
    eventCardVariants.indexOf('className="relative hidden w-full md:block"'),
    eventCardVariants.indexOf("\n      ) : (", eventCardVariants.indexOf('className="relative hidden w-full md:block"')),
  );
  assert.match(desktopRoyalLayout, /event\.id === "kolkataHaldi" && event\.dressCodeColors\?\.length/);
});

test("Raigarh stay is a separate shared hotel group in both locales", () => {
  for (const locale of [english, bengali]) {
    const stay = locale.stay.raigarh;
    assert.equal(stay.name, "Jindal Regency");
    assert.equal(stay.mapsUrl, "https://share.google/XtQJFxhFVehoQYhnm");
    assert.match(stay.label, /Bride & Groom's stay|বর ও কনের থাকার ব্যবস্থা/);
    assert.match(stay.address.join(" "), /Jagatpur|জগতপুর/i);
    assert.match(stay.checkIn, /Flexible|নিজের সুবিধামতো/);
    assert.match(stay.checkOut, /Flexible|নিজের সুবিধামতো/);
    assert.equal(stay.address.join(" ").toLowerCase().includes("raigarh") || stay.address.join(" ").includes("রায়গড়"), true);
  }
  assert.match(staySection, /stay\.raigarh/);
  assert.doesNotMatch(staySection, /raigarh\.side/);
});

test("Kolkata hotel guidance remains unchanged alongside Raigarh lodging", () => {
  assert.deepEqual(english.stay.hotels.map(({ name, side }) => [name, side]), [
    ["Stayotel Hotel", "groom"],
    ["The Grace", "bride"],
  ]);
  assert.equal(english.stay.checkIn, "Check-in available from 3 December, 11 AM");
  assert.equal(english.stay.checkOut, "Check-out by 5 December, 11 AM");
  assert.deepEqual(english.stay.arrival, [
    "Please arrive by 12 noon at the latest on 3 December to settle in, join us for lunch, and enjoy every celebration from the start.",
    "If you are arriving before 10 AM, please let us know beforehand.",
  ]);
});

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

test("parents photo is the final carousel slide in both locales", () => {
  assert.match(storySection, /copyIndex: 12,[\s\S]*?src: "\/photos\/siblings\.jpg"/);
  assert.match(englishMessages, /alt: "Rajshree and Deepesh with their siblings", caption: "With our siblings"/);
  assert.match(bengaliMessages, /alt: "ভাইবোনদের সঙ্গে রাজশ্রী ও দীপেশ", caption: "ভাইবোনদের সঙ্গে"/);
  assert.match(storySection, /copyIndex: 13,[\s\S]*?landscape: true,[\s\S]*?src: "\/photos\/family-gathering-restored\.png"/);
  assert.match(englishMessages, /alt: "Rajshree and Deepesh with family", caption: "With our family"/);
  assert.match(bengaliMessages, /alt: "পরিবারের সঙ্গে রাজশ্রী ও দীপেশ", caption: "আমাদের পরিবারের সঙ্গে"/);
  assert.match(storySection, /copyIndex: 14,[\s\S]*?portrait: true,[\s\S]*?src: "\/photos\/parents\.jpg"/);
  assert.match(englishMessages, /alt: "Rajshree and Deepesh with their parents", caption: "With our parents"/);
  assert.match(bengaliMessages, /alt: "রাজশ্রী ও দীপেশ তাঁদের বাবা-মায়ের সঙ্গে", caption: "আমাদের বাবা-মায়ের সঙ্গে"/);
});

test("siblings photo uses a square mobile frame and the standard desktop portrait frame", () => {
  assert.match(storySection, /mobileSquare: true,[\s\S]*?src: "\/photos\/siblings\.jpg"/);
  assert.match(storyPhotoCarousel, /photo\.mobileSquare \? "aspect-square sm:aspect-\[4\/5\]" : "aspect-\[4\/5\]"/);
});

test("wide family photo stays uncropped in a landscape carousel frame", () => {
  assert.match(storySection, /landscape: true,[\s\S]*?src: "\/photos\/family-gathering-restored\.png"/);
  assert.match(storyPhotoCarousel, /photo\.landscape \? "aspect-\[4\/3\]"/);
  assert.match(storyPhotoCarousel, /photo\.landscape \|\| photo\.portrait \? "object-contain" : "object-cover"/);
});

test("parents photo stays uncropped in a portrait carousel frame", () => {
  assert.match(storySection, /portrait: true,[\s\S]*?src: "\/photos\/parents\.jpg"/);
  assert.match(storyPhotoCarousel, /photo\.portrait \? "aspect-\[3\/4\]"/);
  assert.match(storyPhotoCarousel, /photo\.landscape \|\| photo\.portrait \? "object-contain" : "object-cover"/);
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
  assert.match(staySection, /relative min-h-\[4\.75rem\] pr-28 sm:min-h-\[5\.25rem\] sm:pr-32[\s\S]*?raigarh\.label[\s\S]*?raigarh\.name[\s\S]*?absolute bottom-0 right-0[\s\S]*?hotels\.slice\(\)\.reverse\(\)\.map\(\(hotel\) =>[\s\S]*?src=\{hotel\.characterImage\}/);
  assert.doesNotMatch(staySection, /🤵‍♂️|👰‍♀️/);
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
  assert.match(englishMessages, /label: "Bride & Groom's stay"/);
  assert.match(bengaliMessages, /label: "বর ও কনের থাকার ব্যবস্থা"/);
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
  assert.match(heroSection, /<BackgroundMusic className=\{`\$\{isMusicFixed \? "fixed left-3 top-20" : "absolute bottom-16 left-5"\} z-40 transition-\[top,left,bottom\] duration-300 sm:absolute sm:bottom-14 sm:left-8 sm:top-auto \$\{isMusicVisible \? "" : "invisible pointer-events-none sm:visible sm:pointer-events-auto"\}`\} \/>/);
  assert.match(heroSection, /const \[isMusicVisible, setIsMusicVisible\] = useState\(true\)/);
  assert.match(heroSection, /const \[isMusicFixed, setIsMusicFixed\] = useState\(false\)/);
  assert.match(heroSection, /getElementById\("hero-section"\)/);
  assert.match(heroSection, /getElementById\("story"\)/);
  assert.match(heroSection, /getBoundingClientRect\(\)\.bottom <= 0/);
  assert.match(heroSection, /getBoundingClientRect\(\)\.top > window\.innerHeight/);
  assert.match(heroSection, /addEventListener\("scroll", updateMusicVisibility, \{ passive: true \}\)/);
  assert.doesNotMatch(heroCompositionSwitcher, /pointer-events-none absolute bottom-5 left-5 z-20 flex flex-col/);
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
