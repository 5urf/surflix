import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPopular } from "../service/api";

const useGetPopularList = () => {
  return useQuery({
    queryKey: ["popularList"],
    queryFn: fetchPopular,
    placeholderData: keepPreviousData,
  });
};

export default useGetPopularList;
