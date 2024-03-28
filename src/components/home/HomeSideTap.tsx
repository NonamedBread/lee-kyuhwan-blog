// src/components/HomeSideTap.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeTag from './HomeTag';

import { Tooltip } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

interface Props {
  sideTap: boolean;
  isHeaderVisible: boolean;
}

export default function HomeSideTap({ isHeaderVisible, sideTap }: Props) {
  const series = useSelector((state: any) => state.data.filteredSeries);
  const animationClass = sideTap ? 'slide-in-horizontal' : 'slide-out-horizontal';
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});

  console.log('dropdownOpen:', dropdownOpen);

  const toggleDropdown = (seriesName: string) => {
    setDropdownOpen((prevState) => ({ ...prevState, [seriesName]: !prevState[seriesName] }));
  };

  const handleTagClick = (tagName: string) => {
    // TODO: Implement search functionality here
    console.log(`Searching posts with tag: ${tagName}`);
  };

  console.log('series:', series);

  const borderClasses = `border-b-2 border-r-2 border-t-2`;
  const roundedClasses = `rounded-b-lg rounded-r-lg rounded-t-lg`;
  // TODO: 시리즈 클릭시 해당 시리즈의 포스트들을 보여주는 기능 구현, 슬라이드 인/아웃 애니메이션 구현, 토글 버튼 구현

  return (
    <div
      className={`${animationClass} fixed left-0 top-0 z-50  ${isHeaderVisible ? '' : 'mt-[10vh]'} h-screen w-[18dvw]  transition-all duration-300 ease-in-out `}
    >
      <div
        className={` flex h-full flex-col items-center gap-4 ${roundedClasses} ${borderClasses} border-gray-300 bg-slate-100 p-6 dark:bg-customGreay-900  `}
      >
        <div className="flex w-full flex-col gap-1 ">
          <div className="flex items-center">
            <TagIcon className="text-2xl" />
            <h1 className="text-2xl font-bold">시리즈</h1>
          </div>
          <div className="w-full border-b-2  border-gray-300"></div>
        </div>
        {series.map((seriesItem: any) => (
          <div className="flex w-full flex-col gap-2" key={seriesItem.seriesName}>
            <div key={seriesItem.seriesName} style={{ cursor: 'pointer' }} onClick={() => toggleDropdown(seriesItem.seriesName)}>
              <h2 className="text-xl font-bold">{seriesItem.seriesName}</h2>
            </div>
            {dropdownOpen[seriesItem.seriesName] &&
              seriesItem.posts.map((post: { title: string; slug: string }) => (
                <div key={post.title} className="" style={{ cursor: 'pointer' }}>
                  <Tooltip title={post.title} placement="top">
                    <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base">{post.title}</h3>
                  </Tooltip>
                </div>
              ))}
            <div className="w-full border-b-2  border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
