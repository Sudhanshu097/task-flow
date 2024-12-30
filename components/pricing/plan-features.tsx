import { Check } from 'lucide-react';

interface PlanFeaturesProps {
  features: string[];
}

export function PlanFeatures({ features }: PlanFeaturesProps) {
  return (
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center">
          <Check className="mr-2 h-4 w-4 text-green-500" />
          <span className="text-sm text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  );
}