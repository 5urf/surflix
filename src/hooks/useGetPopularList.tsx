import { useQuery } from "@tanstack/react-query";
import { fetchPopular } from "movieAPI";

const useGetPopularList = () => {
  return useQuery({
    queryKey: ["popularList"],
    queryFn: fetchPopular,
  });
};

export default useGetPopularList;
