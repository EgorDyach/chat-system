import React, { useContext, useState } from 'react'
import { collection, query, where, getDoc,doc ,getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase'
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const { dispatch } = useContext(ChatContext)

  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where("displayName", '==', username))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
      // setErr(false)
    } catch (err) {
      setErr(true)
    }

  }
  const handleSelect = async (u) => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      console.log(!res.exists())
      if (!res.exists()) {

        await setDoc(doc(db, 'chats', combinedId), { messages: [] })
        console.log(currentUser.uid, user.uid)
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            status: user.status
          },
          [combinedId + '.date']: serverTimestamp(),
        })
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp(),
        })
      }

      dispatch({type: "CHANGE_USER", payload: user })
    } catch (err) {
      console.log(err)
    }
    setUser(null)
    setUsername('')
  }
  const handleKey = e => {
    e.code === 'Enter' && handleSearch()
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" value={username} placeholder='Найти пользователя (формат "Имя (статус)")' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {err && <span>Пользователь не найден</span>}
      {user &&

        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Search
