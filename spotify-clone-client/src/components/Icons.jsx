import React from 'react'

const Icons = ({fill, stroke, type, size}) => {
  const icons = {
    music: "m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z",
    home: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", 
    search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z", 
    account: "M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", 
    add: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", 
    heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z", 
    menu: "M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z", 
    back: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z", 
    play: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z", 
    next: "M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z", 
    previous: "M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z", 
    shuffle: "M14.1464 0.646447C14.3417 0.451184 14.6583 0.451184 14.8536 0.646447L17.3536 3.14645C17.5488 3.34171 17.5488 3.65829 17.3536 3.85355L14.8536 6.35355C14.6583 6.54882 14.3417 6.54882 14.1464 6.35355C13.9512 6.15829 13.9512 5.84171 14.1464 5.64645L15.7929 4H11C10.7239 4 10.5 3.77614 10.5 3.5C10.5 3.22386 10.7239 3 11 3H15.7929L14.1464 1.35355C13.9512 1.15829 13.9512 0.841709 14.1464 0.646447ZM0.5 3.5C0.5 3.22386 0.723858 3 1 3H3.8915C4.75348 3 5.55465 3.44405 6.0115 4.175L9.8365 10.295C10.1106 10.7336 10.5913 11 11.1085 11H15.7929L14.1464 9.35355C13.9512 9.15829 13.9512 8.84171 14.1464 8.64645C14.3417 8.45118 14.6583 8.45118 14.8536 8.64645L17.3536 11.1464C17.5488 11.3417 17.5488 11.6583 17.3536 11.8536L14.8536 14.3536C14.6583 14.5488 14.3417 14.5488 14.1464 14.3536C13.9512 14.1583 13.9512 13.8417 14.1464 13.6464L15.7929 12H11.1085C10.2465 12 9.44535 11.556 8.9885 10.825L5.1635 4.705C4.88939 4.26643 4.40869 4 3.8915 4H1C0.723858 4 0.5 3.77614 0.5 3.5ZM0.5 11.5C0.5 11.2239 0.723858 11 1 11H5C5.27614 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.27614 12 5 12H1C0.723858 12 0.5 11.7761 0.5 11.5Z", 
    repeat: "M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"

  }


  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={fill}
        stroke={stroke}
        className={size}
        viewBox="0 0 24 24"
      >
        <path d={icons[type]} />
      </svg>
  )
}



export default Icons

