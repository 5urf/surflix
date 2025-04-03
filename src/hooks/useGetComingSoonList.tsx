import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchComingSoon } from "movieAPI";

const useGetComingSoonList = () => {
  return useQuery({
    queryKey: ["comingSoonList"],
    queryFn: fetchComingSoon,
    placeholderData: keepPreviousData,
  });
};

export default useGetComingSoonList;
