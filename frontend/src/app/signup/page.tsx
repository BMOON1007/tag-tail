import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";
import { getCurrentUser } from "@/lib/auth";
import { isPlanId } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Create an account · Tag-Tails",
  description: "Create your free Tag-Tails account.",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/account");
  }

  const params = await searchParams;
  const plan = isPlanId(params.plan) ? params.plan : "basic";

  return (
    <AuthShell
      title={
        <>
          Their next chapter
          <br />
          starts with you.
        </>
      }
      description="Create your free Tag-Tails account."
    >
      <SignupForm plan={plan} />
    </AuthShell>
  );
}
