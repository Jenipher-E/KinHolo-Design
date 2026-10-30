# KinHolo v2 style guide

Design C, "Daylight title card". This guide is the source of truth for building the KinHolo mobile app from the screens in `index.html`. Tokens live in `tokens/tokens.json` and `tokens/tokens.css`. When this guide and a screen disagree, the guide wins and the screen should be fixed.

## 1. Principles

1. **Calm first.** One clear thing to do per screen. Colour is spent on meaning, never on decoration.
2. **Show the household, not the features.** Screens lead with what is happening at home today: who is shopping, what is due tonight, what is left this month.
3. **Cinematic through framing, not effects.** Deep teal title bands work like an opening title. The household photo sits behind them. No glows, gradients on buttons, blurs or animated flourishes.
4. **White is the working surface.** Content sits on white sheets. Teal is for headers and primary actions only.
5. **Plain words.** Sentence case, short sentences, no jargon. Privacy is said as reassurance.

## 2. Colour

KinHolo colours only. No new hues.

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Band ground, primary button | `teal.900` | `#0E3A40` | Title bands, primary buttons, selected states, headings |
| Brand teal | `teal.700` | `#1C6E78` | Links, icons in rows, progress bars, ticks |
| Teal 500 | `teal.500` | `#2A8C99` | Calendar dots only |
| Teal 300 | `teal.300` | `#74B7C0` | Accents on teal (week strip dots) |
| Teal 100 | `teal.100` | `#E4F0F1` | Offline bar, current item in the menu |
| Coral | `coral.base` | `#E2683C` | The "now" line, unread dots, the over-budget bar. Never a fill behind text |
| Coral text | `coral.text` | `#B9502A` | Small coral text such as "Out of stock", "Today", "Sign out" |
| Cornflower | `cornflower.base` | `#2E5A87` | Avatar colour, the K stem in the mark |
| Green | `green.base` | `#2E8C5A` | Live dot, strong password bar, avatar colour |
| Ink | `neutral.ink` | `#1E2A2D` | Body text |
| Muted | `neutral.muted` | `#5F7173` | Secondary text, meta, inactive tabs |
| Dividers | `neutral.divider` | `#EAF0F0` | Row separators |
| Card border | `neutral.borderCard` | `#E3EAEB` | Cards, message cards, grouped lists |
| Control border | `neutral.borderControl` | `#CFDCDD` | Inputs, outline buttons, chips |

Rules:

- Text on white uses ink, `#3B4A4C` or muted only. All pairs meet 4.5:1.
- Coral `#E2683C` fails contrast for small text on white. Use `coral.text` for any coral words.
- On the title band, the kicker is `#9CC9CF`, the subline `#CFE3E6` and the title white.
- Avatars use the household palette in order: teal 700, cornflower, coral, green, teal 300 for pending invites.

## 3. Typography

Two families, loaded from Google Fonts.

- **Newsreader 400** for display: screen titles, section titles, big numbers.
- **Hanken Grotesk 400, 500, 600** for everything else.

| Style | Family | Size / line | Notes |
| --- | --- | --- | --- |
| Display | Newsreader | 33 / 1.05 | Band titles and sign-up titles. Tracking -0.015em |
| Title | Newsreader | 26 / 1.15 | Bottom sheet titles |
| Section | Newsreader | 25 / 1.15 | "It's just you for now." |
| Big input | Newsreader | 28 | Name of a new list or task while typing |
| Number XL | Newsreader | 62 | Expense amount. Lining, tabular figures |
| Number L | Newsreader | 27 to 31 | Counts on cards ("7/11", "€316") |
| Body | Hanken | 15 / 1.5 | Leads and paragraphs |
| Row | Hanken 500 | 15.5 / 1.3 | Primary line in any list row |
| Small | Hanken | 13.5 / 1.45 | Secondary lines, helper text |
| Caption | Hanken 600 | 12.5 to 13.5 | Group headings in lists ("Fruit and veg", "Today") |
| Tab | Hanken 500, active 650 | 11 | Tab bar labels |

Rules:

- Sentence case everywhere. No all-caps labels, no letter-spaced eyebrows, no monospace labels.
- Hierarchy comes from size and family, not colour. Headings are teal 900, body is ink.
- Times and money always use tabular figures.

