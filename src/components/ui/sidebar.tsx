import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Home, LayoutDashboard, Coins, History, UserCircle, LogOut, BarChart, TrendingUp, X } from "lucide-react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated?: boolean;
}
const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};
const overlayVariants = {
  open: {
    opacity: 0.5,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const navItems = [{
  icon: Home,
  label: "Home",
  path: "/"
}, {
  icon: BarChart,
  label: "Sample Results",
  path: "/results"
}, {
  icon: LayoutDashboard,
  label: "Dashboard",
  path: "/dashboard"
}, {
  icon: TrendingUp,
  label: "Analysis Trends",
  path: "/trends"
}, {
  icon: Coins,
  label: "Credits",
  path: "/credits"
}, {
  icon: History,
  label: "History",
  path: "/history"
}, {
  icon: UserCircle,
  label: "Profile",
  path: "/profile"
}, {
  icon: LogOut,
  label: "Log Out",
  path: "/logout"
}];
export function Sidebar({
  isOpen,
  onClose,
  isAuthenticated = false
}: SidebarProps) {
  const location = useLocation();
  const filteredNavItems = navItems.filter(item => item.path !== "/logout" || isAuthenticated);
  return <>
      <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={overlayVariants} onClick={onClose} className="fixed inset-0 bg-black z-40" style={{
      pointerEvents: isOpen ? "auto" : "none"
    }} />
      <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={sidebarVariants} className="fixed left-0 top-0 h-full w-72 bg-[#030303] border-r border-white/10 z-50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6">
            <h2 className="text-xl font-bold text-white">TrueLove AI</h2>
            <button onClick={onClose} className="gradient-button !min-w-0 !p-2 rounded-full">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
          <nav className="flex-1 px-3">
            {filteredNavItems.map(item => <Link key={item.label} to={item.path} onClick={onClose} className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors", "hover:bg-white/10", location.pathname === item.path ? "text-rose-400 bg-rose-500/10" : "text-white/60 hover:text-white")}>
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>)}
          </nav>
        </div>
      </motion.div>
    </>;
}