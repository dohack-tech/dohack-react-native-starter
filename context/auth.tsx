import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../config/api";

export const MIN_PASSWORD_LENGTH = 6;
// Set this to true to require remembered users to enter their password.
const ALWAYS_REQUIRE_LOGIN = true;

export type User = {
  name: string;
  email: string;
  token: string;
};

const AuthContext = createContext<{
  signIn: (user: User) => void;
  signOut: () => void;
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
} | null>(null);

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem("@user", JSON.stringify(user));
  } catch (e) {
    // saving error
  }
};

const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem("@user");
  } catch (e) {
    // delete error
  }
};

export const loadUser = async (): Promise<User | null> => {
  try {
    const storedUser = await AsyncStorage.getItem("@user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (e) {
    // saving error
  }
  return null;
};

export function AuthProvider({
  children,
  userPromise,
}: {
  children: ReactNode;
  userPromise: Promise<User | null>;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    userPromise.then(async (user) => {
      if (user) {
        api.setHeader("x-authorization", user.token);
        setUser(user);
        setIsLoggedIn(!ALWAYS_REQUIRE_LOGIN);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: (user: User) => {
          api.setHeader("x-authorization", user.token);
          setUser(user);
          setIsLoggedIn(true);
          storeUser(user);
        },
        signOut: () => {
          api.deleteHeader("x-authorization");
          setUser(null);
          setIsLoggedIn(false);
          deleteUser();
        },
        user,
        isLoggedIn,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
