import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Steps } from "@/components/Steps";

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <span className="eyebrow">For curious noses & wandering paws</span>
          <h1>
            A little tag.
            <br />
            A way <em>
              back
              <br />
              home.
            </em>
          </h1>
          <p className="lead">
            Their next adventure should end with you.
            <br />
            A simple QR pet tag connects a kind stranger to the person your pet loves most.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/signup">
              Get started for free <span>↗</span>
            </Link>
            <Link className="textlink" href="/features">
              See how it works
            </Link>
          </div>
          <p className="micro">Free basic account · No subscription required</p>
        </div>
        <div className="hero-photo">
          <img src="/dog.jpg" alt="A golden retriever sitting happily outdoors" />
          <span className="round-label">
            Made for
            <br />
            happy
            <br />
            homecomings.
          </span>
          <div className="pet-card">
            <img src="/dog.jpg" alt="" />
            <div>
              <strong>Hello, I’m Teddy.</strong>
              <small>My tag connects you to my human.</small>
            </div>
            <span className="check">✓</span>
          </div>
        </div>
      </section>
      <div className="strip">
        <span>Unique QR pet tags</span>
        <span>Details you can update</span>
        <span>No app to scan</span>
        <span>Free basic account</span>
      </div>
      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Small steps. Meaningful connections.</span>
            <h2>
              A simpler way
              <br />
              to find <em>their person.</em>
            </h2>
          </div>
          <p>Built around one simple idea: make it easy for someone who finds your pet to reach you.</p>
        </div>
        <Steps />
      </section>
      <CtaBanner />
    </div>
  );
}
