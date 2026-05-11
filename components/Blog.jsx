"use client";

import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-96 py-16 text-center w-full flex items-center justify-center flex-col bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <h1 className="title_text font-bold text-4xl text-green-400">Blog Section</h1>
      <p className="py-8 font-semibold text-gray-300">Coming Soon!!!</p>
    </div>
  );
};

export default Blog;
