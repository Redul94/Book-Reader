"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center p-4 pr-0 text-white">
    <motion.div
      className="flex items-center w-full md:w-auto"
      transition={{ type: "spring", damping: 18, mass: 0.75 }}
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 className="text-black mr-8 font-bold text-2xl md:text-3xl">Book App</h1>
      <motion.input
        type="text"
        className="p-2 md:p-4 text-black ml-4 h-8 rounded-3xl w-full md:w-auto bg-yellow-100 border-2 border-black"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        placeholder="Tell us which one you like to read.."
      />
    </motion.div>
    <motion.div
      className="flex items-center mt-4 md:mt-0"
      transition={{ type: "spring", damping: 18, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Link href="/profile" className="mr-4">
        <motion.img
          src="https://imageio.forbes.com/specials-images/imageserve/6244c655b6ecfb569a31a3ba/John-Cena-performing-his-famous--You-Can-t-See-Me--taunt-/0x0.jpg?format=jpg&crop=1200,675,x0,y0,safe&width=960"
          alt="avatar"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </Link>
    </motion.div>
  </header>
  );
}
