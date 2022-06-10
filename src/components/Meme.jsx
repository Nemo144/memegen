import React from "react";

export const Meme = () => {
  return (
    <div>
      <div className="flex m-10 p-5">
        <input
          type="text"
          className="w-full rounded-lg mr-6 bg-transparent border py-4 px-4 text-black outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="up"
          name="name"
        />

        <input
          type="text"
          className="w-full rounded-lg bg-transparent border py-4 px-4 text-black outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="down"
          name="name"
        />
      </div>
      <div className="m-14">
        <button
          className="w-full rounded-lg bg-purple-700 h-16 font-bold px-4 text-white outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        >
          Get a new meme image 🏞{" "}
        </button>
      </div>
    </div>
  );
};
