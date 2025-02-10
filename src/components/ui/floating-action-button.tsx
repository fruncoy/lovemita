import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, HelpCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
export function FloatingActionButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [{
    icon: HelpCircle,
    label: "Help",
    onClick: () => {
      navigate("/help");
      setIsOpen(false);
    }
  }, {
    icon: Share2,
    label: "Share",
    onClick: () => {
      console.log("Share clicked");
      setIsOpen(false);
    }
  }];
  return <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && <div className="absolute bottom-16 right-0 space-y-2">
            {menuItems.map((item, index) => <motion.button key={item.label} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: 20
        }} transition={{
          delay: index * 0.1
        }} onClick={item.onClick} className="gradient-button w-full !min-w-0 flex items-center gap-2 px-4 py-2 rounded-lg text-white">
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </motion.button>)}
          </div>}
      </AnimatePresence>
      <motion.button whileTap={{
      scale: 0.95
    }} onClick={toggleMenu} className={cn("gradient-button !min-w-0 h-12 w-12 rounded-full flex items-center justify-center", isOpen && "!bg-white/10")}>
        <MoreHorizontal className="h-5 w-5 text-white" />
      </motion.button>
    </div>;
}