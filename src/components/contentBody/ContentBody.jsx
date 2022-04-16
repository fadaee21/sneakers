import React from 'react'
import { Description } from '../description/Description'
import { ShowImage } from '../showImage/ShowImage'
import './contentBody.style.css'
export const ContentBody = () => {

  return (
    <div className="content-body"  >
      <ShowImage />
      <Description />
    </div>
  )
}
