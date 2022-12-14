//rfce -shortcut (at starting)
import { useState, useRef} from 'react'
import { db } from '../firebase';
import { auth } from '../firebase.js'
import SignOut from './SignOut';
import SendMsg from './SendMsg';
import React, { useEffect } from 'react';

function Chat() {
  const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
  return (
    <div>
        <SignOut />
        <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
    <SendMsg scroll={scroll} />
    <div ref={scroll}></div>
    </div>
  )
}

export default Chat