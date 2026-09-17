export type FaqItem = {
  group: string;
  question: string;
  answer: string;
};

export const FAQ_GROUPS = [
  "All questions",
  "Getting started",
  "Using the tag",
  "Privacy & safety",
  "Accounts & pets",
  "Tags & delivery",
  "Plans & alerts",
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    group: "Getting started",
    question: "What is Tag-Tails?",
    answer:
      "Tag-Tails is a smart pet tag system that helps reunite lost pets with their owners using QR codes.",
  },
  {
    group: "Getting started",
    question: "How does it work?",
    answer: "When someone scans your pet’s tag, they see the contact details you choose to share.",
  },
  {
    group: "Getting started",
    question: "Do I need to download an app?",
    answer: "No. Everything works through your browser.",
  },
  {
    group: "Getting started",
    question: "How do I set up my pet’s tag?",
    answer: "Create an account, add your pet’s details, and link the tag by scanning it.",
  },
  {
    group: "Using the tag",
    question: "What happens when someone scans the tag?",
    answer: "Your pet’s profile opens with the contact details you’ve chosen to show.",
  },
  {
    group: "Using the tag",
    question: "Can I update my pet’s details later?",
    answer: "Yes. You can edit your pet’s profile at any time.",
  },
  {
    group: "Using the tag",
    question: "Is the tag waterproof?",
    answer: "Yes. The tag is waterproof and suitable for everyday outdoor use.",
  },
  {
    group: "Using the tag",
    question: "Does the tag work outside the UK?",
    answer:
      "Yes. The QR code works anywhere in the world — anyone who scans it can see the details you’ve shared.",
  },
  {
    group: "Privacy & safety",
    question: "Are my contact details public?",
    answer: "No. You choose exactly what information is shown when someone scans the tag.",
  },
  {
    group: "Privacy & safety",
    question: "Does this replace a microchip?",
    answer: "No. The tag is an extra safety layer — you should still keep your pet microchipped.",
  },
  {
    group: "Privacy & safety",
    question: "Is this a live GPS tracker?",
    answer:
      "No. The tag does not track your pet all the time. Location is only shared if the finder allows it when they scan the tag. If they say no, they can still see the contact page.",
  },
  {
    group: "Accounts & pets",
    question: "Can I add more than one pet?",
    answer: "Yes. You can add multiple pets — each one gets its own profile and tag.",
  },
  {
    group: "Accounts & pets",
    question: "Does the person who finds my pet need an account?",
    answer: "No. Anyone can scan the tag and see the details you choose to show.",
  },
  {
    group: "Accounts & pets",
    question: "Can I add medical or emergency information to my pet’s profile?",
    answer:
      "Yes. You can add vet details, medication, allergies, behaviour notes, or anything else that helps someone care for your pet if needed.",
  },
  {
    group: "Tags & delivery",
    question: "What if my pet’s tag gets lost?",
    answer:
      "You can order a replacement tag. Your pet’s profile stays the same; you just link the new one. Replacement tags are £0 plus postage, and lost tags can be deactivated.",
  },
  {
    group: "Tags & delivery",
    question: "How many tags can I order?",
    answer:
      "Each order includes up to 3 free QR tags, plus £2.99 postage. Every tag has a unique code and is linked to one pet.",
  },
  {
    group: "Tags & delivery",
    question: "How much is postage?",
    answer: "Postage is £2.99 per order for all tag orders, including Basic, Premium and replacement orders.",
  },
  {
    group: "Plans & alerts",
    question: "Do I need a subscription to use the tag?",
    answer: "No. The basic service is free. A subscription only adds optional extra features.",
  },
  {
    group: "Plans & alerts",
    question: "What do the Premium plans cost?",
    answer:
      "Premium is £2.99 per pet per month, or £25 per pet per year. The annual plan saves £10.88 compared with 12 monthly payments. Both paid plans include the same Premium features.",
  },
  {
    group: "Plans & alerts",
    question: "Are SMS alerts included with Premium?",
    answer:
      "Yes. When someone scans the tag, Premium owners can get a text with a scan alert, a Google Maps link and a link to the pet’s profile.",
  },
];
