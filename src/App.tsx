import { FC } from "react";
import Widget from "./components/Widget";
import { MessageContext } from "./helpers/useContextMessage";
import { useInit } from "./helpers/useInit";
import "./styles/index.scss";

const App: FC = () => {
  const { loading, messages, setMessages } = useInit();
  return (
    <div className="app">
      <MessageContext.Provider value={{ messages, setMessages }}>
        {loading ? <div style={{ fontSize: 20 }}>Loading...</div> : <Widget />}
      </MessageContext.Provider>
    </div>
  );
};

export default App;
