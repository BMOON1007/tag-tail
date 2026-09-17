import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { PLAN_ORDER, PLANS, TAG_RULES } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Our plans · Tag-Tails",
  description: "Start free with Tag-Tails, or choose Premium monthly or annual cover for each pet.",
};

const comparison = [
  ["Pet profile & contact details", "✓", "✓", "✓"],
  ["Edit your details online", "✓", "✓", "✓"],
  ["Unique QR tag linking", "✓", "✓", "✓"],
  ["Up to 3 free tags per order", "✓", "✓", "✓"],
  ["£2.99 postage per order", "✓", "✓", "✓"],
  ["Replacement tags at £0 + postage", "✓", "✓", "✓"],
  ["Premium contact options", "—", "Included", "Included"],
  ["SMS alerts & scan location", "—", "Included", "Included"],
  ["Subscription per pet", "Free", "£2.99 / month", "£25 / year"],
];

const ctaLabel: Record<string, string> = {
  basic: "Create a free account",
  monthly: "Choose monthly",
  annual: "Choose annual",
};

export default function PricingPage() {
  return (
    <div className="wrap">
      <PageIntro
        eyebrow="Simple plans for your favourite companion"
        title={
          <>
            A place for every pet.
            <br />
            <em>A plan for you.</em>
          </>
        }
        description="Start with the essentials for free. Choose Premium if you would like SMS alerts when someone scans your pet’s tag."
      />
      <div className="cards">
        {PLAN_ORDER.map((id, index) => {
          const plan = PLANS[id];
          return (
            <article className={`plan${index === 2 ? " featured" : ""}`} key={plan.id}>
              <span className="pill">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <p>{plan.tagline}</p>
              <div className="price">{plan.price_label}</div>
              <div className="per">{plan.interval_label}</div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className={`button${index === 2 ? "" : " outline"}`} href={`/signup?plan=${plan.id}`}>
                {ctaLabel[plan.id]} <span>↗</span>
              </Link>
            </article>
          );
        })}
      </div>
      <div className="note">
        <strong>About tags & delivery</strong>
        <br />
        Up to {TAG_RULES.freeTagsPerOrder} free tags per order, with £{TAG_RULES.postageGbp.toFixed(2)} postage. Each
        tag has a unique code and links to one pet. Replacement tags cost £{TAG_RULES.replacementTagGbp} plus postage.
        See the{" "}
        <Link className="textlink" href="/legal/subscription">
          Subscription Agreement
        </Link>{" "}
        and{" "}
        <Link className="textlink" href="/legal/refunds">
          Refunds & Returns Policy
        </Link>
        .
      </div>
      <div className="comparison">
        <table>
          <thead>
            <tr>
              <th>What’s included</th>
              <th>Basic</th>
              <th>Monthly</th>
              <th>Annual</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="micro">
          Annual Premium saves £10.88 compared with 12 monthly payments (£35.88). SMS alerts are included with Premium.
        </p>
      </div>
      <CtaBanner />
    </div>
  );
}
