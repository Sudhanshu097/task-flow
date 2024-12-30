import { pricingPlans } from '@/lib/pricing';
import { PricingCard } from '@/components/pricing/pricing-card';

export const metadata = {
  title: 'Pricing - TaskFlow Pro',
  description: 'Choose the perfect plan for your team and start managing projects efficiently.',
};

export default function PricingPage() {
  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the plan that's right for your team
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(pricingPlans).map(([id, plan]) => (
          <PricingCard
            key={id}
            name={plan.name}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            planId={id}
            isPopular={id === 'pro'}
          />
        ))}
      </div>

      <div className="mt-12 text-center space-y-4">
        <p className="text-muted-foreground">
          All prices are in INR and include GST
        </p>
        <p className="text-sm text-muted-foreground">
          Need a custom plan? <a href="/contact" className="underline hover:text-primary">Contact us</a>
        </p>
      </div>
    </div>
  );
}