import { IMessage } from "../interface";

export const API_CONNECTION_STRING =
  "https://biz.nanosemantics.ru/api/bat/nkd/json/Chat";
export const UUID = "772c9859-4dd3-4a0d-b87d-d76b9f43cfa4";
export const SAY_HELLO_EVENT = "00b2fcbe-f27f-437b-a0d5-91072d840ed3";

export const updateStorage = (newArray: IMessage[]) => {
  localStorage.setItem("messages", JSON.stringify(newArray));
};
