import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { login, logout } from "../store/reducers/auth";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState<object | null>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setCurrentUser(user);
        dispatch(login(user));
      } else {
        setCurrentUser(null);
        dispatch(logout());
      }
      setLoading(false);
    });
  }, []);

  return {
    currentUser,
    loading,
  };
};
