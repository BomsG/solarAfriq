import AdminSidebar from './_components/AdminSideBar';
import AdminHeader from './_components/AdminHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminSidebar />
      <AdminHeader />
      {children}
    </div>
  );
}
