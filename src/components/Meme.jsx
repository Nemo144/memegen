import React, { useState } from "react";
import memesData from "../constants/memesData";

export const Meme = () => {
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // setMemeImage(prevState => !prevState)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

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
          onClick={getMemeImage}
        >
          Get a new meme image 🖼{" "}
        </button>
      </div>

      <div className="flex justify-center items-center">
        <img src={meme.randomImage} alt="meme" className="w-max" />
      </div>
    </div>
  );
};
