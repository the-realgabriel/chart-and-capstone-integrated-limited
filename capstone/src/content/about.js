
import interior from "../images/interior-view-steel-factory.jpg"
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-gray-100 text-gray-900">
          
          <nav className="bg-black text-white flex justify-between items-center p-4">
            <motion.h1 className="text-xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Behavy</motion.h1>
            <ul className="hidden md:flex space-x-6">
              <li>About Us</li>
              <li>Corporate Governance</li>
            </ul>
            <motion.button className="bg-green-500 px-4 py-2 rounded" whileHover={{ scale: 1.1 }}>Contact Us</motion.button>
          </nav>
          
         
          <header className="relative text-white text-center py-32 bg-cover bg-center" style={{backgroundImage: "url('/hero-image.jpg')"}}>
            <motion.h2 className="text-4xl font-bold" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>GROWING BEYOND</motion.h2>
            <motion.h3 className="text-4xl font-bold bg-red-500 px-2 inline-block" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>EXPECTATION</motion.h3>
          </header>
          
          
          <motion.section className="p-8 bg-black text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-xl font-bold">PREMIUM COAL QUALITY</h2>
            <p>BOSS and PB have high-quality coal with high CV...</p>
          </motion.section>
          
         
          <motion.section className="p-8 bg-blue-600 text-white" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-xl font-bold">UNIQUE POSITIONING IN THE MARKET</h2>
            <p>BOSS operates and supplies coal to premium customers...</p>
          </motion.section>
          
          
          <motion.section className="p-8 bg-black text-white text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-bold">ABOUT BOSS</h2>
            <p>Ideally positioned to fulfill the growing energy needs...</p>
          </motion.section>
          
         
          
         
          <footer className="bg-black text-white p-8 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>&copy; 2024 Behavy. All Rights Reserved.</motion.p>
          </footer>
        </div>
      );
    };

