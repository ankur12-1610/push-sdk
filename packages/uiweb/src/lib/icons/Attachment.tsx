import React from 'react';

interface IAttachmentIconProps {
  color?: string;
}

export const AttachmentIcon: React.FC<IAttachmentIconProps> = ({ color = "#494D5F" }) => {
  return (
    <svg
      width="23"
      height="27"
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9927 7.38877L5.58023 18.1723C5.23551 18.5598 5.0503 19.0675 5.06293 19.5902C5.07557 20.113 5.28509 20.6108 5.64811 20.9805C6.01114 21.3503 6.49986 21.5637 7.0131 21.5765C7.52634 21.5894 8.02478 21.4008 8.40523 21.0497L20.8177 8.22905C21.5072 7.45406 21.8776 6.43872 21.8523 5.39323C21.8271 4.34775 21.408 3.3522 20.682 2.6127C19.9559 1.87321 18.9785 1.44641 17.952 1.42067C16.9255 1.39493 15.9286 1.77222 15.1677 2.47442L2.75523 15.295C1.63138 16.4397 1 17.9922 1 19.611C1 21.2298 1.63138 22.7823 2.75523 23.927C3.87908 25.0716 5.40336 25.7147 6.99273 25.7147C8.5821 25.7147 10.1064 25.0716 11.2302 23.927L21.4927 13.4999"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};