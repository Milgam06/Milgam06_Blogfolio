import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, browserSessionPersistence, setPersistence } from 'firebase/auth';

import { auth } from '@/apis';
import { useGlobalStore } from '@/store/useGlobalStore';
import { useCallback } from 'react';

export const useLogin = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const { setIsLoggedIn } = useGlobalStore();

  const handleValidateUser = useCallback(
    (loginUid: string) => {
      if (loginUid === import.meta.env.VITE_WHOAMI_GOOGLE) {
        setIsLoggedIn(true);
      }
      return;
    },
    [setIsLoggedIn]
  );

  const handleWhoAmI = useCallback(async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const loginUser = await signInWithPopup(auth, provider);
      handleValidateUser(loginUser.user.uid);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }, [handleValidateUser, navigate, provider]);
  return { handleWhoAmI, handleValidateUser };
};
