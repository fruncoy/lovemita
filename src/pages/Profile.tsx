import React from "react";
import { GradientButton } from "../components/ui/gradient-button";
import { Bell, CreditCard, Settings, Shield, Mail, Moon, Sun, Phone } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { cn } from "../lib/utils";
export function Profile() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Profile</h1>
        <div className="bg-neutral-900/50 p-8 rounded-lg border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="gradient-button !p-2 min-w-0 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl font-medium">FB</span>
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-xl font-bold text-white">Frank Bosire</h2>
              <p className="text-white/60">frank@example.com</p>
              <p className="text-white/40 text-sm">Member since January 2024</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <GradientButton variant="variant">Edit Profile</GradientButton>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-8 rounded-lg border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Account Settings
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/60 text-sm">Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/40" />
                  <input type="email" value="frank@example.com" className="bg-neutral-800 border border-white/10 rounded px-3 py-2 text-white w-full" readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-sm">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white/40" />
                  <input type="tel" value="+254 712 345 678" className="bg-neutral-800 border border-white/10 rounded px-3 py-2 text-white w-full" readOnly />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="bg-neutral-900/50 p-8 rounded-lg border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Credits Overview
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-800/50 rounded-lg">
              <p className="text-white/60 text-sm">Available Credits</p>
              <p className="text-2xl font-bold text-rose-400">50</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-lg">
              <p className="text-white/60 text-sm">Total Scans</p>
              <p className="text-2xl font-bold text-rose-400">24</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <GradientButton variant="variant" onClick={() => {
          // Handle logout and redirect to home
          window.location.href = "/";
        }} className="px-8">
            Log Out
          </GradientButton>
        </div>
      </div>
    </div>;
}