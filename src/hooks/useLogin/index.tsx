import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

import { auth } from "@/apis";
import { useGlobalStore } from "@/store/useGlobalStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const { setIsLogedIn } = useGlobalStore();

  const handleValidateUser = (loginUid: string) => {
    if (loginUid === import.meta.env.VITE_WHOAMI_GOOGLE) {
      setIsLogedIn(true);
    }
    return;
  };

  const handleWhoAmI = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const loginUser = await signInWithPopup(auth, provider);
      handleValidateUser(loginUser.user.uid);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleWhoAmI, handleValidateUser };
};
