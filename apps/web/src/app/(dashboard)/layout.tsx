interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: Readonly<DashboardLayoutProps>) {
  const { children } = props;

  return (
    <div className="w-full flex justify-center">{children}</div>
  );
}
