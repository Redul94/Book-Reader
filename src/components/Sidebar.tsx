"use client";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Contact, FileLock, House, Settings, Star, UserPen, Users, Menu } from 'lucide-react';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar on mobile

  const MenuList = [
    { title: "Home", icon: <House /> },
    { title: "Contact", icon: <Contact /> },
    { title: "About Us", icon: <Users /> },
    { title: "Settings", icon: <Settings /> },
    { title: "Edit Profile", icon: <UserPen /> },
    { title: "Rate Us", icon: <Star /> },
    { title: "Change Password", icon: <FileLock /> },
  ];

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Menu className="text-black w-8 h-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Sidebar for Desktop and Mobile */}
      <motion.div
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-100 text-black p-4 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        {MenuList.map((list, i) => (
          <motion.div
            key={i}
            transition={{ type: "spring", damping: 22, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 * (i + 1) }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <ul className="list-none p-0">
              <motion.li
                className="flex items-center gap-2 p-2 shadow-md cursor-pointer rounded-md hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-semibold flex items-center space-x-2">
                  {list.icon}
                  <span>{list.title}</span>
                </span>
              </motion.li>
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Background overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
