import React from "react";

interface BookCardProps {
  title: string;
  description: string;
  coverImage: string;
  onclick?: () => void;
}

export default function BookCard({
  title,
  description,
  coverImage,
  onclick,
}: BookCardProps) {
  return (
    <div
      className="w-50 p-4 rounded bg-[#f8eadd] shadow-md cursor-pointer transition-transform duration-300 ease mb-6 mr-6"
      onClick={onclick}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full aspect-square rounded"
      />
      <div className="mt-4">
        <h3 className="text-lg mb-2 text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
