import Link from 'next/link';
import Image from 'next/image';

import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutMe() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <div className="flex w-full flex-row items-center justify-end space-x-4 p-2">
        <span>
          <Link href={'https://github.com/NonamedBread'} target="_blank" passHref>
            <GitHubIcon className="text-4xl" />
          </Link>
        </span>
        <span>
          <Link href={'https://www.linkedin.com/in/%EA%B7%9C%ED%99%98-%EC%9D%B4-422115240/'} target="_blank" passHref>
            <LinkedInIcon className="text-4xl" />
          </Link>
        </span>
        <span>
          <Tooltip title="lgh778923@gmail.com" placement="top" arrow>
            <Link href={'mailto:lgh778923@gmail.com'} passHref>
              <EmailIcon className="text-4xl" />
            </Link>
          </Tooltip>
        </span>
      </div>
      <div className="w-full border-b-2"></div>
      <div className="flex w-full flex-row gap-6 p-10">
        <div className="p-2">
          <Image src="/images/profile.jpeg" alt="/images/dummy_image.png" width={250} height={250} className="rounded-full" priority />
        </div>
        <div className="flex w-full flex-col  space-y-4">
          <p>
            안녕하세요! 저는 사용자에게 좀 더 나은 경험을 제공하기 위해 노력하며 제가 작성하고 있는 코드에 대해 항상 고민하고 개선하려는 개발자입니다.
          </p>
          <p>주로 React, Node.js, MongoDB, ElasticSearch를 사용하여 프로젝트를 진행하며, 현재는 Next.js, TypeScript 및 Node.js에 관심이 많습니다.</p>
          <p>
            요즘 고민하는 것은 프로젝트를 진행할 때 사용자 경험을 어떻게 개선할지에 대해 고민하고 있으며, 아키텍처를 어떻게 구성하여 유지 보수성과
            확장성을 높일지에 대해 항상 고민합니다.
          </p>
          <p>제 깃허브와 블로그를 통해 제가 공부한 내용과 경험을 공유하고 있습니다.</p>
          <p>궁금하신 점이나 문의사항이 있으시면 언제든지 연락주세요!</p>
        </div>
      </div>
    </div>
  );
}
