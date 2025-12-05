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
import Calendar from "./components/tools/Calendar";
import UnitConverter from "./components/tools/UnitConverter";
import Sorteador from "./components/tools/Sorteador";
import Cronometro from "./components/tools/Cronometro";
import RelogioMundial from "./components/tools/RelogioMundial";
import Reviews from "./pages/Reviews";
import Notebooks from "./pages/Notebooks";
import NotFound from "./pages/NotFound";
import FerramentasEletricas from "./pages/reviews/FerramentasEletricas";
import Eletrodomesticos from "./pages/reviews/Eletrodomesticos";
import FerramentasManuais from "./pages/reviews/FerramentasManuais";
import NotebooksEstudantes from "./pages/notebooks/Estudantes";
import NotebooksGamer from "./pages/notebooks/Gamer";
import NotebooksProfissionais from "./pages/notebooks/Profissionais";

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
              <Route path="/ferramentas/calendario" element={<Calendar />} />
              <Route path="/ferramentas/conversor" element={<UnitConverter />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/ferramentas-eletricas" element={<FerramentasEletricas />} />
              <Route path="/notebooks" element={<Notebooks />} />
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
