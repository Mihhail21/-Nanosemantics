import { FC, memo } from "react";
import { useWidgetForm } from "./useWidgetForm";
import classes from "./widgetForm.module.scss";

export const WidgetForm: FC = memo(() => {
  const { sendMessage, loading, value, changeHandler } = useWidgetForm();

  return (
    <form onSubmit={sendMessage} className={classes.widgetForm}>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        className={classes.widgetInput}
        placeholder="Напишите первое сообщение "
      />
      <button disabled={loading} type="submit">
        отправить
      </button>
    </form>
  );
});
