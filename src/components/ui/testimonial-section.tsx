import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [{
  name: "Sarah Johnson",
  role: "Dating 2 years",
  content: "TrueLove AI helped me understand patterns I was completely blind to. It saved my relationship by highlighting communication issues we needed to work on.",
  rating: 5
}, {
  name: "Michael Chen",
  role: "Newly Engaged",
  content: "The relationship analysis gave us insights that would have taken months of therapy to uncover. It helped us build a stronger foundation for our future together.",
  rating: 5
}, {
  name: "Emma Williams",
  role: "Long-distance Relationship",
  content: "Being apart was challenging, but the AI analysis helped us identify areas where we could improve our communication. It's been a game-changer for us.",
  rating: 5
}];
export function TestimonialSection() {
  return <section className="w-full py-20 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Stories, Real Results
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-white/60 text-lg">
            See how TrueLove AI is transforming relationships
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-neutral-900/50 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />)}
              </div>
              <Quote className="h-8 w-8 text-rose-400/20 mb-4" />
              <p className="text-white/80 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-rose-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}