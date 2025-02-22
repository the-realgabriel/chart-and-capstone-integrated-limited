import Nav from "../nav/nav";
import { motion } from "framer-motion";
import hero from "../images/hero.jpg";
import interior from "../images/interior.jpg";
export default function About() {
    return (
        <div className="bg-gray-100 text-gray-900">
          
       
          <Nav/>
         
          <header className="relative text-white text-center py-32 bg-cover bg-center" style={{backgroundImage: ""}}>
            <motion.h2 className="text-4xl font-bold" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Chart & Capstone</motion.h2>
            <motion.h3 className="text-4xl font-bold bg-red-500 px-2 inline-block" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>EXPECTATION</motion.h3>
          </header>
          
          
          <motion.section className="p-8 bg-black text-white " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold">WHY US?</h2>
            <p class = "max-w-6xl text-2xl">Chart & Capstone Integrated Ltd (C&C) is a 100% Nigerian-owned company dedicated to pioneering sustainable business solutions across multiple industries. <br/>Our operations span energy, infrastructure, real estate, transportation, and financial services, making us a dynamic partner for local and global businesses.<br/>

Since our inception, we have established strong networks across Africa, Asia, and Europe, bringing in Foreign Direct Investment (FDI) and technology-driven innovations to fuel industrial and economic growth.</p>
          <img className="h-60 w-96 float-right rounded border-8 border-black"  src={interior}/>
          <li>Founded: 2012</li>
          <li>Business Presence: Nigeria, China, UK, Ghana</li>
          </motion.section>
          
         
          <motion.section className="p-8 bg-blue-600 text-white text-center" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-xl font-bold">Our Vision & Mission</h2>
            <p>To become the leading integrated business solutions provider in emerging markets by leveraging technology,<br/> strategic investments, and sustainable practices.</p>
            <p>And to bridge economic gaps, accelerate industrial growth, and empower businesses through quality service,<br/> innovation, and operational excellence.</p>
          </motion.section>
          
          
          <motion.section className="p-8 bg-black text-white text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-bold"></h2>
            <p>Ideally positioned to fulfill the growing energy needs...</p>
          </motion.section>
          
          <motion.section className="p-8 bg-blue-600 text-white" initial={{x: -100}} animate={{x:0}} transition={{duration: 1.5}}>
            <h2></h2>

          </motion.section>
         
          
         
          <footer className="bg-black text-white p-8 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>&copy; 2024 Behavy. All Rights Reserved.</motion.p>
          </footer>
        </div>
    );
}