## 4. Layout and spacing

- Screen frame: 390 by 844 design size (shown at 360 by 780 on the canvas). Corner radius 44 on the canvas only.
- Gutters: 24 on white sheets, 22 inside the title band.
- Section gap: 20 above a section heading, 8 below it.
- List rows: 10 to 13 vertical padding, separated by a 1px `divider` line. No cards around rows unless they are tappable summaries.
- Touch targets: 44 minimum. Primary buttons are 54 high, compact buttons 40.
- Bottom of every scrolling screen must clear the tab bar. Nothing important sits behind it.

## 5. Shape and depth

| Element | Radius |
| --- | --- |
| Sheet top over a band | 26 |
| Cards, message cards, grouped lists, option cards | 18 |
| Primary and outline buttons | 16 |
| Inputs | 14 |
| Segmented control, compact buttons | 12 |
| Chips, avatars, icon buttons | full |

Depth is almost flat. Cards get `0 1px 2px rgba(14,58,64,.05)` at most. The drawer gets one soft side shadow. No coloured shadows, no glows.

## 6. Components

### Title band
Teal 900 block at the top of every main screen. Contains, top to bottom: menu icon and kicker (date or back link), display title, one subline. Optional right slot for the avatar or a "New" outline button. Bottom padding 34 so the white sheet can overlap by 24.

**Household photo.** If the household has a photo, it fills the band behind the text, positioned at centre 30%, under the photo scrim (`band.photoScrim*`). The status bar sits over the photo. With no photo the band is plain teal 900. The photo only ever appears in title bands, never on white sheets.

**Photo control.** On Home for a new household, a 34px round camera icon sits at the bottom right of the band. Accessible label "Add a household photo" or "Change household photo". No visible text.

### Sheet
White panel that overlaps the band by 24 with a 26 top radius. All content lives here.

### Menu
Icon at the top left of every screen except first screen, welcome and sign-up steps. On modal screens (New list, New task, New expense) it sits left of the title and "Cancel" moves to the right. Opens a 300 wide drawer from the left over a 40% teal scrim. Groups: Everyday (Home, Tasks, Lists, Budgets and expenses, Calendar), Household (People, Activity, Notifications), On the way (Documents, Meals, marked "Soon" and not tappable). Settings and Help sit at the bottom, the account row last. The current module is highlighted with `teal.100`. Each item may show one short status on the right ("6 open", "€316 left").

### Tab bar
Five tabs, fixed: Home, Tasks, People, Lists, Settings. Budgets and expenses is reached from Home and the menu, never a tab. Active tab is teal 900 with a heavier label. Hidden while a bottom sheet is open.

### Message card
Used for anything that needs a person's attention: a swap request, a budget heads-up. White, `borderCard`, radius 18. Header row: avatar (or a 30px outlined icon for the app itself), name and context, time on the right. Body in 15 / 1.45 ink, written as the person would say it. Up to two 40 high buttons: primary teal 900, secondary outline. Never a tinted background, never a coloured side border.

### Call sheet
Home's "Tonight" list. Grid of time (50 wide, tabular, teal 900), what and who, avatar. A coral "Now" line marks the current time between rows.

### Summary blocks
Two up on Home. Bordered, radius 18. Caption, one big Newsreader number, one line of context.

### List cards
On Lists. Bordered, radius 18. Name and context on the left, Newsreader count on the right ("7/11"), a 4px progress bar underneath.

### Item rows
Checkbox 22, square radius 7, `#AFC1C3` border, teal 700 fill when done. Done items get muted text and a light strike through. Status words on the right in `coral.text` ("Out of stock", "Today") or teal 700 for actions ("Take it").

### Buttons
- Primary: teal 900, white label 16 / 600, height 54, radius 16.
- Outline: white, 1px `borderControl`, teal 900 label.
- Text: teal 700, 600.
- One primary per screen.

### Inputs (sign-up steps)
Label above in 13.5 / 600. Field 52 high, radius 14, `borderControl`. Focus: teal 900 border plus a 3px `rgba(28,110,120,.12)` ring. Helper text below in 12.5.

