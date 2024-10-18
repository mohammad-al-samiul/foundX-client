import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthService";

const UserContext = createContext<IUserProviderProps | undefined>(undefined);

interface IUserProviderProps {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState(false);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };
  useEffect(() => {
    handleUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider Context!");
  }

  return context;
};
