import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
=======

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import LawyerConnectPage from "./pages/LawyerConnectPage";
import DashboardPage from "./pages/DashboardPage";
<<<<<<< HEAD
import LawyerVerificationPage from "./pages/LawyerVerificationPage";
import LegalAgreementsPage from "./pages/LegalAgreementsPage";
=======

import FrameworksPage, {
  FrameworkDetailPage,
} from "./pages/FrameworksPage";

>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
import AppLayout from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* App routes with sidebar */}
          <Route element={<AppLayout />}>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/lawyers" element={<LawyerConnectPage />} />
            <Route path="/agreements" element={<LegalAgreementsPage />} />
            <Route path="/verify-lawyer" element={<LawyerVerificationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
=======

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route element={<AppLayout />}>
            <Route path="/chat" element={<ChatPage />} />

            <Route
              path="/lawyers"
              element={<LawyerConnectPage />}
            />

            <Route
              path="/frameworks"
              element={<FrameworksPage />}
            />

            <Route
              path="/frameworks/:slug"
              element={<FrameworkDetailPage />}
            />

            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
