import React from 'react'

type Props = {
  src: string
}

const Icon = ({ src }: Props) => {
  console.log("../../assets" + src);

  return (
    <img src={require("../../assets" + src)} width="202px" height="202px" alt={src}/>
  )
}

export default Icon