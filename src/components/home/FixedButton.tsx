import { useEffect, useState, useMemo, RefObject } from 'react';
import { useDispatch } from 'react-redux';

import layout from '@/modules/layout';

import { IconButton, iconButtonClasses } from '@mui/material';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

interface ButtonProps {
  fixed: boolean;
  isHeaderVisible: boolean;
  targetRef: RefObject<HTMLDivElement>;
}

const IconButtonClassName =
  'rounded-full bg-customGreay-200 shadow-2xl hover:bg-customGreay-300 dark:bg-customGreay-700 dark:text-gray-200 dark:shadow-2xl';

export default function FixedButton({ fixed, isHeaderVisible, targetRef }: ButtonProps) {
  const dispatch = useDispatch();

  const handleFixedButtonClik = () => {
    dispatch(layout.actions.toggleFixedButton());
  };
  const handleTopbuttonClik = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-20 right-11 z-50 transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col items-center gap-6">
        <IconButton className={`${IconButtonClassName}  ${isHeaderVisible ? 'button-shrink' : 'button-grow'}`} onClick={handleFixedButtonClik}>
          {fixed ? <PushPinIcon className="text-4xl" /> : <PushPinOutlinedIcon className="text-4xl" />}
        </IconButton>
        <IconButton className={`${IconButtonClassName}  ${isHeaderVisible ? 'button-shrink' : 'button-grow'}`} onClick={handleTopbuttonClik}>
          <VerticalAlignTopIcon className="text-4xl" />
        </IconButton>
      </div>
    </div>
  );
}
