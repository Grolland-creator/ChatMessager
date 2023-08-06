export interface IMessageList {
   response: IMessageItem[]
}

export interface IMessageItem {
   id: string,
   created_at: number,
   user: IMessageUser,
   message: string,
   is_new: true
}

export interface IMessageUser {
   id: string,
   name: string,
   surname: string,
   avatar: string,
   you: true
}