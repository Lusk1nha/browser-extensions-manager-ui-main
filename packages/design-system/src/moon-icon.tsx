interface MoonIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function MoonIcon(props: Readonly<MoonIconProps>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_26_2050)">
        <path
          d="M20.1253 11.8769C18.8631 14.0909 16.4809 15.5836 13.75 15.5836C9.69995 15.5836 6.41671 12.3004 6.41671 8.2503C6.41671 5.51921 7.90966 3.13682 10.124 1.87473C5.47231 2.31578 1.83337 6.23297 1.83337 11.0001C1.83337 16.0627 5.93743 20.1667 11 20.1667C15.7669 20.1667 19.6839 16.5282 20.1253 11.8769Z"
          stroke="currentColor"
          strokeWidth="1.98"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_2050">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
