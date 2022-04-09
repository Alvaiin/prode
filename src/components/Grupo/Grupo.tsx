import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Pais } from '../../types/Pais';
import CardPais from '../CardPais/CardPais';
import './styles.css';


interface IProps {
  paises: Pais[],
  id: string
}


const Grupo = (props: IProps) => {

  const { id } = props;
  const [paises, setPaises] = useState(props.paises)

  const reorder = (list: Pais[], startIndex: number, endIndex: number) => {
    const result = [...list]
    var [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result
  }

  const onDragEnd = (res: DropResult) => {
    const { source, destination } = res;
    if (!destination)
      return
    if (source.index === destination.index && source.droppableId === destination.droppableId)
      return
    setPaises((prevPaises) => reorder(paises, source.index, destination.index));

  }
  return (
    <div className='grupo'>
      <div className='title'>GRUPO {id}</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={id}>
          {(droppableProvided) => (
            <ul className='grupo-list' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {paises.map((pais, index) => {
                return (
                    <Draggable draggableId={pais.id} key={pais.id} index={index}>
                      {(draggableProvided) => (
                        <li ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                          <CardPais pais={pais} posicion={index + 1} />
                        </li>
                      )}
                    </Draggable>
                )
              })}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Grupo