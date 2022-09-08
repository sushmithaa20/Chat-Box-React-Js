import './App.css';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';


function App() {
  const [user] = useAuthState(auth);
  return (
    <>

    {user ? <Chat /> :<SignIn />}
    
   </>
  );
}

export default App;
