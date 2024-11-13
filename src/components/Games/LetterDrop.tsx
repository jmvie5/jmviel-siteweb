import * as React from "react";
import {useDroppable} from '@dnd-kit/core';
import { LetterCardProps } from "./LetterCards";


export default function LetterDrop({id, letter, visible}:LetterCardProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
    visible: visible
  };
  
  return (
    <div ref={setNodeRef} className='border size-20 text-center place-content-center'>
      {letter}
    </div>
  );
}