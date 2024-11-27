import axiosInstance from "@/lib/axios";
import { FollowerInfo } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export default function useFollowerInfo(
  userId: string,
  initialState: FollowerInfo,
) {
  const query = useQuery<FollowerInfo>({
    queryKey: ["follower-info", userId],
    queryFn: () => axiosInstance.get(`/api/users/${userId}/followers`),
    initialData: initialState,
    staleTime: Infinity,
  });

  return query;
}
