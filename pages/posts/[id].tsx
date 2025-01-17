"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../src/Components/Navbar/Navbar";
import CategoryMenu from "../../src/Components/HomeComponents/CategoryMenu/CategoryMenu";
import Perks from "../../src/Components/HomeComponents/Perks/Perks";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query; // Get post ID from URL
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");

        const json = await res.json();
        setPost(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <Navbar />
      <CategoryMenu category={undefined} />

      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={post.images[0]}
              alt={post.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
  <div className="w-100 text-wrap" style={{ wordBreak: "break-word" }}>
    <h1 className="display-4">{post.title}</h1>
    <p className="lead text-muted">{post.description}</p>
  </div>
</div>

        </div>
      </div>

      <Perks />
    </>
  );
}
