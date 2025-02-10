import React, { useState } from "react";
import { BarChart3, Flag, Heart, Upload, Clock, ArrowRight, Search, History as HistoryIcon, AlertTriangle } from "lucide-react";
import { GradientButton } from "../components/ui/gradient-button";
import { useNavigate } from "react-router-dom";
import { PrivacyAgreementModal } from "../components/ui/privacy-agreement-modal";
import { FileUpload } from "../components/ui/file-upload";
export function Dashboard() {
  const navigate = useNavigate();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const quickActions = [{
    title: "New Scan",
    description: "Upload a new chat for analysis",
    icon: Upload,
    action: () => navigate("/"),
    variant: "default"
  }, {
    title: "View History",
    description: "Check previous scan results",
    icon: HistoryIcon,
    action: () => navigate("/history"),
    variant: "variant"
  }];
  const recentActivity = [{
    type: "scan",
    name: "Chat with Sarah",
    time: "2 hours ago",
    score: 85
  }, {
    type: "redFlag",
    name: "Chat with Mike",
    time: "1 day ago",
    flags: 3
  }];
  const handleNewScan = () => {
    setShowPrivacyModal(true);
  };
  const handleAgreePrivacy = () => {
    setShowPrivacyModal(false);
    setShowUpload(true);
  };
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <GradientButton onClick={() => navigate("/")}>
            New Scan
          </GradientButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map(action => <button key={action.title} onClick={action.action} className="bg-neutral-900/50 p-6 rounded-lg border border-white/10 text-left hover:bg-neutral-900/70 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-rose-500/10">
                  <action.icon className="h-6 w-6 text-rose-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">
                    {action.title}
                  </h3>
                  <p className="text-white/60">{action.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-white/40" />
              </div>
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Search className="h-5 w-5 text-rose-400" />
              <h3 className="text-lg font-medium text-white">Total Scans</h3>
            </div>
            <p className="text-3xl font-bold text-rose-400">24</p>
            <p className="text-white/60 text-sm mt-1">+3 this week</p>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-medium text-white">
                Red Flags Found
              </h3>
            </div>
            <p className="text-3xl font-bold text-yellow-400">127</p>
            <p className="text-white/60 text-sm mt-1">Across all scans</p>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-5 w-5 text-rose-400" />
              <h3 className="text-lg font-medium text-white">Avg Love Score</h3>
            </div>
            <p className="text-3xl font-bold text-rose-400">72%</p>
            <div className="h-2 bg-neutral-800 rounded-full mt-2">
              <div className="h-full bg-rose-400 rounded-full" style={{
              width: "72%"
            }} />
            </div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  {activity.type === "scan" ? <Search className="h-5 w-5 text-rose-400" /> : <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                  <div>
                    <p className="text-white font-medium">{activity.name}</p>
                    <p className="text-white/60 text-sm">{activity.time}</p>
                  </div>
                </div>
                <div>
                  {activity.type === "scan" ? <p className="text-rose-400 font-medium">
                      {activity.score}% Love Score
                    </p> : <p className="text-yellow-400 font-medium">
                      {activity.flags} Red Flags
                    </p>}
                </div>
              </div>)}
          </div>
        </div>
        <PrivacyAgreementModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} onAgree={handleAgreePrivacy} />
        {showUpload && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-neutral-900 rounded-lg border border-white/10 p-6 max-w-2xl w-full">
              <FileUpload onChange={files => {
            console.log(files);
            navigate("/results");
          }} />
            </div>
          </div>}
      </div>
    </div>;
}