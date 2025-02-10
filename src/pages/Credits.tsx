import React from "react";
import { Coins, Sparkles, AlertTriangle } from "lucide-react";
import { GradientButton } from "../components/ui/gradient-button";
import { cn } from "../lib/utils";
export function Credits() {
  const packages = [{
    credits: 1,
    price: 50,
    popular: false
  }, {
    credits: 5,
    price: 200,
    popular: true,
    savings: "Save 20%"
  }, {
    credits: 10,
    price: 400,
    popular: false,
    savings: "Save 30%"
  }];
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Credits</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map(pkg => <div key={pkg.credits} className={cn("bg-neutral-900/50 p-6 rounded-lg border transition-colors", pkg.popular ? "border-rose-500/50 hover:border-rose-500" : "border-white/10 hover:border-white/20")}>
              {pkg.popular && <div className="bg-rose-500/10 text-rose-400 text-sm px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-white">
                  {pkg.credits}
                </span>
                <span className="text-white/60">credits</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-rose-400">
                  KES {pkg.price}
                </span>
                {pkg.savings && <span className="text-green-400 text-sm">{pkg.savings}</span>}
              </div>
              <GradientButton className="w-full">Purchase</GradientButton>
            </div>)}
        </div>
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 p-8 rounded-lg border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-rose-400" />
            <h2 className="text-xl font-bold text-white">Premium Forever</h2>
          </div>
          <p className="text-white/60 mb-6">
            Unlimited scans, priority support, and exclusive features. Coming
            soon!
          </p>
          <GradientButton variant="variant" className="w-full opacity-50" disabled>
            Coming Soon
          </GradientButton>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1" />
            <div>
              <p className="text-white font-medium mb-1">Important Note</p>
              <p className="text-white/60 text-sm">
                Credits never expire. Each scan requires 1 credit. Results are
                stored forever in your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}