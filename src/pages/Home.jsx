import React from 'react';

// Mock data to visualize the layout before building the backend
const mockBlogs = [
  {
    id: 1,
    title: "Mastering React and Tailwind",
    excerpt: "Learn how to build beautiful interfaces quickly with utility-first CSS and modern React components.",
    author: "Mike",
    date: "Sep 25, 2026"
  },
  {
    id: 2,
    title: "Why Full Stack is the Future",
    excerpt: "Understanding both frontend and backend development gives you a unique edge in problem-solving.",
    author: "Sarah",
    date: "Sep 22, 2026"
  },
  {
    id: 3,
    title: "The Power of Vite",
    excerpt: "Say goodbye to slow compilation times and hello to instant server starts with this modern build tool.",
    author: "Alex",
    date: "Sep 20, 2026"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
          Welcome to MyBlog
        </h1>
        <p className="text-xl text-gray-600">
          Discover the latest thoughts, ideas, and technical insights.
        </p>
        <p className="bg-gray-100 font-serif text-gray-900">
          A simple place to write , share and read blog posts. Sign up to get started by publishing your own, or log in if you already have an account.
        </p>
      </header>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogs.map((blog) => (
          <article 
            key={blog.id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
              {blog.title}
            </h2>
            <div className="text-sm text-gray-500 mb-4 font-medium">
              {blog.date} • By {blog.author}
            </div>
            <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
              {blog.excerpt}
            </p>
            <button className="self-start text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Read More &rarr;
            </button>
          </article>
        ))}
      </main>
    </div>
  );
}