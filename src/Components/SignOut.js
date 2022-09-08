import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
  return (
    <div className='out' style={{
      position: 'fixed',top:'0', width:'100%'
  }}>
      <button style={{ backgroundColor:'#240046', color:'white', padding: '15px', fontSize: '15px', borderRadius: '90px 90px 90px 0px', fontWeight: '600' ,width:'100%', }} onClick={() => auth.signOut()}>Sign Out</button>
  </div>
  )
}

export default SignOut