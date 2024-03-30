// src/components/HomeSideTap.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Tooltip, IconButton } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import Dropdown from '../common/Dropdown';

interface Props {
  sideTap: boolean;
  isHeaderVisible: boolean;
}

export default function HomeSideTap({ isHeaderVisible, sideTap }: Props) {
  const series = useSelector((state: any) => state.data.filteredSeries);
  const animationClass = sideTap ? 'slide-in-horizontal' : 'slide-out-horizontal';
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newDropdownOpen = series.reduce((acc: Record<string, boolean>, cur: any) => {
      acc[cur.seriesName] = true;
      return acc;
    }, {});

    setDropdownOpen(newDropdownOpen);
  }, [series]);

  const closeAllDropdowns = () => {
    const newDropdownOpen = Object.keys(dropdownOpen).reduce((acc: Record<string, boolean>, cur: string) => {
      acc[cur] = false;
      return acc;
    }, {});

    setDropdownOpen(newDropdownOpen);
  };

  const toggleDropdown = (seriesName: string) => {
    setDropdownOpen((prevState) => ({ ...prevState, [seriesName]: !prevState[seriesName] }));
  };

  const handleTagClick = (tagName: string) => {
    // TODO: Implement search functionality here
    console.log(`Searching posts with tag: ${tagName}`);
  };

  const borderClasses = `border-b-2 border-r-2 border-t-2`;
  const roundedClasses = `rounded-b-lg rounded-r-lg rounded-t-lg`;
  // TODO: 시리즈 클릭시 해당 시리즈의 포스트들을 보여주는 기능 구현
  return (
    <div
      className={`${animationClass} fixed left-0 top-0 z-50  ${isHeaderVisible ? '' : 'mt-[10dvh]'} h-screen w-[18dvw]  transition-all duration-300 ease-in-out `}
    >
      <div
        className={` flex h-full flex-col items-center gap-3 ${roundedClasses} ${borderClasses} border-gray-300 bg-slate-100 p-6 dark:bg-customGreay-900  `}
      >
        <div className="flex w-full flex-col gap-1 ">
          <div className="flex items-center p-1">
            <TagIcon className="text-2xl" />
            <h1 className="text-2xl font-bold">시리즈</h1>
            <IconButton onClick={closeAllDropdowns} className="ml-auto cursor-pointer" size="small">
              <IndeterminateCheckBoxOutlinedIcon />
            </IconButton>
          </div>
          <div className="w-full border-b-2  border-gray-300"></div>
        </div>
        {series.map((seriesItem: any) => (
          <>
            <Dropdown
              visibility={dropdownOpen[seriesItem.seriesName]}
              items={seriesItem}
              onTitleClickEvent={() => toggleDropdown(seriesItem.seriesName)}
            />
          </>
        ))}
      </div>
    </div>
  );
}
