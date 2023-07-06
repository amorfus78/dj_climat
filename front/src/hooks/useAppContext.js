import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createApi } from "@/services/api";
import { useCookies } from "react-cookie";
import { signUpService } from "@/services/signUpService";
import { signInService } from "@/services/signInService";

export const AppContextProvider = (props) => {
  const { ...otherProps } = props;
  const [session, setSession] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  const api = createApi({ jwt: cookies.session });

  const args = { api };
  const signUp = signUpService(args);
  const signIn = signInService({ api, setCookie });

  return (
    <AppContext.Provider
      {...otherProps}
      value={{
        actions: {
          signUp,
          signIn,
        },
      }}
    />
  );
};

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export default useAppContext;
