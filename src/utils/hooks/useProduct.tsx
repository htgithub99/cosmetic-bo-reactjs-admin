import axios from "axios";
import { useQuery } from "react-query";

export default function useProduct(enabled = true) {
  const {
    data: productData,
    refetch: refetchProductData,
    isLoading,
  } = useQuery(
    ["GET_FAKE_DATA"],
    async () => {
      const response = await axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",
        headers: {
          Accept: "application/json, text/plain",
        },
      });
      return response?.data?.results;
    },
    {
      enabled,
    }
  );

  return { productData, refetchProductData, isLoading };
}
