import { motion } from 'framer-motion';
import Problemslist from './Problemslist';
import TeamMesage from './TeamMesage';
const IntroSection = () => {

  return (
  <>
    <section className="relative bg-gray-100 pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-2 ">
            Sach batao...{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
              className="inline-block"
            >
              🤔
            </motion.span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <p className="text-base sm:text-xl font-medium text-black font-tiktok-sans">
            Aap yahan isliye ho kyunki
          </p>
        </motion.div>

  
      </div>

      <div className=" max-w-7xl mx-auto  sm:px-8 px-4  mt-0">
        <Problemslist />
    </div>
    <div className="">
      <TeamMesage
      />
    </div>
    </section>
 
  </>
  );
};

export default IntroSection;
