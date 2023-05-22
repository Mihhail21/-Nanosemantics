import { FC, memo, useMemo } from "react";
import { useMessages } from "../../../helpers/useContextMessage";
import { Message } from "./message";
import classes from "./messages.module.scss";

export const MessagesArea: FC = memo(() => {
  const { messages } = useMessages();
  const reversed = useMemo(() => [...messages].reverse(), [messages]);

  return (
    <div className={classes.area}>
      {reversed && reversed.length
        ? reversed.map((message) => {
            return <Message key={message.id} {...message} />;
          })
        : null}
    </div>
  );
});
