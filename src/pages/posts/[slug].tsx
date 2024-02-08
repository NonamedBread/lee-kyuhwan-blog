import { useRouter } from 'next/router';

export default function PostDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <div className="flex min-h-screen flex-col items-center justify-center">{slug}</div>;
}
