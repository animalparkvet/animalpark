import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatDate, type Post } from "@/content/blog";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block overflow-hidden rounded-md">
        <img src={post.image} alt={post.imageAlt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </Link>
      <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        <span>{post.category}</span>
        <span className="h-px w-6 bg-border" />
        <time dateTime={post.date} className="text-muted-foreground">{formatDate(post.date)}</time>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug">
        <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">{post.title}</Link>
      </h3>
      <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-primary">
        Read more <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
