import React from 'react'

const BackgroundImage = ({name, imagePath}) => {
  return (
    <div>
      <img alt = {name} src={imagePath} />
    </div>
  )
}

export default BackgroundImage
