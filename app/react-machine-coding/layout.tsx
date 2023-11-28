import Sidebar from "@/components/Sidebar";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex w-4/5 ">{children}</div>
    </div>
  );
}
