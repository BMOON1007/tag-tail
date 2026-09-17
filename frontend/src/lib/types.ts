export type PlanId = "basic" | "monthly" | "annual";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  interval: "month" | "year" | null;
  price_label: string;
  interval_label: string;
  badge: string;
  features: string[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  intended_plan: PlanId;
  plan: Plan | null;
  created_at: string | null;
};

export type ApiError = {
  message?: string;
  errors?: Record<string, string[]>;
  dev_reset_url?: string | null;
};
