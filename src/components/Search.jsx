import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a name...' />
        </div>
        <div className="userChat">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
            <div className="userChatInfo">
                <span>James</span>
            </div>
        </div>
    </div>
  )
}

export default Search