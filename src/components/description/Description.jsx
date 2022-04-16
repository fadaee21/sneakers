import React from 'react'
import { useGlobalContext } from '../../context'
import { AddCart } from '../addCart/AddCart'
import './description.style.css'
export const Description = () => {
  const { data } = useGlobalContext()
  return (
    <div className='description'>
      {data.map(e => {
        const { name, explain, id } = e
        return (
          <div key={id} className='description-content'>
            <p>Sneaker Company</p>
            <h1> {name}</h1>
            <p>{explain}</p>
          </div>
        )
      })}
      <AddCart />
    </div>
  )
}
