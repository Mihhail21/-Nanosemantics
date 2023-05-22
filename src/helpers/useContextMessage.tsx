import { createContext, useContext } from "react";
import { IMessage } from "src/interface";

interface IMessageContext {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export const MessageContext = createContext<IMessageContext>({
  setMessages: (p) => p,
  messages: [],
});

export const useMessages = () => {
  const { messages, setMessages } = useContext(MessageContext);

  return {
    messages,
    setMessages,
  };
};
