"use client";

import { boothTiers } from "@/lib/site";

const fields = [
  "Company Name",
  "Contact Person Name",
  "Phone Number",
  "Email Address",
  "City",
  "Product Category",
  "Number of Booths",
];

export function BoothForm() {
  return (
    <form
      className="surface rounded-2xl p-6 md:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label
            key={field}
            className={`text-sm font-bold text-olive ${
              field === "Number of Booths" ? "md:col-span-2" : ""
            }`}
          >
            {field}
            <input
              className="mt-2 h-12 w-full rounded-xl border border-olive/14 bg-cream px-4 font-normal outline-none transition duration-300 placeholder:text-olive/38 hover:border-gold/55 focus:border-gold focus:bg-cream focus:shadow-[0_0_0_4px_rgba(143,118,77,0.12)]"
              type={
                field.includes("Email")
                  ? "email"
                  : field.includes("Number")
                    ? "number"
                    : "text"
              }
              min={field.includes("Number") ? 1 : undefined}
              placeholder={field}
            />
          </label>
        ))}
        <label className="text-sm font-bold text-olive md:col-span-2">
          Preferred Booth Tier
          <select
            className="mt-2 h-12 w-full rounded-xl border border-olive/14 bg-cream px-4 font-normal outline-none transition duration-300 hover:border-gold/55 focus:border-gold focus:bg-cream focus:shadow-[0_0_0_4px_rgba(143,118,77,0.12)]"
            defaultValue=""
          >
            <option value="" disabled>
              Select booth tier
            </option>
            {boothTiers.map((tier) => (
              <option key={tier.name} value={tier.name}>
                {tier.name} - {tier.price}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button className="mt-6 min-h-12 w-full rounded-[14px] bg-gold px-6 text-sm font-bold uppercase tracking-[0.08em] text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-olive hover:tracking-[0.12em]">
        Request booth details
      </button>
      <p className="mt-4 text-sm text-olive/60">
        Phase 1 form UI. Firebase submission will be added in Phase 2.
      </p>
    </form>
  );
}
