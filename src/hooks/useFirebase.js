import initalizeAuthentication from "../Firebase/initializeAuthentication";
import { getAuth, signInWithPopup, GoogleAuthProvider,TwitterAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initalizeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
      

  };

  const signInWithTwitter = ()=> {
    return signInWithPopup(auth, twitterProvider);
    
  }

  const createUserwithEmailandPassword = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .catch((error) => {

    //   setError(error.message);

    // });
  };
  const signInWithEmail = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
       

      } else {
        setUser({});
      }
      setIsLoading(false);

    });
  }, [])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false);
      })

  }

  return { user, error, auth, isLoading, setUser, setIsLoading, setError, signInWithEmail, signInWithGoogle, signInWithTwitter, createUserwithEmailandPassword, logOut };

}

export default useFirebase;