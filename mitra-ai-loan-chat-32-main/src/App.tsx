
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeLoans from "./pages/HomeLoans";
import BusinessLoans from "./pages/BusinessLoans";
import PersonalLoans from "./pages/PersonalLoans";
import LoanConsolidation from "./pages/LoanConsolidation";
import LoanSettlement from "./pages/LoanSettlement";
import CibilScore from "./pages/CibilScore";
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
          <Route path="/home-loans" element={<HomeLoans />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
          <Route path="/loan-consolidation" element={<LoanConsolidation />} />
          <Route path="/loan-settlement" element={<LoanSettlement />} />
          <Route path="/cibil-score" element={<CibilScore />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
