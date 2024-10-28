import * as React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { DndContext } from "@dnd-kit/core";
import LetterDrop from "../../components/Games/LetterDrop";
import LetterCard from "../../components/Games/LetterCards";

const Alphabet = () => {

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
      <div className="flex h-full justify-center items-center border text-white">
        <DndContext>
            <LetterDrop id="1"></LetterDrop>
        </DndContext>
      </div>
      
    </Layout>
  );
};

export default Alphabet;
