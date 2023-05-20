import { useEffect, useRef, useState } from 'react';

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
        { rootMargin: '-60px' },
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.querySelectorAll<Element>('[data-child]').forEach((block) => {
        block.classList.add('slideIn');
      });
    }
  }, [isIntersecting]);

  return { ref };
};

export default useElementOnScreen;
