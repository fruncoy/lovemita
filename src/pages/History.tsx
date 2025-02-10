import React from "react";
import { Calendar } from "lucide-react";
export function History() {
  const history = [{
    date: "2024-01-15",
    filename: "WhatsApp Chat with Sarah.txt",
    score: 85
  }, {
    date: "2024-01-10",
    filename: "WhatsApp Chat with Mike.txt",
    score: 62
  }, {
    date: "2024-01-05",
    filename: "WhatsApp Chat with Alex.txt",
    score: 78
  }];
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Scan History</h1>
        <div className="space-y-4">
          {history.map((item, index) => <div key={index} className="bg-neutral-900/50 p-6 rounded-lg border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-rose-400" />
                <div>
                  <p className="text-white font-medium">{item.filename}</p>
                  <p className="text-sm text-white/60">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">Love Score</p>
                <p className="text-lg font-bold text-rose-400">{item.score}%</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}