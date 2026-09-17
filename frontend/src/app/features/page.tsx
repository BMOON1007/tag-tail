import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  title: "How it works · Tag-Tails",
  description: "A pet profile, a unique QR tag and a clear way for a finder to contact you.",
};

export default function FeaturesPage() {
  return (
    <div className="wrap">
      <PageIntro
        eyebrow="The little tag that connects you"
        title={
          <>
            Made for real life.
            <br />
            <em>And little adventures.</em>
          </>
        }
        description="A pet profile, a unique QR tag and a clear way to contact you. Simple for you. Simple for the person who finds your pet."
      />
      <div className="feature-grid">
        <article className="feature">
          <div className="icon">◎</div>
          <h3>
            Their details.
            <br />
            Always within reach.
          </h3>
          <p>
            A photo, name, breed and your contact details give a finder the essentials. Update your information from
            your owner account.
          </p>
          <span className="pill">Included with Basic</span>
        </article>
        <article className="feature">
          <div className="icon">⌘</div>
          <h3>
            One scan.
            <br />A familiar voice.
          </h3>
          <p>
            Every tag opens the linked pet’s public profile. A finder can see your contact options without downloading
            an app or creating an account.
          </p>
          <span className="pill">Included with Basic</span>
        </article>
        <article className="feature">
          <div className="icon">↻</div>
          <h3>
            New number?
            <br />
            Same little tag.
          </h3>
          <p>
            Your tag links to an online profile, so you can change your contact details without replacing it. Lost a
            tag? Order another at £0 plus postage.
          </p>
        </article>
        <article className="feature future">
          <span className="pill">Included with Premium</span>
          <h3>
            A location shared.
            <br />A text to you.
          </h3>
          <p>
            Premium SMS alerts let you know when a tag is scanned, with a Google Maps link when the finder shares their
            location.
          </p>
          <p className="micro">This is a scan location, not live GPS tracking.</p>
        </article>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>
            From their collar
            <br />
            to your phone.
          </h2>
        </div>
        <Steps />
      </section>
      <CtaBanner />
    </div>
  );
}
