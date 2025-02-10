import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
export function Footer() {
  return <footer className="relative border-t border-white/10 bg-[#030303] text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="relative">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-8 text-white/60 text-lg leading-relaxed">
              Let AI reveal red flags, love patterns, and hidden motives in your
              chats. Get instant insights and improve your love life!
            </p>
            <form className="relative mb-8">
              <Input type="email" placeholder="Enter your email" className="pr-12 backdrop-blur-sm" />
              <Button type="submit" size="icon" className="absolute right-1 top-1 h-8 w-8 rounded-full bg-rose-500 text-white transition-transform hover:scale-105">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl" />
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-4 text-base text-white/60">
                <div>
                  <p className="font-medium text-white mb-1">
                    Feedback and Improvements:
                  </p>
                  <p className="text-rose-400">feedback@truelove.co.ke</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">
                    Customer Support:
                  </p>
                  <p className="text-rose-400">support@truelove.co.ke</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4 max-w-[240px]">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center md:items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <p className="text-sm text-white/60">
              © 2024 TrueLove AI. All rights reserved.
            </p>
            <p className="text-sm text-white/40">Version 1.0.01</p>
          </div>
          <Link to="/privacy" className="text-sm text-rose-400 hover:text-rose-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>;
}