import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "@/apis";
import { useGlobalStore } from "@/store/useGlobalStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const { setIsLogedIn } = useGlobalStore();

  const handleValidateUser = (loginUid: string) => {
    if (loginUid === import.meta.env.VITE_WHOAMI_GOOGLE) {
      setIsLogedIn(true);
      navigate("/");
    } else {
      alert("아니시잖아요.");
      return;
    }
    return;
  };

  const handleWhoAmI = async () => {
    try {
      const loginUser = await signInWithPopup(auth, provider);
      handleValidateUser(loginUser.user.uid);
    } catch (error) {
      console.log(error);
    }
  };
  return { handleWhoAmI };
};
