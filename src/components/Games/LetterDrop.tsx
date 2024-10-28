import * as React from "react";
import {useDroppable} from '@dnd-kit/core';


export default function LetterDrop({id}:{id:string}) {
  const {setNodeRef} = useDroppable({
    id: id,
  });
  
  return (
    <div ref={setNodeRef} className='border size-20'>
      
    </div>
  );
}