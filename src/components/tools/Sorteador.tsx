import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shuffle, RefreshCw, Copy, Check } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useToast } from "@/hooks/use-toast";

const Sorteador = () => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const sortear = () => {
    if (minValue >= maxValue) {
      toast({
        title: "Erro",
        description: "O valor mínimo deve ser menor que o valor máximo",
        variant: "destructive"
      });
      return;
    }

    const range = maxValue - minValue + 1;
    if (quantity > range) {
      toast({
        title: "Erro", 
        description: "A quantidade de números não pode ser maior que o intervalo disponível",
        variant: "destructive"
      });
      return;
    }

    setIsAnimating(true);
    
    setTimeout(() => {
      const newResults: number[] = [];
      const available = Array.from({ length: range }, (_, i) => minValue + i);
      
      for (let i = 0; i < quantity; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        newResults.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }
      
      setResults(newResults.sort((a, b) => a - b));
      setIsAnimating(false);
    }, 800);
  };

  const copyResults = () => {
    navigator.clipboard.writeText(results.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copiado!",
      description: "Números copiados para a área de transferência"
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Shuffle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Ferramenta Online</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sorteador de Números Online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sorteie números aleatórios de forma rápida e fácil. Ideal para rifas, jogos, sorteios e muito mais.
          </p>
        </div>

        {/* Main Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shuffle className="h-5 w-5" />
              Configurar Sorteio
            </CardTitle>
            <CardDescription>
              Defina o intervalo de números e a quantidade a ser sorteada
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min">Valor Mínimo</Label>
                <Input
                  id="min"
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(parseInt(e.target.value) || 0)}
                  className="text-center text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max">Valor Máximo</Label>
                <Input
                  id="max"
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(parseInt(e.target.value) || 0)}
                  className="text-center text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qty">Quantidade</Label>
                <Input
                  id="qty"
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="text-center text-lg"
                />
              </div>
            </div>

            <Button 
              onClick={sortear} 
              className="w-full" 
              size="lg"
              disabled={isAnimating}
            >
              {isAnimating ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Shuffle className="mr-2 h-5 w-5" />
              )}
              {isAnimating ? "Sorteando..." : "Sortear Números"}
            </Button>

            {/* Results */}
            {results.length > 0 && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-3">Números Sorteados:</p>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {results.map((num, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg"
                    >
                      {num}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={copyResults}>
                  {copied ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  {copied ? "Copiado!" : "Copiar Números"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Como Usar o Sorteador Online</h2>
          <p className="text-muted-foreground mb-4">
            Nosso sorteador de números online é uma ferramenta gratuita e fácil de usar para gerar números 
            aleatórios. Basta definir o intervalo mínimo e máximo, escolher quantos números deseja sortear, 
            e clicar no botão "Sortear". Os resultados são gerados de forma completamente aleatória usando 
            algoritmos de geração de números pseudoaleatórios confiáveis.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Aplicações do Sorteador</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Rifas e sorteios:</strong> Sorteie vencedores de forma justa e transparente</li>
            <li><strong>Jogos de loteria:</strong> Gere combinações para suas apostas</li>
            <li><strong>Decisões aleatórias:</strong> Deixe a sorte decidir por você</li>
            <li><strong>Educação:</strong> Ideal para aulas de matemática e probabilidade</li>
            <li><strong>Sorteio de times:</strong> Divida grupos de forma aleatória</li>
          </ul>
        </div>

        {/* Affiliate CTA */}
        <Card className="mt-8 bg-gradient-hero text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold mb-2">Precisa de Mais Ferramentas?</h3>
            <p className="opacity-90 mb-4">
              Confira calculadoras científicas e organizadores na Amazon
            </p>
            <EnhancedButton variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver na Amazon
              </a>
            </EnhancedButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sorteador;
