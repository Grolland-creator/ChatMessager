import axios, { AxiosResponse } from "axios";
import { URLS, baseUrl } from "../constants/urls";
import { IChatList } from "../interface/IChatItem";

export default class ChatService {
   static async getChatList(limit: number = 10): Promise<AxiosResponse<IChatList>> {
      return axios.get<IChatList>(`${baseUrl}${URLS.LIST}`, {
         params: {
            _limit: limit,
         },
         headers: {
            version: '0.0'
         }
      })
   }
}