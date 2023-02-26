import { sendGet, sendPost } from "./axios";

export const getListProduct = (params: any) => sendGet("/product", params);
export const getByIdProduct = (id: number) => sendGet(`/product/${id}`);
export const createProduct = (payload: any) =>
  sendPost("/product/create", payload);
