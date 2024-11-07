import * as React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { DndContext } from "@dnd-kit/core";
import LetterDrop from "../../components/Games/LetterDrop";
import LetterCard from "../../components/Games/LetterCards";


const Alphabet = () => {

  const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <Layout>
      <div className="text-white">
        <div className="justify-between ">
          <div className="flex flex-col my-4 ">
            <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
            <NavBar more />
          </div>

          <div className="ml-4">
            <h2 className="text-xl my-4">Alphabet</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full justify-center items-center border text-white">
        <DndContext>
          <div className="h-full items-center grid grid-cols-12">
            {[...Array(72)].map((box) => (
              <LetterDrop id={box}/>
            ))}
            
          </div>
            
          <span className="w-[80%] h-1 bg-black"/>
          <div className="h-full grid grid-cols-12 items-center">
            {alphabet.map((letter) => (
              <LetterCard id={`letterCard_${letter}`} letter={letter}/>
            ))}
            
          </div>
            
        </DndContext>
      </div>
      
    </Layout>
  );
};

export default Alphabet;
