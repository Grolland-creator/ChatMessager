import axios from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const wrapper = (method: "post" | "get" | "put" | "delete", url: string, data?: any) => axios.request({method, url, data}).then(checkResponse).catch(catchError);
