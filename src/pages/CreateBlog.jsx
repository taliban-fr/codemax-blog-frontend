import React from 'react';

export default function CreateBlog() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create a New Post</h1>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
            <input 
              type="text" 
              id="title" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none" 
              placeholder="Enter an engaging title" 
              required
            />
          </div>
          
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
            <textarea 
              id="excerpt" 
              rows="2" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none" 
              placeholder="A short summary of your post..."
              required
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
            <textarea 
              id="content" 
              rows="10" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none" 
              placeholder="Write your full blog post here..."
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Save Draft
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}