import React from 'react';

type MaterialIconProps = {
  iconName: string;
  size?: number;
  style?: string;
};

const materialIcon: React.FC<MaterialIconProps> = ({
  iconName,
  size,
  style,
}) => {
  return (
    <span
      className={'material-icons-outlined ' + style}
      style={{ fontSize: `${size}px` }}
    >
      {iconName}
    </span>
  );
};

export default materialIcon;
