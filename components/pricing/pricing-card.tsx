'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlanFeatures } from '@/components/pricing/plan-features';
import { initializeRazorpay, createRazorpayOrder } from '@/lib/razorpay';
import { formatPrice } from '@/lib/utils/subscription';
import { toast } from '@/components/ui/use-toast';
import { useSupabase } from '@/components/providers/supabase-provider';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  planId: string;
  isPopular?: boolean;
}

export function PricingCard({
  name,
  description,
  price,
  features,
  planId,
  isPopular,
}: PricingCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { supabase } = useSupabase();

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }

      const res = await initializeRazorpay();
      if (!res) {
        toast({
          title: 'Error',
          description: 'Razorpay SDK failed to load',
          variant: 'destructive',
        });
        return;
      }

      const order = await createRazorpayOrder(planId);
      
      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: 'TaskFlow Pro',
        description: `${name} Plan Subscription`,
        order_id: order.orderId,
        handler: async (response: any) => {
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const data = await verifyRes.json();
            if (data.success) {
              toast({
                title: 'Success',
                description: 'Payment successful! Your subscription is now active.',
              });
              router.refresh();
              router.push('/dashboard');
            }
          } catch (error) {
            toast({
              title: 'Error',
              description: 'Failed to verify payment',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          email: session.user.email,
        },
        theme: {
          color: '#0C4A6E',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`flex flex-col ${isPopular ? 'border-primary shadow-lg' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <span className="text-3xl font-bold">{formatPrice(price)}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <PlanFeatures features={features} />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handlePayment}
          disabled={isLoading}
          variant={isPopular ? 'default' : 'outline'}
        >
          {isLoading ? 'Processing...' : 'Subscribe Now'}
        </Button>
      </CardFooter>
    </Card>
  );
}