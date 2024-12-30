'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function LandingHero() {
  const router = useRouter();

  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Project Management with TaskFlow Pro
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Streamline collaboration, boost productivity, and deliver projects on time with our powerful project management platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                onClick={() => router.push('/signup')}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/demo')}
              >
                Live Demo
              </Button>
            </div>
            <div className="mt-10 flex justify-center gap-x-6 text-sm leading-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}