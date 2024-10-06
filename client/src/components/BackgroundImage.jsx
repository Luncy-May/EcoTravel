import React from 'react'

const BackgroundImage = ({name, imagePath}) => {
  return (
    <div>
      <img alt = {name} src={imagePath} className='brightness-50 bg-no-repeat'/>
    </div>
  )
}

export default BackgroundImage
