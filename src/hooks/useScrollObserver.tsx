import { useState, useEffect, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import layout from '@/modules/layout';

export const useScrollObserver = (fixed: boolean, headerRef: RefObject<HTMLElement>) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsHeaderVisible(entry.isIntersecting), { threshold: 0.1 });

    const currentRef = headerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(currentScrollPos < scrollPos);
      setScrollPos(currentScrollPos);
      dispatch(layout.actions.setSideTap(fixed || false));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, fixed, scrollPos]);


  return isHeaderVisible;
};
