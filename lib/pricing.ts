export const pricingPlans = {
  basic: {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small teams and startups',
    price: 999, // ₹999/month
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Basic project templates',
      'Email support',
      '5GB storage',
      'Basic analytics',
    ],
    limits: {
      teamMembers: 5,
      projects: 3,
      storage: 5,
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal for growing teams',
    price: 2499, // ₹2,499/month
    features: [
      'Up to 20 team members',
      'Unlimited projects',
      'Advanced project templates',
      'Priority email & chat support',
      '50GB storage',
      'Advanced analytics & reports',
      'Custom fields',
      'Guest access',
    ],
    limits: {
      teamMembers: 20,
      projects: -1, // unlimited
      storage: 50,
    },
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 7499, // ₹7,499/month
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Custom project templates',
      '24/7 priority support',
      'Unlimited storage',
      'Custom analytics',
      'API access',
      'SSO & advanced security',
      'Dedicated success manager',
      'Custom onboarding',
    ],
    limits: {
      teamMembers: -1, // unlimited
      projects: -1, // unlimited
      storage: -1, // unlimited
    },
  },
} as const;