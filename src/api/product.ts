import { sendDelete, sendGet, sendPost, sendPut } from "./axios";

export const getListProduct = (params: any) => sendGet("/product", params);
export const getByIdProduct = (id: number) => sendGet(`/product/${id}`);
export const createProduct = (payload: any) =>
  sendPost("/product/create", payload);
export const updateProduct = (id: number, payload: any) =>
  sendPut(`/product/update/${id}`, payload);
export const deleteProduct = (id: number) =>
  sendDelete(`/product/delete/${id}`);
