import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = async () => {
        await createUserWithEmailAndPassword( auth, email, password )
    };
  return (
    <div>
        <input placeholder="Email..."
        onchange={(e) = setEmail(e.target.value)}
        />
        <input placeholder="Password..."
        onchange={(e) = setPassword(e.target.value)}
        type='password'
        />
    <button onClick={signIn} >Sign In</button>

    </div>
  )
}
