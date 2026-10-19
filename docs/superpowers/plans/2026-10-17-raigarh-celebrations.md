# Raigarh Celebrations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an optional Raigarh celebration group and shared Jindal Regency lodging while leaving Kolkata, the landing page, and RSVP unchanged.

**Architecture:** Keep city grouping explicit in localized event data and render the existing Kolkata presentation first, followed by a distinct Raigarh group in both event variants. Keep the current Kolkata hotel list and arrival note; add a separately headed shared Raigarh hotel entry with its own arrival details.

**Tech Stack:** Next.js 16.2.10 App Router, React 19, TypeScript, next-intl, Tailwind CSS, Node.js built-in test runner, ESLint.

**Spec:** `docs/superpowers/specs/2026-10-17-raigarh-celebrations-design.md`

## Global Constraints

- Do not add 6 December to the landing-page date line.
- Do not change the RSVP form; the user has already handled Raigarh attendance there.
- Do not change Kolkata event details, hotel assignments, dates, or arrival guidance.
- Do not add a separate Raigarh navigation item; the Raigarh information lives within Events and Stay.
- Keep the three existing Kolkata events together in their current order and presentation.
- Follow them with a visibly distinct Raigarh group in both existing event layouts and both locales.
- Use the supplied Red Queen and Jindal Regency map links exactly unless verification shows a link resolves incorrectly; pause and ask if it does.
- Use one relevant local image for each Raigarh event (Bou Bhaat and wedding reception); no Red Queen venue image is needed. Record source/attribution as appropriate and store optimized local copies. The Bou Bhaat image uses the user's Pinterest board as art direction and is an AI-generated editorial-style depiction, not an actual event photograph.
- Jindal Regency is one shared Raigarh hotel entry for both sides, with flexible check-in and checkout times (latest user decision supersedes the initial 6 December, 10:00 AM check-in).

## Review Focus

- The legacy Kolkata event order and visual treatment remain unchanged while the Raigarh group is rendered after it; pin both groups and their order in Task 1 tests.
- Both event layouts receive the Raigarh group and retain the exact map destination; pin required event data and verify both variants in Task 1.
- Bengali event names, dates, times, venue, and invitation copy stay legible and localized; pin both-locale values in Task 1 and inspect Bengali rendering in Task 3.
- The shared hotel does not appear as a third bride/groom-specific Kolkata hotel; pin separate group content and labels in Task 2.
- Flexible checkout copy does not imply a specific checkout hour, and the Kolkata arrival note remains unchanged; pin both in Task 2.

---

### Task 1: Add the Raigarh events group

**Files:**
- Modify: `src/app/weddingData.ts`
- Modify: `src/app/EventsSection.tsx`
- Modify: `src/app/EventsCardVariants.tsx`
- Modify: `src/messages/en.ts`
- Modify: `src/messages/bn.ts`
- Test: `tests/wedding-details.test.mjs`
- Create: `public/photos/raigarh-bou-bhaat.jpg`, `public/photos/raigarh-reception.jpg`, and an attribution note

**Interfaces:**
- Define stable event IDs and a `WeddingEventGroup` data type in `src/app/weddingData.ts`; expose `getEventGroups(groups)` that joins localized event text with static map/image metadata by event ID, not array index.
- Pass grouped event data to `EventsCardVariants`; group IDs are `kolkata` and `raigarh`, and the Raigarh group carries the invitation copy.
- Keep the current section header as the Kolkata introduction. Render Raigarh as a new subheading after the Kolkata cards, followed by its two event cards.

