import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            About SmartYoga
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Transforming traditional yoga practice with innovative technology
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1920&q=80"
                alt="Yoga practice"
                width={1920}
                height={1080}
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We believe that technology can enhance the ancient practice of yoga,
              making it more accessible and effective for practitioners of all levels.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <Award className="h-8 w-8 text-primary-600 dark:text-primary-300" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Excellence
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We strive for excellence in every product we create.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <Users className="h-8 w-8 text-primary-600 dark:text-primary-300" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Community
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Building a global community of mindful practitioners.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <Heart className="h-8 w-8 text-primary-600 dark:text-primary-300" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Wellness
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Promoting holistic wellness through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}