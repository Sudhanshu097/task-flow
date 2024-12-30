import { pricingPlans } from '@/lib/pricing';

export function getPlanFeatures(planId: string) {
  const plan = pricingPlans[planId as keyof typeof pricingPlans];
  return plan?.features || [];
}

export function getPlanLimits(planId: string) {
  const plan = pricingPlans[planId as keyof typeof pricingPlans];
  return plan?.limits || { teamMembers: 0, projects: 0, storage: 0 };
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
}