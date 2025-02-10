import React from "react";
import { motion } from "framer-motion";
import { Smartphone, FileText, AlertTriangle, Shield, MessageCircle, HelpCircle, Clock, BoxIcon } from "lucide-react";
interface HelpCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  steps?: string[];
}
const helpCards: HelpCardProps[] = [{
  title: "How to Export WhatsApp Chats",
  description: "Follow these steps to export your WhatsApp chat history:",
  icon: Smartphone,
  steps: ["Open the chat you want to analyze", "Tap the three dots menu (⋮) in the top right", "Select 'More' > 'Export chat'", "Choose 'Without media' for faster upload", "Save the exported file"]
}, {
  title: "Chat Analysis Process",
  description: "Understanding how TrueLove AI processes and analyzes your conversations",
  icon: MessageCircle,
  steps: ["Upload your exported chat file", "AI analyzes communication patterns", "Identifies key relationship indicators", "Generates detailed insights report", "Provides actionable recommendations"]
}, {
  title: "Privacy & Security",
  description: "Learn about how we protect your data and maintain your privacy",
  icon: Shield,
  steps: ["All data is encrypted end-to-end", "Chats are processed temporarily", "No personal data is stored", "Analysis results are private", "Regular security audits"]
}, {
  title: "Understanding Results",
  description: "How to interpret your relationship analysis results",
  icon: FileText,
  steps: ["Review the overall love score", "Check identified red flags", "Examine communication patterns", "Consider improvement suggestions", "Track progress over time"]
}, {
  title: "Common Issues",
  description: "Solutions to frequently encountered problems",
  icon: AlertTriangle,
  steps: ["File format not supported", "Analysis taking too long", "Results not loading", "Account access issues", "Payment problems"]
}, {
  title: "Processing Time",
  description: "Expected waiting times for different analyses",
  icon: Clock,
  steps: ["Standard analysis: 2-3 minutes", "Detailed report: 5-7 minutes", "Historical comparison: 8-10 minutes", "Multiple chat analysis: 10-15 minutes", "Custom analysis: varies"]
}];
function HelpCard({
  title,
  description,
  icon: Icon,
  steps
}: HelpCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-rose-500/10">
          <Icon className="h-6 w-6 text-rose-400" />
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <p className="text-white/60 mb-4">{description}</p>
      {steps && <ol className="space-y-2">
          {steps.map((step, index) => <li key={index} className="flex items-start gap-3 text-white/80">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 text-sm">
                {index + 1}
              </span>
              {step}
            </li>)}
        </ol>}
    </motion.div>;
}
export function Help() {
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-8 w-8 text-rose-400" />
          <h1 className="text-4xl font-bold text-white">Help Center</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpCards.map((card, index) => <HelpCard key={index} {...card} />)}
        </div>
      </div>
    </div>;
}