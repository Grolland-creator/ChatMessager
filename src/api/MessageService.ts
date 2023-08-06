import axios, { AxiosResponse } from "axios";
import { URLS, baseUrl } from "../constants/urls";
import { IMessageList } from "../interface/IMessage";

export default class MessageService {
   static async getMessageListByChatId(id: string, limit: number = 10): Promise<AxiosResponse<IMessageList>> {
      return axios.get<IMessageList>(`${baseUrl}${URLS.MESSAGES}`, {
         params: {
            _limit: limit,
            chat_id: id
         },
         headers: {
            version: '0.0'
         }
      })
   }
}