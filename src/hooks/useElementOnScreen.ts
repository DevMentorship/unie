import { useEffect, useRef, useState } from 'react';

import styles from '@/components/Advantages/Advantages.module.css';

const useElementOnScreen = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: '-30px' },
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.querySelectorAll<Element>('[data-block]').forEach((block) => {
        block.classList.add(styles.slideIn);
      });
    }
  }, [isIntersecting]);

  return { ref };
};

export default useElementOnScreen;
