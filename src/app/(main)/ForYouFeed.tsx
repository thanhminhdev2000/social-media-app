"use client";

import Post from "@/components/posts/Post";
import axiosInstance from "@/lib/axios";
import { PostData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ForYouFeed() {
  const { data, status } = useQuery<PostData[]>({
    queryKey: ["post-feed", "for-you"],
    queryFn: () => axiosInstance.get("/api/posts/for-you"),
  });

  if (status === "pending") {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (status === "error") {
    return (
      <p className="text-center text-destructive">
        An error occurred while loading posts.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
