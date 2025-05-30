interface SunIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function SunIcon(props: Readonly<SunIconProps>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_26_2051)">
        <path
          d="M11 1.83334V3.66667M11 18.3333V20.1667M3.66671 11H1.83337M5.78798 5.78794L4.49162 4.49158M16.2121 5.78794L17.5085 4.49158M5.78798 16.2158L4.49162 17.5122M16.2121 16.2158L17.5085 17.5122M20.1667 11H18.3334M15.5834 11C15.5834 13.5313 13.5313 15.5833 11 15.5833C8.46874 15.5833 6.41671 13.5313 6.41671 11C6.41671 8.4687 8.46874 6.41667 11 6.41667C13.5313 6.41667 15.5834 8.4687 15.5834 11Z"
          stroke="currentColor"
          strokeWidth="1.98"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_2051">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
