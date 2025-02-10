import React from "react";
import { Mail, Star, AlertTriangle } from "lucide-react";
import { GradientButton } from "../components/ui/gradient-button";
export function Privacy() {
  return <div className="w-full min-h-screen bg-[#030303] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-white/80">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Data Processing & Storage
            </h2>
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <p>
                    <strong>Chat Exports:</strong> We do not store your WhatsApp
                    chat exports. These are processed temporarily and
                    immediately discarded after analysis.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <p>
                    <strong>Personal Information:</strong> We securely store
                    basic user data (name, email, phone) solely for account
                    management and communication.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <p>
                    <strong>Analysis Results:</strong> We store analysis results
                    to provide historical insights and improve our service.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <p>
                    <strong>Financial Information:</strong> We do not store
                    credit card details or financial transaction data.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              AI Technology Stack
            </h2>
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
              <p className="mb-4">
                Our analysis is powered by a sophisticated combination of
                technologies:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <p>
                    Proprietary AI models specifically trained for relationship
                    analysis
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <p>Integration with OpenAI's advanced language models</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <p>Future integrations planned with Deepseek and Google AI</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Important Disclaimers
            </h2>
            <div className="bg-rose-500/10 p-6 rounded-lg border border-rose-500/20">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-rose-200">
                  Please read these important disclaimers carefully:
                </p>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
                  <p>
                    AI analysis can sometimes be incorrect or misleading - use
                    results as guidance, not final decisions
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
                  <p>
                    All results are strictly based on chat analysis - external
                    factors are not considered
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
                  <p>
                    We are not responsible for actions taken based on analysis
                    results
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2" />
                  <p>
                    Consider professional relationship counseling for serious
                    issues
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Share Your Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-rose-400" />
                  <h3 className="text-lg font-medium text-white">
                    Send Feedback
                  </h3>
                </div>
                <p className="text-white/60 mb-4">
                  Share how TrueLove AI has impacted your relationship journey
                </p>
                <a href="mailto:feedback@truelove.co.ke" className="text-rose-400 hover:text-rose-300">
                  feedback@truelove.co.ke
                </a>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-lg font-medium text-white">
                    Write a Review
                  </h3>
                </div>
                <p className="text-white/60 mb-4">
                  Help others by sharing your experience with TrueLove AI
                </p>
                <GradientButton>Leave a Review</GradientButton>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
              <p className="mb-4">
                If you have any questions about our privacy policy or data
                handling practices, please contact us:
              </p>
              <p className="text-rose-400">privacy@truelove.co.ke</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
}