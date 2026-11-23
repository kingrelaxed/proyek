# Universal Landing Page Template

A responsive static landing page for many kinds of businesses. It needs no framework, build step, or external image assets. The page defaults to English and includes an English/Indonesian toggle.

## Getting started

1. Open `script.js`.
2. Edit the `BUSINESS_CONFIG` object at the top to customize the business name, colors, contact details, services, packages, testimonials, FAQs, process steps, portfolio examples, the package comparison, and page copy.
3. Provide both `en` and `id` text for each translatable item.
4. Keep all three files together and open `index.html` in a browser.
5. Upload the files to static hosting to publish the page.

### Configuration notes

- `name` is the business name and remains the same in both languages.
- `colors` uses hex values such as `#55725c`.
- `hero`, `contact`, and `tagline` contain English and Indonesian text.
- `features`, `services`, `process`, `portfolio`, `testimonials`, and `faqs` are editable lists. Each piece of copy has `en` and `id` values.
- `packages` controls the three pricing cards. Set `price` to a number without thousands separators, provide bilingual `name`, `description`, `period`, `features`, and `button` text, and set `popular` to highlight a package.
- `comparison` lists one row per package feature. Each row has a bilingual `label` and a `values` list of `true` or `false`, one per package, in the same order as `packages`.
- Keep `currency` and `locale` in sync with the intended price format, for example `IDR` and `id-ID`.
- Set the WhatsApp number in international format without a leading `+`, for example `6281234567890`. Package and contact links are generated from this number, with a message in the active language.

Review the business name, contact details, prices, testimonials, and copy before publishing.

## Files

- `index.html` — page structure and bilingual static copy.
- `style.css` — theme, layout, and responsive breakpoints.
- `script.js` — business configuration, dynamic content, localized prices, language toggle, mobile navigation, and the process, portfolio, and comparison renderers.
