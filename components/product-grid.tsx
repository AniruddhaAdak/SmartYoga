"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "SmartMat Pro",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=800&auto=format&fit=crop&q=60",
    description: "Advanced pressure sensors with real-time feedback",
    features: ["Pressure sensing", "Pose guidance", "Mobile app integration"],
  },
  {
    id: 2,
    name: "YogaTracker Band",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format&fit=crop&q=60",
    description: "Wearable device for pose tracking and guidance",
    features: ["Heart rate monitoring", "Pose detection", "Breathing guidance"],
  },
  {
    id: 3,
    name: "Meditation Headband",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    description: "EEG sensors for enhanced meditation sessions",
    features: ["Brain activity monitoring", "Guided meditation", "Sleep tracking"],
  },
  {
    id: 4,
    name: "SmartMat Lite",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&auto=format&fit=crop&q=60",
    description: "Essential features for beginners",
    features: ["Basic pose detection", "Mobile app integration", "Portable design"],
  },
];

export function ProductGrid() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {product.name}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  • {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <Button className="group">
                <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Add to Cart
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}