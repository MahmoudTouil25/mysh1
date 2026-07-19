'use client';

import { useState, useSyncExternalStore } from 'react';

const HERO_VIDEO_POSTER = '/loading.png';
const HERO_VIDEO_SRC = '/mysh-optimized.mp4';

function subscribeToReducedMotion(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', onStoreChange);

  return () => {
    mediaQuery.removeEventListener('change', onStoreChange);
  };
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') {
    return true;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}

export default function HeroVideoBackground() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = !prefersReducedMotion && !videoFailed;

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_VIDEO_POSTER}')` }}
      />

      {showVideo ? (
        <video
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_VIDEO_POSTER}
          onError={() => setVideoFailed(true)}
        >
          <source
            src={HERO_VIDEO_SRC}
            type="video/mp4"
            onError={() => setVideoFailed(true)}
          />
        </video>
      ) : null}
    </>
  );
}
