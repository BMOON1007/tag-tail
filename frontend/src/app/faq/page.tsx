import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "FAQs · Tag-Tails",
  description: "Answers about Tag-Tails QR pet tags, privacy, replacements, plans and SMS alerts.",
};

export default function FaqPage() {
  return (
    <div className="wrap">
      <PageIntro
        eyebrow="A helping paw"
        title={
          <>
            Good questions.
            <br />
            <em>Simple answers.</em>
          </>
        }
        description="Everything you need to know about the little tag, the plans and how a scan works."
      />
      <FaqList />
      <CtaBanner />
    </div>
  );
}
