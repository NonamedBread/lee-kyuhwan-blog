import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HomeFooter() {
  return (
    <footer className="flex h-24 w-full ">
      <div className="flex w-full items-center justify-between p-5">
        <Link href={'/'} className="hidden cursor-pointer md:block">
          <h1 className="text-4xl font-bold">{'</ Lee`s Devlog >'}</h1>
        </Link>
        <div className="ml-auto gap-4">
          <Link href={'https://github.com/NonamedBread'} passHref>
            <GitHubIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
