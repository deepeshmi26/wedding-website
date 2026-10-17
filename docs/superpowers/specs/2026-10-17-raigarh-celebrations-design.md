# Raigarh Celebrations Design

## Status

Design proposal for user review. No product code changes are authorized by this document alone.

## Goal

Add the Raigarh celebrations as an optional continuation of the wedding for guests who join the couple there, while keeping the existing Kolkata schedule and lodging clearly distinct and unchanged.

## Approved Scope

### Events

- Keep the three existing Kolkata events together in their current order and presentation.
- Follow them with a visibly distinct Raigarh group.
- Introduce the Raigarh group with: “Joining us in Raigarh? We’d love to celebrate with you there too.”
- Add two events for 6 December 2026, both at Red Queen, Raigarh:
  - Bou Bhaat, 1:00 PM.
  - Wedding Reception, 7:00 PM.
- Link both event cards to the Red Queen map link supplied by the user: `https://share.google/YsUFwMhoT02GxT2P5`.
- Use a Red Queen venue photo sourced online as the Raigarh event visual. Prefer an official or otherwise reusable image, retain source/attribution details as appropriate, and store an optimized local copy rather than relying on a third-party runtime URL.
- Make the location grouping and event details available in both existing event layouts and both site locales (English and Bengali).

### Stay

- Keep both existing Kolkata hotel cards and their guidance together and unchanged.
- Add a separate Raigarh lodging group for Jindal Regency, explicitly shared by the bride's and groom's guests.
- Show check-in on 6 December at 10:00 AM and checkout at a flexible time, using the user's wording/meaning (“at your own time”).
- Link to the Jindal Regency map link supplied by the user: `https://share.google/XtQJFxhFVehoQYhnm`.
- Include the property address in the localized card, verified against the supplied map or the hotel's official source.
- Keep the Raigarh hotel visually separate from the Kolkata hotels so guests cannot confuse the cities.

## Explicitly Out Of Scope

- Do not add 6 December to the landing-page date line.
- Do not change the RSVP form; the user has already handled Raigarh attendance there.
- Do not change Kolkata event details, hotel assignments, dates, or arrival guidance.
- Do not add a separate Raigarh navigation item; the Raigarh information lives within Events and Stay.

## Implementation Approach

- Extend the shared event data model in `src/app/weddingData.ts` to represent location groups, rather than relying on card position or event-name checks.
- Update `src/app/EventsSection.tsx` and `src/app/EventsCardVariants.tsx` to render the Kolkata and Raigarh groups in order, with the Raigarh invitation heading and its two event cards. Preserve both existing visual variants.
- Update `src/app/StaySection.tsx` to render location-specific groups, keeping the Kolkata pair together and adding one shared Raigarh hotel card.
- Add all new visitor-facing strings and event/stay data to `src/messages/en.ts` and `src/messages/bn.ts`.
- Add the chosen venue image as an optimized local asset under `public/` and provide accurate alternative text in both locales if it conveys information; use empty alternative text if it is purely decorative.

## Verification

- Add focused tests for Raigarh event grouping, dates, times, venue, and map links in both locales.
- Verify the Raigarh hotel is labeled separately, shared by both sides, and has the requested check-in/check-out details and map link.
- Verify the existing Kolkata events and hotel content remain unchanged.
- Run the relevant test suite, lint, and production build.
- Inspect both event layouts and the Stay section in English and Bengali at desktop and mobile widths for order, legibility, and overflow.

## Open Implementation Detail

The user supplied Google share links for both map destinations. Preserve those exact links unless verification reveals that one does not resolve to the named location; if a supplied link is invalid, pause and ask rather than silently substituting another destination.
