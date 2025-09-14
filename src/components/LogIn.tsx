import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useEffect } from 'react'

const LogIn = () => {

    
    

  //    useEffect(() => {
  //   // Al volver del redirect, Firebase resuelve el resultado
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       if (result) {
  //         console.log("Login con redirect:", result.user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error en login:", error);
  //     });
  // }, []);

    // const googleLogin = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithRedirect(auth, provider);
    // }

    const googleLogin = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log("Login con popup:", result.user);
      } catch (error) {
        console.error(error);
      }
    };
    
    
    return (
        <button className="btn-login" onClick={googleLogin}>
            <i className="fa-brands fa-google"></i>
            Sign in with Google
        </button>
    )
}

export default LogIn;