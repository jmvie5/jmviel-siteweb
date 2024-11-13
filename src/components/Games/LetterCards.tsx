import * as React from "react";
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import { twMerge } from "tailwind-merge";

export type LetterCardProps = {
  id:string, 
  letter:string,
  visible: boolean
}

export default function LetterCard({id, letter, visible}:LetterCardProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={twMerge('border size-20', !visible && 'invisible')}>
      {letter}
    </button>
  );
}