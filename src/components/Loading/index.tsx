import React from 'react';
import './style.scss';

interface Props {
  size?: number;
  className?: string;
  style?: object;
  color?: string;
  secondaryColor?: string;
  loadingWidth?: number;
  animeClass?: string;
  wrapStyle?: object;
}
function Loading({
  size = 32,
  className,
  style,
  color,
  secondaryColor,
  loadingWidth,
  animeClass,
  wrapStyle = {},
  ...props
}: Props) {
  return (
    <div className={'loading-wrap ' + animeClass} style={wrapStyle}>
      <div className="loading-background">
        <div
          className={'loading-v2 ' + (className || '')}
          style={{
            width: size + 'px',
            height: size + 'px',
            borderWidth: loadingWidth ? loadingWidth + 'px' : `calc(${size}px * 0.16)`,
            borderColor: secondaryColor || 'transparent',
            borderTopColor: color || '',
            ...style,
          }}
        />
      </div>
    </div>
  );
}

export default Loading;
