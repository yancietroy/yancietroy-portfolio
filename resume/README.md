# Résumé generator

Builds two one-page, ATS-friendly résumés from a single content file:

| Track | Output |
|---|---|
| Product Designer | `public/resume/Yancie-Troy-Saludo-Product-Designer.pdf` |
| Product Design Engineer | `public/resume/Yancie-Troy-Saludo-Product-Design-Engineer.pdf` |

The PDFs land in `public/`, so the portfolio serves them at `/resume/<file>.pdf`.

## Build

```bash
node resume/build.mjs
```

It needs Chrome or Edge installed. It finds the usual Windows, macOS and Linux install paths. Set `CHROME_PATH` to use a different browser binary.

The script prints the page count for each PDF and exits with code 1 if either one goes past a single page. When that happens, cut words; don't shrink the type.

Intermediate HTML goes to `resume/out/` (gitignored). Open a file there in a browser to inspect the layout.

## Files

- `content.mjs`: all the words. Edit this file.
- `build.mjs`: the template, the CSS and the PDF printing. Edit it only to change the layout.

## Editing content

Each résumé in `content.mjs` has:

- `title`: the line under the name, and the main ATS title keyword.
- `summary`: 3–4 lines. Lead with the title, years of experience, and the strongest proof.
- `experience[]` and `projects[]`: each has `role`/`name`, a `date` like `Nov 2023 – May 2026` (en dash), and `bullets`.
- `skills`: `[label, comma-separated list]` pairs.

`contact` and `education` are shared by both résumés. GrowthBox is shared too; the engineer track overrides its bullets.

### What goes where

Both tracks tell the same story with different weight:

- **Product Designer**: research, interaction design, design systems, and ASO and paywall work. One line of build signal, the React Native mention, sets it apart from other designers without turning it into an engineering résumé.
- **Product Design Engineer**: tech stack in the project headers, AI features (Gemini scanning, the LLM + TTS briefing), and integration QA. The design work stays in, because that's the "Product Design" half of the title.

## Rules for metrics

Use only numbers that stay true for as long as the résumé is in use:

- **Cumulative totals** that can only grow: "30,000+ users".
- **Fixed past windows**: "grew monthly revenue 20x in six months", "raised conversion to paid 9x".
- **Achievements in the past tense**: "reached #1 in US App Store search for 'grocery budget'".

Don't use point-in-time figures such as monthly recurring revenue (MRR), active subscribers or monthly active users (MAU). They go stale within weeks and invite a "what is it now?" question.

Every number needs a source you can show in an interview. Current sources are listed in the comment at the top of `content.mjs`. Round down, never up.

## ATS rules this template follows

Keep these if you change `build.mjs`:

- **Layout:** one column. No tables, text boxes, icons or images.
- **Section headings:** standard names (Professional Summary, Work Experience, Projects, Skills, Education).
- **Contact:** plain text. URLs appear as visible text, because parsers ignore link targets.
- **Text:** real, selectable text in fonts that are present on the machine (Garamond, Calibri).
- **Hyphenated words:** don't let one break across a line. PDF text extraction drops the hyphen ("Solo-built" became "Solobuilt"). After a build, check with:

  ```bash
  pdftotext public/resume/Yancie-Troy-Saludo-Product-Design-Engineer.pdf -
  ```

## Privacy

The PDFs are deployed publicly with the site, so contact details are email and LinkedIn only. Add a phone number to a private copy when an application asks for one; don't commit it.
