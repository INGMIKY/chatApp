import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

const User = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    return (
        <div className="right-side">
            <h1><i className="fa-solid fa-cat"></i>QuickChat</h1>
            <article className="card-user">
                <img src={user?.photoURL ?? "userImage.png"} alt="Imagen del usuario" referrerPolicy="no-referrer"/>
                <p>{user ? user?.displayName : 'Name user'}</p>
                {user ? <LogOut /> : <LogIn />}
            </article>
            
            
        </div>
    )
}

export default User;