
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import FoodSecurity from "./pages/FoodSecurity";
import EconomicEmpowerment from "./pages/EconomicEmpowerment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Report from "./pages/Reports";
import Medium from "./pages/Medium";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/Reports" element={<Report />} />
          <Route path="/about" element={<About />} />
          <Route path="/Medium" element={<Medium />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/food-security" element={<FoodSecurity />} />
          <Route path="/economic-empowerment" element={<EconomicEmpowerment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
