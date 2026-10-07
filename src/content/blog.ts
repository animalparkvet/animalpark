import vaccines from "@/assets/blog-vaccines.jpg";
import nutrition from "@/assets/blog-nutrition.jpg";
import safety from "@/assets/blog-safety.jpg";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  excerpt: string;
  image: string;
  imageAlt: string;
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

/** Add new articles to this list. Newest first. */
export const posts: Post[] = [
  {
    slug: "first-vet-visit-for-a-new-puppy",
    title: "Your new puppy's first vet visit: what to expect",
    category: "Vaccinations",
    date: "2026-09-22",
    excerpt: "Bringing a puppy home is exciting. Here's how an early check-up and vaccination plan help them start life healthy.",
    image: vaccines,
    imageAlt: "Woman cuddling a young puppy on a veranda",
    body: [
      { paragraphs: ["A first visit to the vet is a chance for your puppy to be examined, for you to ask questions, and for a vaccination and parasite-control plan to be discussed for your pet's age and lifestyle."] },
      { heading: "What to bring", list: ["Any previous health or vaccination records from the breeder or shelter", "A note of what your puppy is eating", "Questions about behaviour, toilet training or feeding", "A lead or a secure carrier"] },
      { heading: "Vaccinations", paragraphs: ["Puppies usually need a series of vaccinations in their first months. Your vet will advise which vaccines are recommended and when, based on your puppy's health and local risks. Until the course is complete, ask your vet when it is safe for your puppy to mix with other dogs."] },
      { heading: "Ask us", paragraphs: ["Every puppy is different. If you're unsure about anything, send us an Ask a Vet enquiry and we'll be glad to help."] },
    ],
  },
  {
    slug: "feeding-your-cat-well",
    title: "Feeding your cat well: simple everyday habits",
    category: "Nutrition",
    date: "2026-09-08",
    excerpt: "Fresh water, a consistent routine and the right portions go a long way. A few practical feeding habits for cat owners.",
    image: nutrition,
    imageAlt: "Tabby cat eating from a bowl next to a water bowl",
    body: [
      { paragraphs: ["Good nutrition supports your cat's energy, coat and overall health. Small daily habits make a real difference."] },
      { heading: "Everyday habits", list: ["Keep fresh, clean water available at all times", "Feed a complete food suited to your cat's life stage", "Measure portions rather than guessing", "Introduce any new food gradually over several days", "Avoid feeding foods that are unsafe for cats, such as onions, garlic and chocolate"] },
      { heading: "When to check in", paragraphs: ["Changes in appetite, drinking more than usual, vomiting or weight changes are worth discussing with a vet. If you notice something different, contact us."] },
    ],
  },
  {
    slug: "keeping-dogs-safe-in-the-heat",
    title: "Keeping your dog safe in hot weather",
    category: "Pet Safety",
    date: "2026-08-25",
    excerpt: "Harare's warm months can be hard on dogs. Practical ways to keep walks safe and your dog comfortable.",
    image: safety,
    imageAlt: "Man walking his dog in the shade of jacaranda trees",
    body: [
      { paragraphs: ["Dogs can overheat more quickly than people expect, especially flat-faced breeds, older dogs and dogs with thick coats."] },
      { heading: "Practical tips", list: ["Walk in the early morning or evening", "Choose shaded routes and avoid hot tar", "Carry water for your dog on walks", "Never leave a dog in a parked car", "Make sure there is shade and water at home"] },
      { heading: "Warning signs", paragraphs: ["Heavy panting, drooling, weakness, vomiting or collapse can be signs of heat stress. This is an emergency. Cool your dog gently and contact a vet immediately."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
