"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By {post.author}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}