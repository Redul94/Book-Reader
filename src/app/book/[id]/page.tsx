"use client";
import { books } from "@/constants/Mockdata";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor, useDomValue } from "reactjs-editor";
import { Settings, Share2, Search, ChevronLeft } from "lucide-react";

export default function BookPage() {
  const { id } = useParams();
  const { dom, setDom } = useDomValue();

  const selectedBook = books.filter((book) => {
    return id === String(book.id);
  });

  const notify = () => toast("Your changes have been saved!!");

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(
      `dom${selectedBook[0].id}`,
      JSON.stringify(updatedDomValue)
    );
    notify();
  };

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedBook.length) return <p>Book not found</p>;

  return (
    <motion.div
    transition={{ type: "spring", damping: 40, mass: 0.75 }}
    initial={{ opacity: 0, x: 1000 }}
    animate={{ opacity: 1, x: 0 }}
    className="w-full px-4 md:px-8"
  >
    <motion.section
      transition={{ type: "spring", damping: 44, mass: 0.75 }}
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full md:w-[90%] mx-auto justify-between items-center min-h-[5vh] mt-2.5 mb-2.5"
    >
      <div className="flex items-center">
        <ChevronLeft className="cursor-pointer" size={20} />
      </div>
      <div className="text-center uppercase pl-24">
        <h2>{selectedBook[0].title}</h2>
      </div>
      <div className="flex items-center">
        <button
          className="px-8 py-2.5 bg-transparent rounded-full border border-black mr-5 cursor-pointer hover:bg-black hover:text-white"
          onClick={handleSave}
        >
          Save
        </button>
        <Settings className="mr-5 text-[20px]" />
        <Share2 className="mr-5 text-[20px]" />
        <Search className="mr-5 text-[20px]" />
      </div>
    </motion.section>
    <Editor
      htmlContent={`
      <main className="bookContainer">
        <aside>
          <h1 className="center">${selectedBook[0].title}</h1>
          <span className="center small">By ${selectedBook[0].author}</span>
          ${selectedBook[0].content}
        </aside>
      </main>
      `}
    />
    <ToastContainer />
  </motion.div>
  );
}
