import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Phone className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Mon-Fri from 8am to 5pm
            </p>
            <p className="mt-2 text-green-600">+1 (555) 123-4567</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Mail className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              We'll respond within 24 hours
            </p>
            <p className="mt-2 text-green-600">support@planthub.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <MapPin className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Come say hello
            </p>
            <p className="mt-2 text-green-600">123 Plant Street, Garden City</p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};