import React, {useState} from 'react'
import Icons from '../Icons'

const PlaybackControls = () => {
  const [active, setActive] = useState(false)
  const [color, setColor] = useState('currentColor')

  const handleClick = (e) => {
    e.preventDefault()
    if (active) {
      setActive(false)
      setColor('currentColor')
    } else {
      setActive(true)
      setColor('green')
    }
  }
  return (
    <div className='w-full grid grid-cols-5 place-items-center'>
      <div onClick={handleClick} className=''>
      <Icons type="shuffle" fill={color} size="size-8"/>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        <Icons type="previous" fill="currentColor" size="size-14" />
      </div>
    </div>
  )
}

export default PlaybackControls
