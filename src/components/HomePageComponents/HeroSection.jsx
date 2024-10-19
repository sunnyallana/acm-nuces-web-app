import { motion } from 'framer-motion';
import logo from '../../assets/images/coders-cup-logo.png';
import heroBg from '../../assets/images/backgrounds/hero-bg.png';
import sponsor from '../../assets/images/sponsors/sponsor-logo.png';

export default function HeroSection() {
    return (
        <div
            className='w-full bg-cover bg-center h-[100vh] flex flex-col justify-between py-20 overflow-hidden' 
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            
            <motion.div
                className="flex flex-col items-center mt-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.img 
                    className='w-64 h-auto mb-4' 
                    src={logo} 
                    alt="Coders Cup Logo"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.button
                    className='text-white text-lg bg-blue-600 border border-white rounded-md px-8 py-3 hover:bg-blue-700'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Register Now
                </motion.button>
            </motion.div>

            {/* Sponsor Section */}
            <motion.div
                className='flex flex-col items-end pr-10'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
                <p className='text-white font-bold text-sm mb-2 pr-2'>POWERED BY</p>
                <motion.img 
                    className='w-24 h-auto' 
                    src={sponsor} 
                    alt="Sponsor Logo"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                />
            </motion.div>
        </div>
    );
}
