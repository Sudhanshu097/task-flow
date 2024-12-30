import { useEffect, useState } from 'react';
import { useSupabase } from '@/components/providers/supabase-provider';
import type { Database } from '@/lib/database.types';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];

export function useSubscription() {
  const { supabase } = useSupabase();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSubscription() {
      try {
        const { data: subscription, error } = await supabase
          .from('subscriptions')
          .select('*')
          .single();

        if (error) {
          throw error;
        }

        setSubscription(subscription);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getSubscription();
  }, [supabase]);

  return { subscription, isLoading };
}