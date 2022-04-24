import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Pais } from '../../types/Pais';
import { Prediccion, Predicciones } from '../../types/Prediccion';
import { ensure } from '../../utils/arrayUtils';
import CardPais from '../CardPais/CardPais';
import './styles.css';



interface IProps {
  paises: Pais[],
  id: string,
  predicciones: Predicciones;
  callBack: (id: string,pred: Prediccion[]) => void;
}


const Grupo = (props: IProps) => {

  const { id } = props;
  const [pred, setPred] = useState(props.predicciones.posiciones)

  const reorder = (list: Prediccion[], startIndex: number, endIndex: number) => {
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
    setPred(reorder(pred, source.index, destination.index));

  }

  useEffect(() => {
    props.callBack(id,pred)
  }, [pred])
  
  
  return (
    <div className={`grupo`}>
      <div className='title'>GRUPO {id}</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={id}>
          {(droppableProvided) => (
            <ul className='grupo-list' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
              {pred.map((pred, index) => {
                return (
                  <Draggable draggableId={pred.id} key={pred.id} index={index}>
                    {(draggableProvided) => (
                      <li ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                        <CardPais pais={ensure(props.paises.find((pais) => pred.id === pais.id))} posicion={index + 1}/>
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