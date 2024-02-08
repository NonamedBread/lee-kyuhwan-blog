import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PostDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
          .then((res) => res.json())
          .then((data) => setPost(data));
      };

      fetchPost();
    }
  }, [slug]);

  console.log(post);

  return <div className="flex min-h-screen flex-col items-center justify-center">{slug}</div>;
}
