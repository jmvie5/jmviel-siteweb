import * as React from "react";
import {useDroppable} from '@dnd-kit/core';


export default function LetterDrop({id}:{id:string}) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };
  
  return (
    <div ref={setNodeRef} className='border size-20'>
      
    </div>
  );
}