import React from 'react';
import Skeleton from 'srcRoot/components/Skeleton';

const skeletonData = [1, 2, 3, 4, 5, 6];
const SkeletonDay = () => {
  return (
    <Skeleton
      width={120}
      height={160}
      style={{ margin: '0px 6px', background: 'var(--neutral-700)' }}
      variant="rectangular"
    />
  );
};

export default React.memo(SkeletonDay);
export { skeletonData };
