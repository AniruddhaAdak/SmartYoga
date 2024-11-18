import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
          <div className="relative z-10 rounded-2xl bg-white p-12 shadow-lg dark:bg-gray-800">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have questions about our smart yoga products? We're here to help.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex gap-x-4">
                <dt>
                  <MapPin className="h-7 w-7 text-gray-400" />
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  <p>123 Yoga Street</p>
                  <p>San Francisco, CA 94105</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <Phone className="h-7 w-7 text-gray-400" />
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  <p>+1 (555) 123-4567</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <Mail className="h-7 w-7 text-gray-400" />
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  <p>support@smartyoga.com</p>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}