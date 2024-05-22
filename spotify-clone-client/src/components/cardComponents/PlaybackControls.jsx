import React, {useState} from 'react'
import { PlayCircleFill, Repeat, Shuffle, SkipBackward, SkipBackwardFill, SkipForward, SkipForwardFill } from 'react-bootstrap-icons'



const PlaybackControls = () => {
  const [active, setActive] = useState(false)
  const [color, setColor] = useState('currentColor')
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const handleShuffle = (e) => {
    e.preventDefault()
    if (shuffle) {
      setShuffle(false)
      
    } else {
      setShuffle(true)
    }
  }

  const handleRepeat = (e) => {
    e.preventDefault()
    if (repeat) {
      setRepeat(false)
    } else {
      setRepeat(true)
    }
  }


  return (
   <div className="w-full flex items-center">
<div onClick={handleShuffle} className="flex items-center justify-start flex-shrink-0 w-1/5">
  <Shuffle className={shuffle ? 'size-6 pointer-events-none text-green-600' : 'size-6 text-translucent4 pointer-events-none'}/>
</div>
<div className="flex items-center justify-center flex-shrink-0 w-1/5">
<SkipBackwardFill className='size-10 text-translucent7'/>
</div>
<div className="flex items-center justify-center flex-shrink-0 w-1/5">
  <PlayCircleFill className='size-20 text-translucent7'/>
</div>
<div className="flex items-center justify-center flex-shrink-0 w-1/5">
  <SkipForwardFill className='size-10 text-translucent7'/>
</div>
<div onClick={handleRepeat} className="flex items-center justify-end flex-shrink-0 w-1/5">
  <Repeat className={repeat ? 'size-6 pointer-events-none text-green-600' : 'size-6 text-translucent4 pointer-events-none'}/>
</div>
   </div>
  )
}

export default PlaybackControls
