import PostEditor from "@/components/posts/editor/PostEditor";
import TrendSidebar from "@/components/TrendsSidebar";
import ForYouFeed from "./ForYouFeed";

export default async function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <ForYouFeed />
      </div>
      <TrendSidebar />
    </main>
  );
}
