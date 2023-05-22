
import { useCallback, useEffect, useState } from "react";
import { IMessage, InitApiData, IRequestApiData } from "src/interface";
import {
  API_CONNECTION_STRING,
  SAY_HELLO_EVENT as euid,
  updateStorage,
  UUID as uuid,
} from "../constants";


interface IUseInit  {
  loading: boolean;
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
};

export const useInit: () => IUseInit = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>(
    JSON.parse(`${localStorage.getItem("messages")}`) ?? []
  );

  const sayHello = useCallback(async () => {
    try {
      const res = await fetch(`${API_CONNECTION_STRING}.event`, {
        method: "POST",
        body: JSON.stringify({
          uuid,
          cuid: localStorage.getItem("cuid"),
          euid,
        }),
      });
      const data: IRequestApiData = await res.json();
      const newMessage: IMessage = {
        id: Date.now(),
        text: data.result.text.value,
        from: "bot",
      };

      updateStorage([...messages, newMessage]);

      setMessages((p) => [...p, newMessage]);
    } catch (e) {
      console.log(e.message);
    }
  }, [messages]);

useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      const initApp = async () => {
        const cuid = localStorage.getItem("cuid") ?? "";
        try {
          setLoading(true);
          const res = await fetch(`${API_CONNECTION_STRING}.init`, {
            method: "POST",
            body: JSON.stringify({
              uuid,
              cuid,
            }),
          });

          const data: InitApiData = await res.json();
          // if the cuid has changed, we change it
          if (cuid !== data.result.cuid)
            localStorage.setItem("cuid", data.result.cuid);

          setLoading(false);

          if (messages.length === 0) await sayHello();
        } catch (e) {
          console.log(e.message);
          setLoading(false);
        }
      };
      initApp();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return {
    loading,
    messages,
    setMessages,
  };
};
