import React from "react";
import { GradientButton } from "../components/ui/gradient-button";
import { AlertTriangle, Heart, DollarSign, Flame, Clock, MessageCircle, Users, Sparkles, Calendar, BrainCircuit, Scale, Timer, ThermometerSun, Map, UserX, ThumbsUp } from "lucide-react";
export function Results() {
  const wordAnalysis = {
    mostUsed: ["babe", "sorry", "busy", "later", "money"],
    phrases: ["I'll try my best", "Not right now", "Something came up"]
  };
  const redFlags = ["Frequent cancellation of plans", "Inconsistent communication patterns", "Avoids relationship discussions", "Makes promises without following through"];
  const chatAnalysis = {
    wordAnalysis: {
      mostUsed: ["babe", "sorry", "busy", "later", "money"],
      phrases: ["I'll try my best", "Not right now", "Something came up"],
      totalMessages: 1247,
      uniqueWords: 892,
      averageMessageLength: 15
    },
    sentimentAnalysis: {
      positive: 45,
      neutral: 30,
      negative: 25
    },
    communicationPatterns: {
      morningMessages: 30,
      afternoonMessages: 45,
      eveningMessages: 25,
      averageResponseTime: "2.5 hours",
      consistencyScore: 72
    },
    relationshipTimeline: {
      duration: "3 months",
      intensityTrend: "increasing",
      significantDates: [{
        date: "2024-01-01",
        event: "First conversation"
      }, {
        date: "2024-02-14",
        event: "Valentine's Day"
      }, {
        date: "2024-03-15",
        event: "First argument"
      }]
    }
  };
  const relationship = {
    person1: "Sarah",
    person2: "Mike",
    chatDate: "2024-01-15"
  };
  const recommendations = {
    general: ["Schedule regular quality time together", "Improve communication transparency", "Set clear relationship boundaries", "Practice active listening"],
    person1: ["Be more responsive to messages", "Follow through with planned commitments", "Express feelings more openly"],
    person2: ["Reduce defensive responses", "Share future plans more often", "Be more consistent with communication"]
  };
  const incidents = {
    person1: [{
      event: "Missed important family event",
      impact: "High",
      frequency: "Once",
      date: "2024-02-20"
    }, {
      event: "Failed to communicate about work trip",
      impact: "Medium",
      frequency: "Twice",
      date: "2024-01-15"
    }],
    person2: [{
      event: "Shared private conversation with friends",
      impact: "High",
      frequency: "Once",
      date: "2024-03-01"
    }, {
      event: "Ignored messages during argument",
      impact: "Medium",
      frequency: "Multiple times",
      date: "2024-02-10"
    }]
  };
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Sample Results</h1>
          <div className="text-right">
            <p className="text-white/60">Chat Analysis between</p>
            <p className="text-xl font-bold text-white">
              {relationship.person1} & {relationship.person2}
            </p>
            <p className="text-sm text-white/40">
              Analyzed on {new Date(relationship.chatDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-rose-400" />
            <h2 className="text-2xl font-bold text-white">Final Love Score</h2>
          </div>
          <div className="h-6 bg-neutral-800 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full transition-all duration-1000" style={{
            width: "75%"
          }} />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-rose-400">75%</p>
            <p className="text-white/60">Success Prediction: High</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">
                Most Used Words & Phrases
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white/60 mb-2">Top Words</h3>
                <div className="flex flex-wrap gap-2">
                  {wordAnalysis.mostUsed.map(word => <span key={word} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                      {word}
                    </span>)}
                </div>
              </div>
              <div>
                <h3 className="text-white/60 mb-2">Common Phrases</h3>
                <ul className="space-y-2">
                  {wordAnalysis.phrases.map(phrase => <li key={phrase} className="text-white/80">
                      {phrase}
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-bold text-white">
                Red Flags Detected
              </h2>
            </div>
            <ul className="space-y-3">
              {redFlags.map(flag => <li key={flag} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-white/80">{flag}</span>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white">
                Response Patterns
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/60">Average Response Time</span>
                  <span className="text-purple-400">2.5 hours</span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{
                  width: "70%"
                }} />
                </div>
              </div>
              <p className="text-white/80">Prioritization Score: Medium</p>
            </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSun className="h-6 w-6 text-orange-400" />
              <h2 className="text-xl font-bold text-white">
                Emotional Patterns
              </h2>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">Affection Level</span>
                <span className="text-orange-400">65%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Cold Behavior</span>
                <span className="text-orange-400">35%</span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-6 w-6 text-red-400" />
              <h2 className="text-xl font-bold text-white">Anger Patterns</h2>
            </div>
            <div className="space-y-3">
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{
                width: "45%"
              }} />
              </div>
              <p className="text-white/80">Medium Aggression Level</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-bold text-white">
                Financial Behavior
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Money Requests</span>
                <span className="text-green-400">Low Frequency</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Money Topic Reactions</span>
                <span className="text-green-400">Neutral</span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <UserX className="h-6 w-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">Trust Indicators</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Mentions of Others</span>
                <span className="text-pink-400">Moderate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Infidelity Risk</span>
                <span className="text-green-400">Low</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Map className="h-6 w-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Future Planning</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Long-term Plans Mentioned</span>
                <span className="text-cyan-400">Frequently</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full" style={{
                width: "85%"
              }} />
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-violet-400" />
              <h2 className="text-xl font-bold text-white">
                Effort & Investment
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Sacrifices Made</span>
                <span className="text-violet-400">High</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Relationship Investment</span>
                <span className="text-violet-400">Strong</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">
              Relationship Advice
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">
                General Recommendations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.general.map((rec, index) => <div key={index} className="flex items-start gap-3 bg-neutral-800/50 p-4 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400 text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white/80">{rec}</p>
                  </div>)}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  For {relationship.person1}
                </h3>
                <div className="space-y-3">
                  {recommendations.person1.map((rec, index) => <div key={index} className="flex items-start gap-3 bg-rose-500/5 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
                      <p className="text-white/80">{rec}</p>
                    </div>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  For {relationship.person2}
                </h3>
                <div className="space-y-3">
                  {recommendations.person2.map((rec, index) => <div key={index} className="flex items-start gap-3 bg-blue-500/5 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                      <p className="text-white/80">{rec}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            <h2 className="text-xl font-bold text-white">
              Relationship Incidents
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">
                Issues from {relationship.person1}
              </h3>
              <div className="space-y-3">
                {incidents.person1.map((incident, index) => <div key={index} className="bg-rose-500/5 p-4 rounded-lg">
                    <p className="text-white/80">{incident.event}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-rose-400 text-sm">
                        Impact: {incident.impact}
                      </span>
                      <span className="text-white/40 text-sm">
                        Frequency: {incident.frequency}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm mt-1">
                      {new Date(incident.date).toLocaleDateString()}
                    </p>
                  </div>)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-3">
                Issues from {relationship.person2}
              </h3>
              <div className="space-y-3">
                {incidents.person2.map((incident, index) => <div key={index} className="bg-blue-500/5 p-4 rounded-lg">
                    <p className="text-white/80">{incident.event}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-blue-400 text-sm">
                        Impact: {incident.impact}
                      </span>
                      <span className="text-white/40 text-sm">
                        Frequency: {incident.frequency}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm mt-1">
                      {new Date(incident.date).toLocaleDateString()}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-violet-400" />
            <h2 className="text-xl font-bold text-white">
              Relationship Timeline
            </h2>
          </div>
          <div className="space-y-6">
            <div className="relative">
              {chatAnalysis.relationshipTimeline.significantDates.map((event, index) => <div key={index} className="flex gap-4 items-start relative pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-violet-400 rounded-full" />
                      {index !== chatAnalysis.relationshipTimeline.significantDates.length - 1 && <div className="w-0.5 h-full bg-violet-400/20 absolute top-3" />}
                    </div>
                    <div>
                      <p className="text-white font-medium">{event.event}</p>
                      <p className="text-white/60 text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>)}
            </div>
            <div className="flex items-center justify-between p-4 bg-violet-500/5 rounded-lg">
              <span className="text-white/60">Relationship Duration</span>
              <span className="text-violet-400">
                {chatAnalysis.relationshipTimeline.duration}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="h-6 w-6 text-rose-400" />
            <h2 className="text-xl font-bold text-white">
              Intimate Relationship Analysis
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-800/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-5 w-5 text-rose-400" />
                <h3 className="text-white font-medium">Intimate Encounters</h3>
              </div>
              <p className="text-2xl font-bold text-rose-400">12</p>
              <p className="text-white/60 text-sm">Past 3 months</p>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <h3 className="text-white font-medium">Post-Intimacy Tone</h3>
              </div>
              <p className="text-2xl font-bold text-blue-400">Positive</p>
              <p className="text-white/60 text-sm">85% satisfaction rate</p>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ThumbsUp className="h-5 w-5 text-green-400" />
                <h3 className="text-white font-medium">Future Interest</h3>
              </div>
              <p className="text-2xl font-bold text-green-400">High</p>
              <p className="text-white/60 text-sm">92% willingness</p>
            </div>
            <div className="bg-neutral-800/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <h3 className="text-white font-medium">First-Timer Odds</h3>
              </div>
              <p className="text-2xl font-bold text-yellow-400">78%</p>
              <p className="text-white/60 text-sm">Probability score</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}