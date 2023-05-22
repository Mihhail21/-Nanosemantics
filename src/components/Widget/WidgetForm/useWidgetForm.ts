import { useCallback, useState } from "react";
import { API_CONNECTION_STRING, updateStorage, UUID } from "../../../constants";
import { useMessages } from "../../../helpers/useContextMessage";
import { IMessage, IRequestApiData } from "src/interface";

export const useWidgetForm = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { setMessages} = useMessages();
  

  const sendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!value) return;
      try {
        setLoading(true);
        const userMessage: IMessage = {
          id: Date.now(),
          from: "user",
          text: value,
        };

        setMessages((p) => {
          updateStorage([...p, userMessage]);
          return [...p, userMessage];
        });
        setValue("");
        const res = await fetch(`${API_CONNECTION_STRING}.request`, {
          method: "POST",
          body: JSON.stringify({
            uuid: UUID,
            cuid: localStorage.getItem("cuid"),
            text: value,
          }),
        });
        const data: IRequestApiData = await res.json();
        const botMessage: IMessage = {
          id: Date.now(),
          from: "bot",
          text: data.result.text.value,
        };
        setMessages((p) => {
          updateStorage([...p, botMessage]);
          return [...p, botMessage];
        });
      } catch (e) {
        if (e.message) {
          console.log(e.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [value]
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    loading,
    sendMessage,
    changeHandler,
  };
};
