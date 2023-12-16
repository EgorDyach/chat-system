import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
        <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
        </div>
    </div>
  )
}

export default Message