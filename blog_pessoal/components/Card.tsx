import React from 'react';

interface CardProps{
    titulo: string;
    descricao: string;
}

const Card = ({titulo, descricao}: CardProps) => {
  return (
    <div className = "card">
      <h1>{ titulo }</h1>
      <p> { descricao }</p>
    </div>
  )
}

export default Card
