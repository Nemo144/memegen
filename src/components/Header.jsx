import React from "react";
import { images } from "../constants";

export const Header = () => {
  return (
    <div>
      <header className="h-20  bg-purple-700 ">
        <div className="flex justify-between items-end">
          <div className="flex p-6">
            <img src={images.troll} alt="troll" className="h-8" />
            <h1 className="text-white text-xl ml-2">Meme Generator</h1>
          </div>

          <div className="flex ">
            <h2 className="text-white pb-8 pr-12">Memes of Life - hack!</h2>
          </div>
        </div>
      </header>
    </div>
  );
};
