import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate, getPost, posts } from "@/content/blog";
import { BlogCard } from "@/components/site/BlogCard";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Animal Park Veterinary Surgery` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: Article,
});

function ArticleNotFound() {
  return (
    <section className="container-80 pb-24 pt-48">
      <h1 className="text-4xl font-bold">Article not found</h1>
      <Link to="/blog" className="btn btn-primary mt-8">Back to blog</Link>
    </section>
  );
}

function Article() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <article className="pb-20 pt-36 lg:pt-48">
        <div className="container-80">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-primary"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="eyebrow">{post.category} · <time dateTime={post.date} className="text-muted-foreground">{formatDate(post.date)}</time></p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">{post.title}</h1>
            <p className="mt-5 text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
          <img src={post.image} alt={post.imageAlt} width={1200} height={800} className="mx-auto mt-10 aspect-[2/1] w-full max-w-5xl rounded-md object-cover" />
          <div className="prose-article mx-auto mt-12 max-w-3xl">
            {post.body.map((b, i) => (
              <div key={i}>
                {b.heading && <h2>{b.heading}</h2>}
                {b.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </div>
            ))}
            <div className="mt-12 border-l-2 border-primary bg-mist p-6">
              <p className="!mb-4 font-semibold">This article is general information, not a diagnosis. Concerned about your pet?</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/" hash="ask" className="btn btn-primary">Ask a Vet</Link>
                <Link to="/" hash="book" className="btn btn-outline">Request Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      {more.length > 0 && (
        <section className="border-t border-border bg-mist py-20">
          <div className="container-80">
            <h2 className="text-3xl font-bold">More pet advice</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">{more.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
