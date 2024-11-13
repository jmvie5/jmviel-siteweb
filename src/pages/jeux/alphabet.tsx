import * as React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import LetterDrop from "../../components/Games/LetterDrop";
import LetterCard, { LetterCardProps } from "../../components/Games/LetterCards";


const Alphabet = () => {

  const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const [availableLetters, setAvailableLetters] = useState<(LetterCardProps)[]>([
    ...alphabet.map((letter) => {
        return {
          id: letter,
          letter: letter,
          visible: true,
        }
      }
    )
  ])

  const [letterMatrix, setLetterMatrix] = useState<(LetterCardProps)[][]>([[{id:'1', letter:' ', visible: true}]])

  function handleDragEnd(event:DragEndEvent) {
    const overId = event.over?.id

    if (!overId) return;

    // if letter was picked from the available letters and drop on scrabble table
    // find active letter
    const activeLetter = availableLetters.find((letter) => letter.id === event.active.id)

    if (!activeLetter) return;
    
    

    // add letter to letter matrix
    setLetterMatrix([...letterMatrix.map((line) => (
      line.map((letter) => {
        if (letter.id === overId && letter.letter === ' ') {

          // set active letter invisible
          setAvailableLetters([...availableLetters.map((l) => {
            if (l.id === event.active.id) {
              l.visible = false
            }
            return l
          })])

          return {id:'1', letter:activeLetter?.letter, visible: true}
        }
        return letter
      })
    ))])
    
  }

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
        <DndContext
          onDragEnd={handleDragEnd}
        >
          <div className="h-full flex items-center">
            {letterMatrix.map((line) => (
              line.map((item, index) => (
                <LetterDrop id={item.id} letter={item.letter} visible={item.visible} />
              ))
            ))}
            
          </div>
            
          <span className="w-[80%] h-1 bg-black"/>
          <div className="h-full grid grid-cols-12 items-center">
            {availableLetters.map((letter) => (
              <LetterCard id={letter.id}  letter={letter.letter} visible={letter.visible}/>
            ))}
            
          </div>
            
        </DndContext>
      </div>
      
    </Layout>
  );
};

export default Alphabet;
