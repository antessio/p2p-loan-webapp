import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12 justify-center">{children}</div> */}
      <div className="grid flex-1 items-start justify-center gap-4 sm:px-6 sm:py-0 md:gap-8 p-6 md:p-12">
        {children}
      </div>
    </div>
  );
}