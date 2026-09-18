import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { PLANS } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Your account · Tag-Tails",
  description: "Manage your Tag-Tails account.",
};

export default async function AccountPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const plan = user.plan || PLANS[user.intended_plan];
  const firstName = user.name.split(" ")[0] || user.name;

  return (
    <div className="wrap">
      <div className="page-intro">
        <span className="eyebrow">Your Tag-Tails account</span>
        <h1>
          Welcome back,
          <br />
          <em>{firstName}.</em>
        </h1>
        <p>Your Tag-Tails account is ready. Add your pets and keep their details up to date.</p>
      </div>
      <div className="account-grid">
        <article className="account-card">
          <span className="pill">Account</span>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className="micro">You can reset this password from the login screen whenever you need to.</p>
        </article>
        <article className="account-card featured">
          <span className="pill">{plan.badge}</span>
          <h2>{plan.name}</h2>
          <div className="price">{plan.price_label}</div>
          <div className="per">{plan.interval_label}</div>
          <p>
            {user.intended_plan === "basic"
              ? "Your Basic account includes a pet profile, owner contact details and unique QR tags. No subscription is required."
              : "Premium includes SMS alerts when someone scans your pet’s tag, plus a map link if they share their location."}
          </p>
          <Link className="textlink" href="/pricing">
            Review plans
          </Link>
        </article>
        <article className="account-card wide">
          <span className="eyebrow">Your pets</span>
          <h2>Add your first pet</h2>
          <p>
            Add a photo, breed and contact details, then link a unique QR tag to each pet. If a tag is lost, you can
            order another for postage only.
          </p>
        </article>
      </div>
    </div>
  );
}
