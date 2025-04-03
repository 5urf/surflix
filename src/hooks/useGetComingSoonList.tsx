import { useQuery } from "@tanstack/react-query";
import { fetchComingSoon } from "movieAPI";

const useGetComingSoonList = () => {
  return useQuery({
    queryKey: ["comingSoonList"],
    queryFn: fetchComingSoon,
  });
};

export default useGetComingSoonList;
