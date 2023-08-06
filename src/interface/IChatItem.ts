export interface IChatList {
   response: IChatItem[]
}

export interface IChatItem {
   id: string,
   created_at: number,
   title: string,
   avatar: string,
   private: true,
   last_message: IChatLastMessage,
   users: IChatUser[],
   count_unread: number
}

export interface IChatUser {
   id: string,
   name: string,
   surname: string,
   avatar: string
}

export interface IChatLastMessage {
   created_at: number,
   user_id: string,
   user_name: string,
   user_surname: string,
   you: true,
   message: string
}

