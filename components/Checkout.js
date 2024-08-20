"use client";

import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const Checkout = ({ plan, amount, credits, buyerId }) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const onCheckout = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan, amount, credits, buyerId }),
    });

    const session = await response.json();

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Stripe checkout error:", error);
    }
  };

  return (
    <form onSubmit={onCheckout}>
      <Button type="submit" role="link" className="w-full">
        Buy {plan}
      </Button>
    </form>
  );
};

export default Checkout;
