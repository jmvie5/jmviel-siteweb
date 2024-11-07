import * as React from "react";
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';


export default function LetterCard({id, letter}:{id:string, letter:string}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='border size-20'>
      {letter}
    </button>
  );
}