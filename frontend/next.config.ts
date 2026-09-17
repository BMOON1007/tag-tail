import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      { source: "/terms", destination: "/legal/terms", permanent: false },
      { source: "/privacy", destination: "/legal/privacy", permanent: false },
      { source: "/cookies", destination: "/legal/cookies", permanent: false },
    ];
  },
};

export default nextConfig;
