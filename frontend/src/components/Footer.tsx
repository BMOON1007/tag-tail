import Link from "next/link";
import { LEGAL_DOCUMENTS } from "@/lib/legal";
import { extraPagesEnabled } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div>
        <Link className="logo" href="/">
          tag<span>•</span>tails
        </Link>
        <p>For the ones who make a house a home.</p>
      </div>
      {extraPagesEnabled ? (
        <>
          <div className="footer-links">
            <strong>Explore</strong>
            <Link href="/features">How it works</Link>
            <Link href="/pricing">Our plans</Link>
            <Link href="/faq">FAQs</Link>
          </div>
          <div className="footer-links">
            <strong>Legal</strong>
            {LEGAL_DOCUMENTS.map((document) => (
              <Link key={document.slug} href={`/legal/${document.slug}`}>
                {document.title}
              </Link>
            ))}
          </div>
        </>
      ) : null}
      <div className="footnote">
        Tag-Tails Ltd · UK
        <br />
        © {new Date().getFullYear()} Tag-Tails
        <br />
        <span>A little tag. A way back home.</span>
      </div>
    </footer>
  );
}
