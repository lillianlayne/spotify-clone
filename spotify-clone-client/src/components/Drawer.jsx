import React from 'react'

const Drawer = ({id}) => {


  return (
   <div className="flex flex-col z-50 fixed w-full p-10 bg-stone-800 rounded-t-3xl bottom-0 left-0">

    <div className="w-full border-b border-stone-400 py-6">
      <button>add to liked songs</button>
    </div>
    <div className="w-full border-b border-stone-400 py-6">
      <button>add to liked songs</button>
    </div>
   </div>
  )
}

export default Drawer
