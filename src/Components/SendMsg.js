import React,{ useState } from "react"
import { auth } from '../firebase.js'
import { db } from '../firebase';
import firebase from 'firebase/compat/app';



function SendMsg({ scroll }) {
    const [msg, setMsg] = useState('')

    async function SendMsg(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={SendMsg}>
                <div className="sendMsg" >
                <input  className="input"  placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button className="btn" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}
export default SendMsg