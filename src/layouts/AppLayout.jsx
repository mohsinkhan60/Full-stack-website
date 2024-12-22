import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-2 md:px-4 lg:px-8 xl:px-16">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made By Mohsin Khan
      </div>
    </div>
  );
};
export default AppLayout;
