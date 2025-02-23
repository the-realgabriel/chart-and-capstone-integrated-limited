import { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      elementRef.current.style.opacity = '0';
      elementRef.current.style.transform = 'translateY(30px)';
      elementRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};
