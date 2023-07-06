import "@/styles/globals.css";

import { AppContextProvider } from "@/hooks/useAppContext";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
};

export default App;
