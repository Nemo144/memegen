import React from "react";

export const Meme = () => {
  return (
    <div>
      <div className="flex m-10 p-5">
        <input
          type="text"
          className="w-full rounded-lg border-zinc-300 mr-6 bg-transparent border py-4 px-4 text-black outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Top text"
        />

        <input
          type="text"
          className="w-full rounded-lg border-zinc-300 bg-transparent border py-4 px-4 text-black outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Bottom text"
        />
      </div>

      <div className="m-14 my-11">
        <button
          className="w-full rounded-lg bg-purple-700 h-16 font-bold px-4 text-white outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
        >
          Get a new meme image 🖼{" "}
        </button>
      </div>
    </div>
  );
};
