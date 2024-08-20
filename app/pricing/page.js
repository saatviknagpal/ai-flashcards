import { plans } from "@/lib/stripe";
import Checkout from "@/components/Checkout";
import Navbar from "@/components/Navbar";
import { auth } from "@clerk/nextjs/server";

export default function Pricing() {
  const { userId } = auth();

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="py-5 text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {plan.name}
            </h2>
            <p className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {plan.price === 0 ? "Free" : `$${plan.price}`}
            </p>
            <ul className="mb-4">
              {plan.inclusions.map((inclusion, index) => (
                <li
                  key={index}
                  className={
                    inclusion.isIncluded
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-400 dark:text-gray-500"
                  }
                >
                  {inclusion.label}
                </li>
              ))}
            </ul>
            {plan.price > 0 && (
              <Checkout
                plan={plan.name}
                amount={plan.price}
                credits={plan.credits}
                buyerId={userId}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
