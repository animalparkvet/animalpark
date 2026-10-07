import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/content/blog";
import { BlogCard } from "@/components/site/BlogCard";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Pet Advice Blog | Animal Park Veterinary Surgery" },
      { name: "description", content: "Practical pet health, nutrition and safety advice from Animal Park Veterinary Surgery in Harare." },
      { property: "og:title", content: "Pet Advice Blog | Animal Park Veterinary Surgery" },
      { property: "og:description", content: "Practical pet health, nutrition and safety advice for pet owners in Harare." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="pb-24 pt-36 lg:pt-48">
      <div className="container-80">
        <p className="eyebrow">Pet advice</p>
        <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-tight lg:text-6xl">Blog</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">General guidance for pet owners. For advice about your own pet, please ask one of our vets.</p>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}
