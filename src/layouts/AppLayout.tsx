import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
<<<<<<< HEAD
import { AnimatePresence } from "framer-motion";

const AppLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col relative">
        <header className="h-14 flex items-center border-b bg-background/60 backdrop-blur-md px-4 sticky top-0 z-40">
          <SidebarTrigger className="hover:bg-primary/10 transition-colors" />
          <div className="ml-4 h-5 w-[1px] bg-border/50" />
          <div className="ml-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Platform
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
=======

const AppLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-12 flex items-center border-b bg-card px-2">
          <SidebarTrigger />
        </header>
        <main className="flex-1">
          <Outlet />
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default AppLayout;
