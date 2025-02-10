import React from "react";
import { motion } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import { GradientButton } from "./gradient-button";
import { Link } from "react-router-dom";
interface PrivacyAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}
export function PrivacyAgreementModal({
  isOpen,
  onClose,
  onAgree
}: PrivacyAgreementModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <motion.div initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.95
    }} className="relative bg-neutral-900 rounded-lg border border-white/10 p-6 max-w-lg w-full z-10">
        <button onClick={onClose} className="absolute right-4 top-4 text-white/60 hover:text-white">
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-rose-400" />
          <h2 className="text-xl font-bold text-white">Privacy Agreement</h2>
        </div>
        <div className="space-y-4 mb-6">
          <p className="text-white/60">
            Before proceeding with the chat analysis, please review and agree to
            our privacy policy:
          </p>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
              <p>
                Your chat data is processed temporarily and immediately
                discarded after analysis
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
              <p>Analysis results are stored securely in your account</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
              <p>We never share your personal information with third parties</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <GradientButton onClick={onAgree}>I Agree</GradientButton>
          <Link to="/privacy" className="text-rose-400 hover:text-rose-300 text-sm">
            Read Full Policy
          </Link>
        </div>
      </motion.div>
    </div>;
}