import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
  sideTap: boolean;
  isHeaderVisible: boolean;
}

export default function HomeSideTap({ isHeaderVisible, sideTap }: Props) {
  const animationClass = sideTap ? 'slide-in-horizontal' : 'slide-out-horizontal';

  return (
    <div
      className={`${animationClass} fixed left-0 top-0 z-50 ${isHeaderVisible ? '' : 'mt-[10vh]'} h-screen w-[20dvw]  transition-all duration-300 ease-in-out `}
    >
      <div
        className={` flex h-full flex-col items-center justify-center rounded-lg  bg-slate-200  shadow-lg dark:border-r-2 dark:border-t-2 dark:bg-customGreay-800 `}
      >
        sideTap
      </div>
    </div>
  );
}
