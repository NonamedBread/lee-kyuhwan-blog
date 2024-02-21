import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getPostData } from '@/lib/postUtils';

export default function PostDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // TODO : detail page 구현

  return <div className="flex min-h-screen flex-col items-center justify-center">{slug}</div>;
}