### Choice controls
- Segmented: bordered, radius 12, selected segment teal 900 with white text.
- Chips: 38 high, full radius, selected teal 900.
- Options in sheets: bordered cards with a radio, selected border 2px teal 700.
- Switches: 46 by 28, teal 700 when on.
- Week strip: seven days, today filled teal 900, dots for days with something on.

### Bottom sheet
White, radius 28 top, 5px handle. Title in Newsreader, a short explanation, options, one primary button. Scrim `rgba(14,58,64,.40)`.

### Offline bar
Full width `teal.100` strip under the nav with a wifi-off icon and one sentence: "Offline. Saved on this phone until you're connected." Never an error colour.

### Keypad
For amounts and codes. `#F4F7F7` ground, white keys 46 high, radius 10.

## 7. Iconography

Line icons, 24 grid, 1.7 stroke, round caps and joins, `currentColor`. Icons sit next to words, never alone inside tinted squares. Icon-only buttons are allowed only for menu, close, back, camera and the add button in the item bar, each with an accessible label.

## 8. Imagery

- Real household photography, warm and unposed, shot at home. Show the range of families KinHolo serves, including mixed families.
- Placeholder used in these screens: "Photo by Derek Owens on Unsplash". Replace with licensed or commissioned photography before launch and keep credits where the licence requires them.
- On the welcome screen the photo sits in a framed rectangle inside the teal band. The empty state shows a dashed outline and "Tap to add a photo".

## 9. Logo

The OK Spectrum mark, from `LogoMark.tsx` in the app code. viewBox 326 by 248: O ring centre (125, 124), radius 106; K stem x 233.5 from y 27 to 220; upper arm (242, 105) to (307, 32) coral; lower arm (234, 124) to (307, 220) green; stroke 36, round caps. On light: ring teal 700, stem cornflower. On dark: ring white, stem `#7FA8D0`. Wordmark "KinHolo" in Newsreader beside or below it. The first screen adds the tagline "Everything for your Kin" in Newsreader italic.

## 10. Copy

- No em dashes. Use a full stop, comma or "and".
- No middle dots as separators in sentences.
- Sentence case, including buttons and headings.
- No exclamation marks, no buzzwords, no "not X, it's Y" constructions.
- Write like the household talks: "Tom can't find basmati rice", "€316 left", "Nobody yet".
- Name people, not roles, wherever possible.
- Money words stay plain: "on track to go €40 over", never "pacing".

## 11. Accessibility

- Text contrast 4.5:1 minimum, including text on the photo band (the scrim guarantees it).
- Touch targets 44 minimum.
- Every icon-only control has an accessible label.
- Status is never colour alone: "Out of stock", "Today" and the now line all carry words.
- Support system text sizes up to 200%. Screens scroll rather than clip.

## 12. Screen inventory

| # | Screen | Notes |
| --- | --- | --- |
| 01 | First screen | Mark, wordmark, tagline between two teal bars |
| 02 | Welcome | Framed photo in the band, "Run the house together." |
| 03 | Create account | Step 1 of 3 |
| 04 | Check your email | Step 2 of 3, 6-digit code with keypad |
| 05 | Name your household | Step 3 of 3, household photo picked here |
| 06 | Home, busy evening | Message card, call sheet, summary blocks |
| 07 | Home, new household | With photo, camera icon to change it |
| 08 | Home, new household, no photo | Plain teal band, camera icon to add one |
| 09 | Menu open | Drawer over Home |
| 10 | Lists | Message card, list cards |
| 11 | Shopping list | Grouped items, add bar |
| 12 | New list | Template, sharing, shopping day |
| 13 | Out of stock | Bottom sheet over the list |
| 14 | Tasks | Week strip, filters, grouped tasks, shared load row |
| 15 | New task | Who, when, repeats, note, visibility |
| 16 | Shared load | Share bar, people, one suggestion |
| 17 | Budgets and expenses | Month total, heads-up card, categories |
| 18 | Log an expense, offline | Offline bar, amount, keypad |
| 19 | Calendar | Reached from the menu |
| 20 | Activity | Reached from the menu |
| 21 | Settings | Grouped lists |
| 22 | People and privacy | Roles, what each person sees, default visibility |
