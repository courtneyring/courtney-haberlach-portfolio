'use client';

import { useEffect, useRef } from 'react';
import styles from './Section.module.scss';


export default function Section({ section, content, children }) {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   // gsap.context scopes cleanup to this component's animations only
  //   const ctx = gsap.context(() => {
  //     gsap.to(containerRef.current, {
  //       backgroundPosition: `${section.backgroundPosX}% ${section.backgroundPosY + 12}%`,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'top bottom-=40%',
  //         scrub: true,
  //       },
  //     });
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, [section.backgroundPosX, section.backgroundPosY]);

  const style = {
    backgroundColor: section.backgroundColor,
    backgroundPosition: `${section.backgroundPosX}% ${section.backgroundPosY - 12}%`,
  };

  if (section.backgroundImage) {
    style.backgroundImage = `url('/work/${content.id}/${section.backgroundImage}')`;
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${section.backgroundImage ? 'background' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
