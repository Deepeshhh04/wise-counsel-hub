import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import LawyerConnectPage from "./pages/LawyerConnectPage";
import DashboardPage from "./pages/DashboardPage";
<<<<<<< HEAD
import FrameworksPage, { FrameworkDetailPage } from "./pages/FrameworksPage";
=======

import FrameworksPage, {
  FrameworkDetailPage,
} from "./pages/FrameworksPage";

>>>>>>> 221aad9 (Legal agreement added)
import AppLayout from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          {/* App Routes With Sidebar */}
          <Route element={<AppLayout />}>
            <Route path="/chat" element={<ChatPage />} />

            <Route path="/lawyers" element={<LawyerConnectPage />} />
<<<<<<< HEAD
            <Route path="/frameworks" element={<FrameworksPage />} />
            <Route path="/frameworks/:slug" element={<FrameworkDetailPage />} />
=======

            <Route path="/frameworks" element={<FrameworksPage />} />

            <Route
              path="/frameworks/:slug"
              element={<FrameworkDetailPage />}
            />

>>>>>>> 221aad9 (Legal agreement added)
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;