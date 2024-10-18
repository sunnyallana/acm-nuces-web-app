import { motion } from "framer-motion";
import logo from "../../assets/images/coders-cup-logo.png"; 

const Loader = () => {
  const variants = {
    initial: { scaleY: 0.5, opacity: 0 },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-8">
      {/* Logo */}
      <img src={logo} alt="Coders Cup Logo" className="h-32 w-auto" /> 

      {/* Loader */}
      <motion.div
        transition={{ staggerChildren: 0.25 }}
        initial="initial"
        animate="animate"
        className="flex gap-2"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
      </motion.div>
    </div>
  );
};

export default Loader;
