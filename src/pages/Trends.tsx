import React from "react";
import { BarChart, TrendingUp, Heart, AlertTriangle, Scale, Clock, DollarSign, MessageCircle } from "lucide-react";
export function Trends() {
  const globalStats = {
    totalScans: 15789,
    averageLoveScore: 68,
    redFlagRate: 42
  };
  const commonExcuses = [{
    text: "I'm busy with work",
    frequency: 78
  }, {
    text: "Something came up",
    frequency: 65
  }, {
    text: "I'll text you later",
    frequency: 58
  }, {
    text: "I need some space",
    frequency: 45
  }, {
    text: "My phone was dead",
    frequency: 42
  }];
  const commonSacrifices = [{
    text: "Changed schedule for partner",
    frequency: 72
  }, {
    text: "Traveled long distance",
    frequency: 65
  }, {
    text: "Financial support",
    frequency: 58
  }, {
    text: "Career compromises",
    frequency: 45
  }, {
    text: "Family event attendance",
    frequency: 42
  }];
  const relationshipMetrics = [{
    category: "Response Time",
    average: "2.5 hours",
    ideal: "< 1 hour",
    icon: Clock,
    color: "text-purple-400"
  }, {
    category: "Trust Score",
    average: "72%",
    ideal: "> 85%",
    icon: Heart,
    color: "text-rose-400"
  }, {
    category: "Financial Mentions",
    average: "15%",
    ideal: "< 10%",
    icon: DollarSign,
    color: "text-green-400"
  }, {
    category: "Communication Quality",
    average: "65%",
    ideal: "> 80%",
    icon: MessageCircle,
    color: "text-blue-400"
  }];
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Analysis Trends</h1>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/60">Updated daily</p>
          </div>
        </div>
        {/* Global Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <BarChart className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-medium text-white">Total Analyses</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400">
              {globalStats.totalScans.toLocaleString()}
            </p>
            <p className="text-white/60 text-sm mt-1">Across all users</p>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-5 w-5 text-rose-400" />
              <h3 className="text-lg font-medium text-white">
                Average Love Score
              </h3>
            </div>
            <p className="text-3xl font-bold text-rose-400">
              {globalStats.averageLoveScore}%
            </p>
            <p className="text-white/60 text-sm mt-1">Global average</p>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-medium text-white">Red Flag Rate</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-400">
              {globalStats.redFlagRate}%
            </p>
            <p className="text-white/60 text-sm mt-1">Of all relationships</p>
          </div>
        </div>
        {/* Common Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Common Excuses */}
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-6 w-6 text-orange-400" />
              <h2 className="text-xl font-bold text-white">
                Most Common Excuses
              </h2>
            </div>
            <div className="space-y-4">
              {commonExcuses.map((excuse, index) => <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <p className="text-white/80">{excuse.text}</p>
                  </div>
                  <span className="text-orange-400">{excuse.frequency}%</span>
                </div>)}
            </div>
          </div>
          {/* Common Sacrifices */}
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-violet-400" />
              <h2 className="text-xl font-bold text-white">
                Top Relationship Sacrifices
              </h2>
            </div>
            <div className="space-y-4">
              {commonSacrifices.map((sacrifice, index) => <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full" />
                    <p className="text-white/80">{sacrifice.text}</p>
                  </div>
                  <span className="text-violet-400">
                    {sacrifice.frequency}%
                  </span>
                </div>)}
            </div>
          </div>
        </div>
        {/* Relationship Metrics */}
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">
              Key Relationship Metrics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relationshipMetrics.map((metric, index) => <div key={index} className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  <h3 className="text-white font-medium">{metric.category}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Average</span>
                    <span className={metric.color}>{metric.average}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Ideal Range</span>
                    <span className="text-green-400">{metric.ideal}</span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Comparison Note */}
        <div className="bg-rose-500/10 p-6 rounded-lg border border-rose-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-rose-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-rose-200 mb-2">Compare Your Results</p>
              <p className="text-white/70">
                Use these trends as a general guide, but remember that every
                relationship is unique. Your results may vary based on
                individual circumstances and relationship dynamics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}