import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-wave" aria-hidden="true" />

      <div className="hero-inner">
        <motion.div
          className="hero-media"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/assets/hero-cyber-model.png" alt="" />
          <p className="hero-tagline">Where innovation becomes reality</p>
        </motion.div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1>
            <span>Code The</span>
            <span className="hero-outline">Future</span>
          </h1>
        </motion.div>

        <a className="glass-button hero-cta" href="#about">
          Register Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
