import React, { FC } from "react";
import { ResetButton } from "../ResetButton";
import { MessagesArea } from "./MessagesArea";
import classes from "./widget.module.scss";
import { WidgetForm } from "./WidgetForm";

const Widget: FC = () => {
  return (
    <>
      <ResetButton />
      <div className={classes.widget}>
        <MessagesArea />
        <WidgetForm />
      </div>
    </>
  );
};

export default Widget;
