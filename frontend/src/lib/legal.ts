export type LegalBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = LegalBlock & {
  subsections?: LegalBlock[];
  closing?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  eyebrow: string;
  updated: string;
  description: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = "18 September 2026";

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: "terms",
    title: "Terms and Conditions",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "The terms that govern your use of Tag-Tails accounts, QR tags and optional subscriptions.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "These Terms and Conditions govern your use of the Tag-Tails website, QR pet tag system, mobile features, and any associated services provided by Tag-Tails Ltd. By creating an account, activating a QR tag, or using any Tag-Tails service, you agree to these Terms.",
          "Tag-Tails Ltd is a UK-registered company providing QR pet identification tags, optional subscription services, and SMS GPS location alerts.",
        ],
      },
      {
        heading: "2. Services Provided",
        subsections: [
          {
            heading: "2.1 Free Services",
            paragraphs: ["Tag-Tails offers the following free services:"],
            bullets: [
              "Free QR pet tag (postage only)",
              "Free basic account",
              "Ability for finders to scan your pet’s tag and contact you via the Tag-Tails system",
            ],
          },
          {
            heading: "2.2 Optional Subscription Services",
            paragraphs: ["Paid subscriptions may include:"],
            bullets: [
              "SMS GPS location alerts",
              "Additional contact methods",
              "Enhanced pet profile features",
              "Priority support",
            ],
          },
        ],
        closing: ["Subscription features may change over time. Any changes will be communicated on the website."],
      },
      {
        heading: "3. User Responsibilities",
        paragraphs: ["By using Tag-Tails, you agree to:"],
        bullets: [
          "Provide accurate and up-to-date contact information",
          "Keep your login details secure",
          "Ensure your pet’s tag is attached safely and visibly",
          "Use the service only for lawful purposes",
        ],
      },
      {
        paragraphs: ["You must not:"],
        bullets: [
          "Misuse the QR tag system",
          "Attempt to interfere with Tag-Tails servers, software, or security",
          "Create accounts for fraudulent or harmful purposes",
        ],
      },
      {
        heading: "4. Finder Responsibilities",
        paragraphs: ["Individuals who scan a Tag-Tails QR tag agree to:"],
        bullets: [
          "Use the contact information responsibly",
          "Only contact the pet owner for the purpose of reporting a found pet",
          "Not store, misuse, or share any personal information displayed",
        ],
      },
      {
        heading: "5. Data Protection & Privacy",
        paragraphs: ["Tag-Tails Ltd complies with UK GDPR and data protection laws."],
        subsections: [
          {
            heading: "5.1 Data Collected",
            paragraphs: ["We may collect:"],
            bullets: [
              "Account details (name, email, phone number)",
              "Pet profile information",
              "Scan events (time, location if enabled)",
              "Subscription and payment information",
            ],
          },
          {
            heading: "5.2 How Data Is Used",
            paragraphs: ["Data is used to:"],
            bullets: [
              "Provide core Tag-Tails services",
              "Deliver SMS GPS alerts (if subscribed)",
              "Improve system reliability and safety",
              "Communicate important service updates",
            ],
          },
        ],
        closing: ["We do not sell user data."],
      },
      {
        heading: "6. SMS GPS Alerts",
        paragraphs: ["If you subscribe to SMS GPS alerts:"],
        bullets: [
          "Location accuracy may vary depending on device and network conditions",
          "Alerts may not be available in areas with poor signal",
          "Tag-Tails is not responsible for delays caused by mobile networks",
        ],
      },
      {
        heading: "7. Payments & Subscriptions",
        subsections: [
          {
            heading: "7.1 Billing",
            paragraphs: [
              "Subscriptions are billed through our payment provider (e.g., Stripe). You must ensure your payment method remains valid.",
            ],
          },
          {
            heading: "7.2 Renewal & Cancellation",
            paragraphs: [
              "Subscriptions renew automatically unless cancelled. You may cancel at any time through your account dashboard.",
            ],
          },
          {
            heading: "7.3 Refunds",
            paragraphs: ["Refunds are provided only where required by UK consumer law."],
          },
        ],
      },
      {
        heading: "8. Liability",
        paragraphs: ["Tag-Tails Ltd is not liable for:"],
        bullets: [
          "Loss or injury to pets",
          "Failure of a finder to contact you",
          "Incorrect user-provided information",
          "Network outages or third-party service failures",
        ],
      },
      {
        paragraphs: [
          "Our service is designed to assist in reuniting pets with owners, but we cannot guarantee recovery in all circumstances.",
        ],
      },
      {
        heading: "9. Intellectual Property",
        paragraphs: [
          "All Tag-Tails branding, website content, QR tag designs, and software are the property of Tag-Tails Ltd. You may not copy, reproduce, or distribute any part of the system without permission.",
        ],
      },
      {
        heading: "10. Account Termination",
        paragraphs: ["Tag-Tails Ltd may suspend or terminate accounts that:"],
        bullets: [
          "Violate these Terms",
          "Engage in fraudulent or harmful behaviour",
          "Misuse the QR tag system",
        ],
      },
      {
        paragraphs: ["Users may request account deletion at any time."],
      },
      {
        heading: "11. Changes to These Terms",
        paragraphs: [
          "Tag-Tails Ltd may update these Terms periodically. Continued use of the service after changes indicates acceptance of the updated Terms.",
        ],
      },
      {
        heading: "12. Contact Information",
        paragraphs: ["For support or enquiries:"],
        bullets: ["Email: support@tag-tails.co.uk", "Website: www.tag-tails.co.uk"],
      },
      {
        heading: "13. Governing Law",
        paragraphs: ["These Terms are governed by the laws of England and Wales."],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "How Tag-Tails Ltd collects, uses and protects personal information under UK GDPR.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "This Privacy Policy explains how Tag-Tails Ltd collects, uses, stores, and protects your personal information when you use our website, QR pet tag system, subscription services, and SMS GPS alerts.",
          "By creating an account or using any Tag-Tails service, you agree to the practices described in this Policy.",
        ],
      },
      {
        heading: "2. Information We Collect",
        subsections: [
          {
            heading: "2.1 Account Information",
            paragraphs: ["We collect the information you provide when creating an account:"],
            bullets: ["Name", "Email address", "Phone number", "Password (encrypted)"],
          },
          {
            heading: "2.2 Pet Information",
            paragraphs: ["We collect details you add to your pet’s profile:"],
            bullets: ["Pet name", "Breed", "Photo", "Medical notes (optional)", "Behaviour notes (optional)"],
          },
          {
            heading: "2.3 QR Tag Scan Data",
            paragraphs: ["When a finder scans your pet’s Tag-Tails QR tag, we may collect:"],
            bullets: [
              "Time and date of scan",
              "Approximate location (if enabled)",
              "Finder’s message or contact details (if provided)",
            ],
          },
          {
            heading: "2.4 Subscription & Payment Information",
            paragraphs: [
              "If you subscribe to paid features, our payment provider (e.g., Stripe) collects:",
            ],
            bullets: ["Billing details", "Payment method", "Transaction history"],
          },
        ],
        closing: ["Tag-Tails Ltd does not store full card details."],
      },
      {
        heading: "2.5 Technical Information",
        paragraphs: ["We may collect:"],
        bullets: ["IP address", "Device type", "Browser type", "Usage logs"],
      },
      {
        heading: "3. How We Use Your Information",
        paragraphs: ["We use your information to:"],
        bullets: [
          "Provide core Tag-Tails services",
          "Deliver SMS GPS alerts (if subscribed)",
          "Help reunite lost pets with their owners",
          "Improve system reliability and security",
          "Communicate service updates or important notices",
          "Process subscription payments",
        ],
      },
      {
        paragraphs: ["We do not sell or rent your personal information."],
      },
      {
        heading: "4. Legal Basis for Processing",
        paragraphs: ["We process your data under the following legal bases:"],
        bullets: [
          "Contractual obligation — to provide Tag-Tails services",
          "Legitimate interest — to improve safety and system performance",
          "Consent — for optional features such as GPS alerts",
          "Legal compliance — where required by UK law",
        ],
      },
      {
        heading: "5. Sharing Your Information",
        paragraphs: ["We may share limited information with:"],
        bullets: [
          "Finders who scan your pet’s tag (only the contact details you choose to display)",
          "Payment processors for subscription billing",
          "SMS delivery partners for GPS alerts",
          "Law enforcement if legally required",
        ],
      },
      {
        paragraphs: ["We do not share unnecessary or excessive data."],
      },
      {
        heading: "6. Data Storage & Security",
        paragraphs: ["We use secure UK/EU-based servers and industry-standard encryption. Measures include:"],
        bullets: [
          "Encrypted passwords",
          "Secure HTTPS connections",
          "Regular security audits",
          "Restricted staff access",
        ],
      },
      {
        paragraphs: ["Despite strong protections, no online service can guarantee absolute security."],
      },
      {
        heading: "7. Your Rights",
        paragraphs: ["Under UK GDPR, you have the right to:"],
        bullets: [
          "Access your data",
          "Correct inaccurate data",
          "Request deletion of your account",
          "Request restriction of processing",
          "Object to certain uses",
          "Request a copy of your data (data portability)",
        ],
      },
      {
        paragraphs: ["Requests can be made via your account dashboard or by contacting support."],
      },
      {
        heading: "8. Data Retention",
        paragraphs: ["We retain data only as long as necessary to:"],
        bullets: ["Provide services", "Meet legal obligations", "Resolve disputes"],
      },
      {
        paragraphs: [
          "If you delete your account, most data is removed immediately. Some records (e.g., payment logs) may be retained where legally required.",
        ],
      },
      {
        heading: "9. Cookies",
        paragraphs: ["Tag-Tails uses cookies to:"],
        bullets: ["Maintain login sessions", "Improve website performance", "Analyse usage patterns"],
      },
      {
        paragraphs: ["You can disable cookies in your browser settings, but some features may stop working."],
      },
      {
        heading: "10. Children’s Privacy",
        paragraphs: ["Tag-Tails is not intended for users under 16. We do not knowingly collect data from children."],
      },
      {
        heading: "11. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. Continued use of the service indicates acceptance of any changes.",
        ],
      },
      {
        heading: "12. Contact Us",
        paragraphs: ["For privacy enquiries or data requests:"],
        bullets: ["Email: privacy@tag-tails.co.uk", "Website: www.tag-tails.co.uk"],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "How Tag-Tails Ltd uses cookies and similar technologies on the website.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "This Cookie Policy explains how Tag-Tails Ltd uses cookies and similar technologies on our website and services. By using Tag-Tails, you agree to the use of cookies as described in this policy.",
        ],
      },
      {
        heading: "2. What Are Cookies?",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience, and provide analytics.",
          "Tag-Tails uses both session cookies (temporary) and persistent cookies (stored for longer periods).",
        ],
      },
      {
        heading: "3. How Tag-Tails Uses Cookies",
        paragraphs: ["We use cookies for the following purposes:"],
        subsections: [
          {
            heading: "3.1 Essential Cookies",
            paragraphs: ["These cookies are required for the website to function. They enable:"],
            bullets: ["Secure login sessions", "Account management", "QR tag activation and dashboard features"],
          },
          {
            heading: "3.2 Performance & Analytics Cookies",
            paragraphs: ["These cookies help us understand how users interact with the site. They allow us to:"],
            bullets: ["Monitor website performance", "Improve features and navigation", "Identify technical issues"],
          },
          {
            heading: "3.3 Functionality Cookies",
            paragraphs: ["These cookies remember your preferences, such as:"],
            bullets: ["Login details (if chosen)", "Display settings", "Pet profile editing preferences"],
          },
          {
            heading: "3.4 Third-Party Cookies",
            paragraphs: ["Tag-Tails may use trusted third-party services, such as:"],
            bullets: ["Payment processors (e.g., Stripe)", "Analytics tools"],
          },
        ],
        closing: ["These third parties may place cookies to support their services."],
      },
      {
        heading: "4. Managing Cookies",
        paragraphs: [
          "You can control or disable cookies through your browser settings. However, disabling essential cookies may cause parts of the Tag-Tails website to stop working.",
          "Common browser cookie settings:",
        ],
        bullets: [
          "Chrome: Settings → Privacy → Cookies",
          "Safari: Preferences → Privacy",
          "Firefox: Options → Privacy & Security",
        ],
      },
      {
        heading: "5. Changes to This Policy",
        paragraphs: [
          "Tag-Tails may update this Cookie Policy from time to time. Continued use of the website indicates acceptance of any changes.",
        ],
      },
      {
        heading: "6. Contact Us",
        paragraphs: ["For questions about cookies or privacy: privacy@tag-tails.co.uk"],
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "How owners and finders must use Tag-Tails so the platform stays safe and lawful.",
    sections: [
      {
        heading: "1. Purpose",
        paragraphs: [
          "This Acceptable Use Policy explains how users, pet owners, and finders must interact with the Tag-Tails system, including QR tags, the website, SMS alerts, and any associated services. The goal is to keep the platform safe, lawful, and reliable for everyone.",
        ],
      },
      {
        heading: "2. Scope",
        paragraphs: ["This policy applies to:"],
        bullets: [
          "Tag-Tails account holders",
          "Finders who scan a Tag-Tails QR tag",
          "Anyone using Tag-Tails services, features, or communication tools",
        ],
      },
      {
        heading: "3. Permitted Use",
        paragraphs: ["Users may use Tag-Tails to:"],
        bullets: [
          "Register pets and manage QR tag profiles",
          "Help reunite lost pets with their owners",
          "Receive notifications and alerts",
          "Communicate with finders responsibly",
          "Access subscription features (if subscribed)",
        ],
      },
      {
        heading: "4. Prohibited Use",
        paragraphs: ["You must not use Tag-Tails for:"],
        bullets: [
          "Any unlawful activity",
          "Harassment, bullying, or intimidation",
          "Uploading false or misleading pet information",
          "Attempting to track individuals without consent",
          "Attempting to access another user’s account",
          "Scanning tags excessively or maliciously",
          "Interfering with Tag-Tails servers or security",
          "Sending spam or unsolicited messages",
          "Attempting to reverse-engineer QR codes or backend systems",
          "Using Tag-Tails for commercial advertising or promotion",
          "Misusing GPS/SMS alerts for non-pet-related purposes",
        ],
      },
      {
        heading: "5. Finder Responsibilities",
        paragraphs: ["Finders who scan a QR tag agree to:"],
        bullets: [
          "Contact the pet owner only for the purpose of reporting a found pet",
          "Not misuse, store, or share any personal information displayed",
          "Not harass or pressure the owner",
          "Not use scan data for any unrelated purpose",
        ],
      },
      {
        heading: "6. User Responsibilities",
        paragraphs: ["Pet owners agree to:"],
        bullets: [
          "Keep contact details accurate",
          "Use the system respectfully",
          "Ensure tags are attached safely to pets",
          "Not misuse subscription features",
          "Report lost or stolen tags promptly",
        ],
      },
      {
        heading: "7. System Integrity",
        paragraphs: ["Users must not:"],
        bullets: [
          "Attempt to bypass security controls",
          "Use automated tools to scan or scrape Tag-Tails data",
          "Upload harmful code, scripts, or malware",
          "Attempt to overload or disrupt the service",
        ],
      },
      {
        heading: "8. Data Protection",
        paragraphs: [
          "All users must respect privacy and data protection rules. Tag-Tails complies with UK GDPR and expects users to do the same.",
        ],
      },
      {
        heading: "9. Enforcement",
        paragraphs: ["Tag-Tails may:"],
        bullets: [
          "Suspend or terminate accounts violating this policy",
          "Block abusive scanning behaviour",
          "Restrict access to features if misuse is detected",
          "Report serious misuse to authorities where required",
        ],
      },
      {
        heading: "10. Reporting Abuse",
        paragraphs: ["If you encounter misuse, contact: support@tag-tails.co.uk"],
      },
      {
        heading: "11. Changes to This Policy",
        paragraphs: [
          "Tag-Tails may update this policy periodically. Continued use of the service indicates acceptance of any changes.",
        ],
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refunds & Returns Policy",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "How refunds, returns and replacement tags work for Tag-Tails products and subscriptions.",
    sections: [
      {
        heading: "1. Overview",
        paragraphs: [
          "This policy explains how refunds, returns, and replacements work for Tag-Tails products and subscription services. It applies to all customers in the UK.",
        ],
      },
      {
        heading: "2. QR Tags (Physical Products)",
        subsections: [
          {
            heading: "Free Tags",
            paragraphs: ["Tag-Tails QR tags are free. You only pay postage (£2.99)."],
          },
          {
            heading: "Returns",
            paragraphs: [
              "Because tags are free, returns are not required. If your tag is damaged, faulty, or lost, you can request a replacement.",
            ],
          },
          {
            heading: "Replacements",
            paragraphs: ["We will replace tags that are:"],
            bullets: ["Damaged in transit", "Printed incorrectly", "Faulty or unreadable"],
          },
        ],
        closing: ["Replacement tags are free; postage may still apply."],
      },
      {
        heading: "3. Subscription Refunds",
        subsections: [
          {
            heading: "Monthly Subscription",
            paragraphs: ["Refunds are not offered for partially used months."],
          },
          {
            heading: "Annual Subscription",
            paragraphs: [
              "Annual plans are non-refundable once activated, except where required by UK consumer law.",
            ],
          },
          {
            heading: "Service Issues",
            paragraphs: [
              "If Tag-Tails experiences a major outage that prevents subscription features from working for an extended period, we may offer:",
            ],
            bullets: ["Account credit", "Extension of subscription time"],
          },
        ],
        closing: ["Cash refunds are not provided unless legally required."],
      },
      {
        heading: "4. Postage Refunds",
        paragraphs: ["Postage (£2.99) is refundable only if:"],
        bullets: [
          "The order was cancelled before dispatch",
          "The tag never arrived",
          "The tag arrived severely damaged",
        ],
      },
      {
        paragraphs: ["We may request a photo of the damaged item for verification."],
      },
      {
        heading: "5. Lost Tags",
        paragraphs: ["If your pet’s tag is lost:"],
        bullets: [
          "You can deactivate it in your dashboard",
          "You can order a replacement (postage applies)",
        ],
      },
      {
        paragraphs: ["Lost tags are not eligible for refunds."],
      },
      {
        heading: "6. How to Request a Refund or Replacement",
        paragraphs: ["You can request support through:"],
        bullets: ["Your Tag-Tails account dashboard", "Email: support@tag-tails.co.uk"],
      },
      {
        paragraphs: ["We aim to respond within 48 hours."],
      },
      {
        heading: "7. Legal Rights",
        paragraphs: ["This policy does not affect your rights under UK consumer law."],
      },
    ],
  },
  {
    slug: "safety",
    title: "Safety & Welfare Notice",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "What Tag-Tails can and cannot do for pet safety, and what owners and finders should expect.",
    sections: [
      {
        heading: "1. Purpose",
        paragraphs: [
          "This Safety & Welfare Notice explains the limits of the Tag-Tails service and clarifies what pet owners and finders should expect when using QR tags, scan alerts, and related features.",
          "Tag-Tails is designed to help reunite lost pets with their owners quickly and safely. It is not a GPS tracker, monitoring device, or welfare guarantee.",
        ],
      },
      {
        heading: "2. Pet Safety Responsibilities",
        paragraphs: ["Pet owners remain fully responsible for:"],
        bullets: [
          "The safety and welfare of their pets",
          "Ensuring collars, harnesses, and tags are fitted securely",
          "Supervising pets appropriately",
          "Complying with local laws and regulations",
        ],
      },
      {
        paragraphs: ["Tag-Tails does not replace proper pet supervision or secure containment."],
      },
      {
        heading: "3. Limitations of the Tag-Tails System",
        paragraphs: ["Tag-Tails provides QR tags and optional SMS alerts. The system:"],
        bullets: [
          "Does not track pets in real time",
          "Only provides location when a finder scans the tag and chooses to share it",
          "Cannot guarantee that a finder will contact the owner",
          "Cannot guarantee recovery of a lost pet",
          "May be affected by mobile network issues or device limitations",
        ],
      },
      {
        heading: "4. Finder Conduct",
        paragraphs: ["Finders who scan a Tag-Tails tag should:"],
        bullets: [
          "Act responsibly and with care",
          "Contact the owner only for the purpose of reporting a found pet",
          "Avoid causing distress or harm to the animal",
        ],
      },
      {
        paragraphs: ["Finders are not required to transport or handle the pet unless they choose to."],
      },
      {
        heading: "5. No Liability for Pet Loss or Injury",
        paragraphs: ["Tag-Tails Ltd is not liable for:"],
        bullets: [
          "Injury, illness, or harm to pets",
          "Pets escaping or becoming lost",
          "Failure of a finder to make contact",
          "Incorrect or outdated owner information",
          "Damage to tags caused by pets or environmental conditions",
        ],
      },
      {
        paragraphs: ["The service is an aid to reunification, not a safety device."],
      },
      {
        heading: "6. Emergency Situations",
        paragraphs: ["In emergencies involving animal welfare, users and finders should contact:"],
        bullets: ["Local veterinary services", "Animal rescue organisations", "Relevant authorities"],
      },
      {
        paragraphs: ["Tag-Tails is not an emergency response service."],
      },
      {
        heading: "7. Updates to This Notice",
        paragraphs: [
          "Tag-Tails may update this Safety & Welfare Notice periodically. Continued use of the service indicates acceptance of any changes.",
        ],
      },
    ],
  },
  {
    slug: "subscription",
    title: "Subscription Agreement",
    eyebrow: "Legal",
    updated: LEGAL_UPDATED,
    description: "The extra terms for Tag-Tails Premium monthly and annual plans.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "This Subscription Agreement explains the terms under which Tag-Tails Ltd provides paid subscription services, including SMS GPS alerts and enhanced pet-profile features. By subscribing, you agree to these terms in addition to the main Tag-Tails Terms & Conditions.",
        ],
      },
      {
        heading: "2. Subscription Plans",
        paragraphs: ["Tag-Tails offers the following subscription options:"],
        subsections: [
          {
            heading: "2.1 Monthly Subscription",
            bullets: [
              "£2.99 per pet, per month",
              "Includes premium features such as SMS GPS alerts, enhanced notifications, and priority support",
              "Includes up to 3 free QR tags per order (postage £2.99)",
            ],
          },
          {
            heading: "2.2 Annual Subscription",
            bullets: [
              "£25 per pet, per year",
              "Includes the same premium features as the monthly plan",
              "Includes up to 3 free QR tags per order (postage £2.99)",
              "Offers a cost saving compared to monthly billing",
            ],
          },
        ],
      },
      {
        heading: "3. Billing & Payments",
        subsections: [
          {
            heading: "3.1 Payment Processing",
            paragraphs: [
              "Payments are handled securely through our payment provider (e.g., Stripe). Tag-Tails Ltd does not store full card details.",
            ],
          },
          {
            heading: "3.2 Automatic Renewal",
            paragraphs: ["Subscriptions renew automatically at the end of each billing cycle unless cancelled."],
          },
          {
            heading: "3.3 Failed Payments",
            paragraphs: ["If a payment fails:"],
            bullets: [
              "We may retry the payment",
              "Your subscription benefits may be paused until payment is resolved",
            ],
          },
        ],
      },
      {
        heading: "4. Subscription Features",
        paragraphs: ["Premium subscription features may include:"],
        bullets: [
          "SMS GPS location alerts when your pet’s tag is scanned",
          "Enhanced contact options",
          "Priority support",
          "Additional pet profile features",
        ],
      },
      {
        paragraphs: ["Features may evolve over time. Any major changes will be communicated on the website."],
      },
      {
        heading: "5. Cancellation",
        paragraphs: [
          "You may cancel your subscription at any time via your Tag-Tails account dashboard.",
          "Upon cancellation:",
        ],
        bullets: [
          "Premium features remain active until the end of the current billing period",
          "No further charges will be made",
        ],
      },
      {
        heading: "6. Refunds",
        paragraphs: [
          "Refunds are only provided where required by UK consumer law.",
          "Tag-Tails does not offer refunds for:",
        ],
        bullets: [
          "Partially used subscription periods",
          "Failure to use the service",
          "Situations where a pet is not found",
        ],
      },
      {
        heading: "7. Fair Use",
        paragraphs: ["Subscribers agree not to misuse premium features, including:"],
        bullets: [
          "Excessive or automated scanning",
          "Attempting to manipulate GPS alerts",
          "Using the service for non-pet-related purposes",
        ],
      },
      {
        paragraphs: ["Tag-Tails Ltd may suspend accounts that violate fair-use rules."],
      },
      {
        heading: "8. Service Limitations",
        paragraphs: ["Tag-Tails subscription services rely on third-party networks and devices. We cannot guarantee:"],
        bullets: [
          "SMS delivery in areas with poor signal",
          "GPS accuracy on all devices",
          "Immediate notifications during network outages",
        ],
      },
      {
        heading: "9. Changes to Subscription Terms",
        paragraphs: [
          "Tag-Tails Ltd may update subscription pricing or features. Any changes will be announced in advance. Continued use of the service after changes indicates acceptance.",
        ],
      },
      {
        heading: "10. Contact Information",
        paragraphs: ["For subscription enquiries:"],
        bullets: ["Email: subscriptions@tag-tails.co.uk", "Website: www.tag-tails.co.uk"],
      },
    ],
  },
];

export function getLegalDocument(slug: string) {
  return LEGAL_DOCUMENTS.find((document) => document.slug === slug);
}
