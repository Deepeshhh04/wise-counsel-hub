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
import LawyerVerificationPage from "./pages/LawyerVerificationPage";
import LegalAgreementsPage from "./pages/LegalAgreementsPage";

import FrameworksPage, {
  FrameworkDetailPage,
} from "./pages/FrameworksPage";

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
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Routes with sidebar layout */}
          <Route element={<AppLayout />}>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/lawyers" element={<LawyerConnectPage />} />
            <Route path="/agreements" element={<LegalAgreementsPage />} />
            <Route
              path="/verify-lawyer"
              element={<LawyerVerificationPage />}
            />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/frameworks" element={<FrameworksPage />} />
            <Route
              path="/frameworks/:slug"
              element={<FrameworkDetailPage />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;