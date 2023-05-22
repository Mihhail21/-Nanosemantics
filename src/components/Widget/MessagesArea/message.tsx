import { FC } from "react";
import { IMessage } from "src/interface";
import classes from "./messages.module.scss";
import cn from "classnames";

export const Message: FC<IMessage> = ({ text, from }) => {
  return (
    <div
      className={cn(
        classes.messageWrapper,
        from === "bot" ? classes.messageWrapperBot : classes.messageWrapperUser
      )}
    >
      <div className={classes.name}>{from}</div>
      <div
        className={
          from === "bot"
            ? classes.messageContentBot
            : classes.messageContentUser
        }
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
