interface IResultApi {
  cuid: string;
  text: {
    delay: number;
    showRate: boolean;
    value: string;
  };
}

export interface IMessage {
  id: number;
  text: string;
  from: "bot" | "user";
}

export interface IRequestApiData {
  result: IResultApi;
  id: string;
}

export interface InitApiData extends Omit<IRequestApiData, "result"> {
  result: Omit<IResultApi, "text">;
}
