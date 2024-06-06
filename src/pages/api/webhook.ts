import { NextApiRequest, NextApiResponse } from 'next';
import { getPostsGroupedBySeries } from '@/lib/postUtils';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Webhook invoked'); // 웹훅 호출 로그

  if (req.method === 'POST') {
    const signature = req.headers['x-hub-signature'];
    const payload = JSON.stringify(req.body);

    const secret = process.env.WEBHOOK_SECRET;
    console.log('secret:', secret);

    if (!secret) {
      console.log('WEBHOOK_SECRET is not defined'); // 시크릿 미정의 로그
      return res.status(500).json({ message: 'WEBHOOK_SECRET is not defined' });
    }

    const hmac = crypto.createHmac('sha1', secret);
    const digest = 'sha1=' + hmac.update(payload).digest('hex');

    // 시그니처 검증
    if (signature !== digest) {
      console.log('Invalid signature'); // 시그니처 검증 실패 로그
      return res.status(403).json({ message: 'Invalid signature' });
    }

    try {
      // 게시물 데이터를 가져오는 함수 호출
      const allSeries = await getPostsGroupedBySeries();

      console.log('Revalidating');

      return res.status(200).json({ message: 'Success', series: allSeries });
    } catch (error) {
      console.log('Error revalidating:', error); // 데이터 가져오기 오류 로그
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Error revalidating', error: error.message });
      } else {
        // error가 Error 객체가 아닌 경우의 처리
      }
    }
  } else {
    console.log('Method Not Allowed'); // 허용되지 않은 메서드 로그
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
