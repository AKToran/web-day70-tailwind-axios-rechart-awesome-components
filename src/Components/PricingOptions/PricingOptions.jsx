import React, { use } from "react";
import PricingData from "./PricingData";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h2 className="text-4xl font-bold py-4">Get Premium Membership:</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {
          pricingData.map(pricing => 
            <PricingData 
            pricing={pricing} 
            key={pricing.id}>
            </PricingData>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;
