# Design Learning Journal

This journal captures design principles, process notes, vocabulary, and technical
details learned while designing the wedding website. It is meant to help build
design judgment over time, not just document final decisions.

## 2026-07-12: Reading Mood Through Visual Evidence

### Current Exercise

We started with a festive Indian wedding homepage and explored how the hero
changed as we moved it from grand / ceremonial toward more joyful.

The key learning: mood is not magic. Mood comes from visible choices.

### Mood Evidence

When a design feels a certain way, ask:

> What visual clues are making it feel that way?

Useful places to look:

- type size and font personality
- layout alignment and symmetry
- color temperature and contrast
- amount of empty space
- borders, shapes, ornaments, or illustration
- photo treatment
- copy tone
- button style
- section density

### Mood Levers

A mood can be adjusted by moving visual levers. Change one or two levers at a
time so the effect is easier to understand.

| Lever | What It Changes | Example |
| --- | --- | --- |
| Color | Emotional temperature and cultural association | Maroon + gold can feel ceremonial; saffron, coral, rose, and marigold can feel more joyful. |
| Typography | Personality and formality | Large serif names feel grand and invitation-like; cleaner or smaller type can feel more modern or intimate. |
| Scale | How important or monumental something feels | Huge names make the couple feel like the main ceremony; smaller names make room for warmth and activity. |
| Spacing | Pace, calm, density, and importance | Lots of empty space feels grand; tighter rhythmic spacing can feel livelier. |
| Composition | Arrangement and energy | Perfect center symmetry feels formal; offset or layered elements can feel more playful, editorial, or personal. |
| Ornament / Pattern | Cultural and festive signal | Dots, borders, garlands, arches, motifs, and fabric-like patterns can add celebration. |
| Imagery | Specificity and emotional closeness | Candid colorful photos suggest joy; formal portraits suggest ceremony; black or dull photos may fight a colorful theme. |
| Copy | Voice and emotional framing | Formal copy feels ceremonial; words like dance, laugh, food, happy chaos, and family party feel more joyous. |
| Motion | Liveliness and attention | Subtle movement can feel celebratory; too much can feel gimmicky. |

### Composition

Composition means how elements are arranged relative to each other.

Examples:

- A perfectly centered hero feels formal, balanced, and invitation-like.
- A large central name framed by circles feels ceremonial.
- A photo overlapping or sitting near the names can feel more personal or lively.
- Slight asymmetry can make a page feel more modern, editorial, playful, or less
  rigid.
- If the top half of the page is centered and solemn, the whole first impression
  will still feel ceremonial, even if the lower half has colorful details.

### What Made The First Prototype Feel Grand

Observed clues:

- Maroon and gold created an Indian ceremonial association, similar to a grand
  saree or wedding textile.
- The cream background stayed close enough to the palette to keep the spread
  warm, while still letting the central type stand out.
- Large serif names made the couple feel like the main ceremonial anchor.
- The centered layout and circular border made the hero feel formal and
  invitation-like.
- Generous empty space told the visitor to pause and treat the names as
  important.
- Uppercase spaced labels added a formal announcement tone.

Principle:

> Color associations + type personality + scale + spacing + ornament create
> mood.

### Why The First Joyful Pass Was Not Joyful Enough

We changed some surface-level signals:

- background became slightly warmer
- copy became more celebratory
- small pink / coral accents appeared
- a small decorative divider was added

But the structural mood stayed grand because the strongest levers did not change:

- huge centered serif names
- large circular frame
- lots of empty space
- symmetrical composition
- uppercase label
- maroon / gold hierarchy

Principle:

> Small color and copy tweaks cannot overpower layout, scale, and typography.
> If the structure says "ceremony," the page will stay ceremonial.

### Stronger Joyful Adjustments

To make the design more joyful, we moved stronger levers:

- reduced the scale of the names
- made the copy more explicitly about gathering, fun, food, laughter, and family
- added colorful candid-photo placeholders

This made the design more joyful, but the centered ceremony still dominated
because the top half stayed symmetrical and invitation-like.

Principle:

> The first visual zone sets the mood contract. If the top half says "grand
> ceremony," later joyful elements will feel secondary.

### Current Mood Diagnosis

The current design feels:

- grand / ceremonial: still high
- joyful: higher than before, but not dominant
- personal: slightly higher because of photo placeholders and warmer copy
- playful: still low to medium

The next likely lever to explore is composition:

- bring a colorful candid-photo card higher
- reduce or break the central circular frame
- move details into a less perfectly stacked arrangement
- create a more lively relationship between names, copy, date, and imagery

### Coherence Notes

For a joyful colorful direction:

- colorful photos should support the palette; avoid black, dull, or cold imagery
  as the main emotional signal
- candid faces, dancing, family, food, and laughter will push joy more than
  formal portraits
- color should still be systematic, not random
- if ornament is added, it should repeat with purpose so it feels like a design
  language rather than filler

### Technical Notes

The current implementation is a Next.js App Router page with Tailwind utility
classes. The design is currently encoded directly in:

- `src/app/page.tsx`
- `src/app/globals.css`

Prototype techniques used so far:

- CSS gradients for warm color fields
- rounded borders and circular outlines for ceremonial framing
- rotated gradient cards as temporary colorful photo placeholders
- Tailwind responsive classes for mobile behavior
- `clamp()`-style Tailwind arbitrary values for responsive display type

When the design direction stabilizes, extract repeated colors, spacing, and
components into a cleaner design system.
