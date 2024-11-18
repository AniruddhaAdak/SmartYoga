import { BlogCard } from "@/components/blog-card";

const posts = [
  {
    id: 1,
    title: "The Future of Smart Yoga Practice",
    excerpt: "Discover how technology is revolutionizing traditional yoga practice...",
    date: "2024-03-15",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format",
    category: "Technology",
  },
  {
    id: 2,
    title: "Benefits of Real-time Pose Feedback",
    excerpt: "Learn how instant feedback can improve your yoga practice...",
    date: "2024-03-10",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=800&auto=format",
    category: "Practice",
  },
  {
    id: 3,
    title: "Meditation and Technology",
    excerpt: "Exploring the intersection of ancient wisdom and modern tech...",
    date: "2024-03-05",
    author: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format",
    category: "Wellness",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Insights, tips, and news from the world of smart yoga
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}