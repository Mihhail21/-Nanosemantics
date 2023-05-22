import { memo } from "react";
import { useMessages } from "../../helpers/useContextMessage";
import classes from "./reset.module.scss";

export const ResetButton = memo(() => {
  const { setMessages } = useMessages();

  const resetDialog = () => {
    localStorage.clear();
    setMessages([]);
    window.location.reload();
  };

  return (
    <button onClick={resetDialog} className={classes.reset}>
      Restart dialog
    </button>
  );
});
