import React from 'react'

const Heading = ({children}) => {
  return (
      <h3 className='font-bold text-lg md:text-xl text-violet-700 dark:text-zinc-400 mb-3 capitalize'>{ children}</h3>
  )
}

export default Heading