'use client';

import { useState } from 'react';

import styles from './Video.module.scss';

export default function Video({ contentId, filename, embed, placeholder }) {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  return (
    <div className={`${styles.media} container`}>
      {filename ? (
        <>
          {/* {!videoIsPlaying && (
            <img
              src={playIcon.src ?? playIcon}
              className={styles.play}
              alt="play"
            />
          )} */}
          <video
            width="600"
            height="600"
            controls
            poster={`/work/${contentId}/${placeholder}`}
            onPlay={() => setVideoIsPlaying(true)}
          >
            <source src={`/work/${contentId}/${filename}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <div
          className={styles.embed}
          dangerouslySetInnerHTML={{ __html: embed }}
        />
      )}
    </div>
  );
}
