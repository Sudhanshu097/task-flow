import { loadScript } from '@/lib/utils';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export async function initializeRazorpay() {
  return await loadScript('https://checkout.razorpay.com/v1/checkout.js');
}

export async function createRazorpayOrder(planId: string) {
  try {
    const response = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planId }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}