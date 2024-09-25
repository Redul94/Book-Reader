"use client";
import BookCard from "@/components/BookCard";
import { books } from "@/constants/Mockdata";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full m-auto">
      <div className="bg-[#f8eadd] m-0 mx-8 p-2.5 px-0.5 rounded-2xl ">
        <h1 className="font-bold">All Books</h1>
        <ol className=" mt-4 pl-8 list-none flex flex-wrap justify-between  ">
          {books.map((book, i) => (
            <motion.li
            className="w-2/6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 50, mass: 0.75 }}
              initial={{ opacity: 0, x: 200 * (i + 1) }}
              animate={{ opacity: 1, x: 0 }}
              key={i}
            >
              <a
                href={`/book/${book.id}`}
                className="text-blue-500 hover:underline"
              >
                <BookCard
                  title={book.title}
                  coverImage={book.image}
                  description={book.description}
                />
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </main>
  );
}
