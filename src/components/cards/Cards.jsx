import React from 'react'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
  console.log({confirmed, recovered, deaths, lastUpdate});
  return (
    <div>Cards</div>
  )
}

export default Cards