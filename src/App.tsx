import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";
import ToolsPage from "./pages/ToolsPage";
import Calculator from "./components/tools/Calculator";
import Calendar2025 from "./components/tools/Calendar2025";
import UnitConverter from "./components/tools/UnitConverter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/parceiros" element={<Parceiros />} />
              <Route path="/ferramentas" element={<ToolsPage />} />
              <Route path="/ferramentas/calculadora" element={<Calculator />} />
              <Route path="/ferramentas/calendario-2025" element={<Calendar2025 />} />
              <Route path="/ferramentas/conversor" element={<UnitConverter />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
