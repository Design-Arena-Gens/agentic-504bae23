import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SparklesCore } from './components/ui/sparkles'
import { BackgroundBeams } from './components/ui/background-beams'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import { HoverBorderGradient } from './components/ui/hover-border-gradient'

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <BackgroundBeams />

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="font-playfair font-black italic text-7xl md:text-9xl tracking-tight">
              Unlearn<span className="text-emerald-400">.</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
              Challenge the status quo.
              <br />
              <span className="text-emerald-400 font-semibold">Embrace the future.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-white px-8 py-3 text-lg"
            >
              Begin Your Journey
            </HoverBorderGradient>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#10b981"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-black italic text-6xl md:text-8xl mb-16 text-center">
              The Power of
              <br />
              <span className="text-emerald-400">Unlearning</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Break Barriers",
                desc: "Traditional education builds walls. We tear them down.",
                delay: 0.2
              },
              {
                title: "Reimagine Learning",
                desc: "Question everything. Rebuild from the foundation.",
                delay: 0.4
              },
              {
                title: "Sustainable Growth",
                desc: "Education that evolves with you, not against you.",
                delay: 0.6
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300">
                  <h3 className="font-playfair font-black italic text-3xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair font-black italic text-6xl md:text-8xl">
              Education
              <br />
              <span className="text-emerald-400">Redefined</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <p className="text-2xl md:text-4xl font-light">
                    <span className="font-bold">100%</span> Forward Thinking
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <p className="text-2xl md:text-4xl font-light">
                    <span className="font-bold">0%</span> Status Quo
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <p className="text-2xl md:text-4xl font-light">
                    <span className="font-bold">∞</span> Possibilities
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-emerald-500/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-teal-500/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border-2 border-emerald-400/30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-playfair font-black italic text-5xl md:text-7xl text-emerald-400"
                  >
                    .
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-black italic text-5xl md:text-7xl mb-12">
              For Educators.<br />
              For Students.<br />
              <span className="text-emerald-400">For the Future.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6 mb-16"
          >
            <p>
              We provide sustainable solutions that empower educators and students
              to break free from outdated paradigms.
            </p>
            <p className="text-emerald-400 font-semibold">
              The courage to unlearn is the first step to true innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {['Educators', 'Students', 'Institutions'].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl px-12 py-6"
              >
                <p className="text-2xl font-bold">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen flex items-center justify-center">
        <BackgroundBeams />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair font-black italic text-6xl md:text-9xl mb-8"
          >
            Ready to
            <br />
            <span className="text-emerald-400">Unlearn?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-white px-12 py-4 text-xl font-semibold"
            >
              Get Started
            </HoverBorderGradient>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-400 text-lg"
          >
            hello@unlearn.education
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-playfair font-black italic text-2xl">
            Unlearn<span className="text-emerald-400">.</span>
          </p>
          <p className="text-gray-400">
            © 2025 Unlearn. Challenging education, one mind at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