- [x] **Step 1: Add failing requirements tests** named `Raigarh events follow Kolkata events as a separate bilingual group` and `both event layouts render Raigarh events with the Red Queen map link`. Assert group IDs/order; the exact English invitation; event names, 6 December date, 1:00 PM and 7:00 PM times; Red Queen venue; supplied map URL; Bengali event/copy values; and that `EventsSection` passes groups into the shared card renderer.
- [x] **Step 2: Run the focused tests and confirm they fail for missing Raigarh data/group rendering.** Run `node --test tests/wedding-details.test.mjs`.
- [x] **Step 3: Add stable IDs for current Kolkata events and two Raigarh events; replace positional event metadata joining with `getEventGroups(groups)` backed by an ID-keyed static metadata record.** Preserve all current Kolkata labels, metadata, and order.
- [x] **Step 4: Add the localized Raigarh invitation and event details to `events.groups` in English and Bengali.** Use “Bou Bhaat” / “বউভাত”, “Reception Dinner” / “সংবর্ধনা নৈশভোজ”, 6 December 2026, the supplied times, Red Queen, and localized photo alt text.
- [x] **Step 5: Source or create images appropriate to Bou Bhaat and a wedding reception.** They need not depict Red Queen; record source/attribution and add optimized local assets. Do not imply the images show the venue or actual menu.
- [x] **Step 6: Render the Raigarh subheading and cards after Kolkata events in both `v2` and `v3` branches.** Keep the Kolkata card markup and styling behavior unchanged; use the local event images with `next/image` and responsive `sizes`.
- [x] **Step 7: Run the focused tests and confirm the new group, bilingual copy, ordering, and both-layout path pass.** Run `node --test tests/wedding-details.test.mjs`.

### Task 2: Add shared Raigarh lodging

**Files:**
- Modify: `src/app/StaySection.tsx`
- Modify: `src/messages/en.ts`
- Modify: `src/messages/bn.ts`
- Test: `tests/wedding-details.test.mjs`

**Interfaces:**
- Keep the existing `stay.hotels` collection and Kolkata arrival guidance intact.
- Add localized `stay.raigarh` data for a shared Jindal Regency card, with location label, address lines, map URL, check-in text, and flexible checkout text.
- Render a distinct Raigarh subsection after the Kolkata hotel pair; do not model the shared hotel as either `side: "groom"` or `side: "bride"`.

- [x] **Step 1: Add failing tests** named `Raigarh stay is a separate shared hotel group in both locales` and `Kolkata hotel guidance remains unchanged`. Assert Jindal Regency, the “Joining us at Raigarh?” caption, address, supplied map link, flexible check-in and checkout wording, and unchanged Kolkata hotel names/check-in/check-out/arrival copy.
- [x] **Step 2: Run the focused tests and confirm the Raigarh lodging assertions fail.** Run `node --test tests/wedding-details.test.mjs`.
- [x] **Step 3: Add `stay.raigarh` in English and Bengali with the user-provided hotel link and verified address.** Preserve current Kolkata translations without edits beyond structural formatting needed by the new property.
- [x] **Step 4: Render a separate Raigarh Stay subsection with one compact shared-property card.** Reuse the current section's typography, border, and map-link treatment; make the city label and shared status explicit.
- [x] **Step 5: Run the focused tests and confirm new Raigarh data and Kolkata parity assertions pass.** Run `node --test tests/wedding-details.test.mjs`.

### Task 3: Verify the integrated bilingual responsive experience

**Files:**
- Test: `tests/wedding-details.test.mjs`
- Inspect: `src/app/EventsSection.tsx`, `src/app/EventsCardVariants.tsx`, `src/app/StaySection.tsx`

- [x] **Step 1: Run the full project test file.** Run `node --test tests/wedding-details.test.mjs`; confirm all tests pass.
- [x] **Step 2: Run lint on changed application, translation, and test files.** Run `npx eslint src/app/weddingData.ts src/app/EventsSection.tsx src/app/EventsCardVariants.tsx src/app/StaySection.tsx src/messages/en.ts src/messages/bn.ts tests/wedding-details.test.mjs`; confirm exit code 0.
- [x] **Step 3: Run the production build.** Run `npm run build`; confirm it completes without errors.
- [ ] **Step 4: Inspect English and Bengali at desktop and mobile widths.** Verify both Events variants show Kolkata first and the optional Raigarh invitation/events second; verify Stay clearly separates Kolkata and Raigarh and has no clipping or horizontal overflow.
- [ ] **Step 5: Verify supplied map links and asset provenance.** Confirm each link resolves to its named venue and the event images are reusable and accurately described; stop and ask if either map destination is wrong or image reuse is not supportable.
- [x] **Step 6: Confirm scope boundaries in the diff.** Ensure no changes to landing-page dates, RSVP, Kolkata event/hotel details, or navigation.
