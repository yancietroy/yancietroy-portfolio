import contributions from "@/content/contributions.json";
import { projectsIn } from "@/content/projects";

type Product = "grocerybudget" | "fifi";
// Written by scripts/contributions.mjs: date -> [leading product, level 1–4].
const days = contributions.days as unknown as Record<string, [Product, number]>;

const [grocery, fifi] = projectsIn("product");
const color: Record<Product, string> = { grocerybudget: grocery.theme.accent, fifi: fifi.theme.accent };
const name: Record<Product, string> = { grocerybudget: grocery.name, fifi: fifi.name };
const strength = ["", "28%", "48%", "72%", "100%"];

const at = (iso: string) => new Date(`${iso}T00:00:00Z`);
const label = (date: Date, options: Intl.DateTimeFormatOptions) => date.toLocaleDateString("en-US", { timeZone: "UTC", ...options });

/** Weeks as columns of seven days (Sunday first), from the snapshot's start to its end. */
function weeks() {
  const end = at(contributions.end);
  const result: { iso: string; date: Date; future: boolean }[][] = [];
  for (let day = at(contributions.start); day <= end || day.getUTCDay() !== 0; day.setUTCDate(day.getUTCDate() + 1)) {
    if (day.getUTCDay() === 0) result.push([]);
    const date = new Date(day);
    result[result.length - 1].push({ iso: date.toISOString().slice(0, 10), date, future: date > end });
  }
  return result;
}

export function YearInBlocks() {
  const columns = weeks();
  const from = label(at(contributions.start), { month: "long", year: "numeric" });
  const to = label(at(contributions.end), { month: "long", year: "numeric" });

  return (
    <section className="shell py-14 md:py-20" aria-labelledby="blocks-title">
      <h2 id="blocks-title" className="section-title">A year in blocks</h2>
      <p className="mt-3 max-w-[60ch] text-[var(--ink-2)]">
        Each block is a day I committed code to one of my apps. Green is {grocery.name}, yellow is {fifi.name}. The brighter the block,
        the busier the day.
      </p>

      <div className="card mt-8 p-4 md:p-6">
        <div role="img" aria-label={`Days I committed code to ${grocery.name} and ${fifi.name}, ${from} to ${to}`} className="flex gap-[3px]">
          {columns.map((week, index) => {
            const first = week[0].date;
            const newMonth = index === 0 || first.getUTCMonth() !== columns[index - 1][0].date.getUTCMonth();
            // Phones show the last six months, so the blocks stay big enough to read.
            return (
              <div key={week[0].iso} className={`flex min-w-0 flex-1 flex-col gap-[3px] ${index < columns.length - 26 ? "hidden sm:flex" : ""}`}>
                <span aria-hidden="true" className="label h-5 overflow-visible whitespace-nowrap text-[0.68rem] text-[var(--ink-3)]">
                  {newMonth && index < columns.length - 2 ? label(first, { month: "short" }) : ""}
                </span>
                {week.map(({ iso, date, future }) => {
                  const day = days[iso];
                  return (
                    <span
                      key={iso}
                      title={future ? undefined : `${label(date, { month: "short", day: "numeric", year: "numeric" })}${day ? ` · ${name[day[0]]}` : ""}`}
                      className="aspect-square rounded-[2px]"
                      style={{
                        background: future ? "transparent" : day ? `color-mix(in srgb, ${color[day[0]]} ${strength[day[1]]}, var(--surface-2))` : "var(--surface-2)",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="label mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[var(--ink-3)]">
          <span>
            <span className="sm:hidden">{label(columns[columns.length - 26][0].date, { month: "long", year: "numeric" })}</span>
            <span className="hidden sm:inline">{from}</span> to {to} · from my private repos
          </span>
          <span className="flex items-center gap-4">
            {(Object.keys(color) as Product[]).map((product) => (
              <span key={product} className="flex items-center gap-1.5" aria-hidden="true">
                {[1, 2, 3, 4].map((level) => (
                  <span key={level} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: `color-mix(in srgb, ${color[product]} ${strength[level]}, var(--surface-2))` }} />
                ))}
                <span className="ml-1">{name[product]}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
