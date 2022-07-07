import initalizeAuthentication from "../Firebase/initializeAuthentication";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initalizeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })

  };

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

  return { user, error, auth, isLoading, setIsLoading, signInWithEmail, signInWithGoogle, createUserwithEmailandPassword, logOut };

}

export default useFirebase;