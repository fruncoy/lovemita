import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GradientButton } from "./ui/gradient-button";
import { Sidebar } from "./ui/sidebar";
export function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userInitials, setUserInitials] = useState("FB");
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(position / maxScroll, 1);
      setScrolled(scrollPercentage);
    };
    setIsSidebarOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleScanChat = () => {
    setIsAuthenticated(true);
    navigate("/results");
  };
  return <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-[#030303] transition-opacity duration-300" style={{
        opacity: Math.min(scrolled * 0.95, 0.95)
      }} />
        <div className="relative z-10 flex items-center justify-between px-6 py-4">
          <GradientButton onClick={toggleSidebar} className="!p-2 min-w-0 aspect-square">
            <Menu size={20} />
          </GradientButton>
          {isAuthenticated ? <div className="gradient-button !p-2 min-w-0 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {userInitials}
              </span>
            </div> : <GradientButton onClick={handleScanChat}>Scan Chat</GradientButton>}
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>;
}