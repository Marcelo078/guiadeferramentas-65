import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Calendar, 
  Thermometer, 
  Clock, 
  Shuffle, 
  Timer,
  ArrowRight,
  Wrench
} from "lucide-react";

const ToolsPage = () => {
  const tools = [
    {
      title: "Calendário Brasileiro",
      description: "Calendário completo com feriados nacionais brasileiros. Navegue pelos meses e veja as datas importantes destacadas. Ideal para planejamento anual.",
      icon: Calendar,
      href: "/ferramentas/calendario",
      color: "text-blue-600",
      seoDescription: "Calendário brasileiro com todos os feriados nacionais. Ferramenta gratuita para planejamento anual e consulta de datas importantes."
    },
    {
      title: "Calculadora Online",
      description: "Calculadora simples e rápida para seus cálculos do dia a dia. Funciona diretamente no navegador sem necessidade de download ou instalação.",
      icon: Calculator,
      href: "/ferramentas/calculadora",
      color: "text-green-600",
      seoDescription: "Calculadora online gratuita. Faça cálculos básicos rapidamente no navegador. Ferramenta simples e eficiente para uso diário."
    },
    {
      title: "Conversor de Unidades",
      description: "Converta facilmente entre diferentes unidades de medida: temperatura (Celsius, Fahrenheit), comprimento (metros, pés), peso (kg, libras) e muito mais.",
      icon: Thermometer,
      href: "/ferramentas/conversor",
      color: "text-orange-600",
      seoDescription: "Conversor de unidades online. Converta temperatura, comprimento, peso e outras medidas. Ferramenta essencial para estudos e trabalho."
    },
    {
      title: "Sorteador de Números",
      description: "Sorteie números aleatórios online de forma rápida e confiável. Ideal para sorteios, jogos, escolhas aleatórias e decisões imparciais.",
      icon: Shuffle,
      href: "/ferramentas/sorteador",
      color: "text-purple-600",
      seoDescription: "Sorteador de números online gratuito. Gere números aleatórios para sorteios, jogos e decisões. Ferramenta confiável e imparcial."
    },
    {
      title: "Cronômetro e Timer",
      description: "Cronômetro preciso e temporizador online. Meça tempo com precisão, defina alarmes e use para exercícios, estudos ou trabalho.",
      icon: Timer,
      href: "/ferramentas/cronometro",
      color: "text-red-600",
      seoDescription: "Cronômetro e temporizador online. Ferramenta precisa para medir tempo, ideal para exercícios, estudos e produtividade."
    },
    {
      title: "Relógio Mundial",
      description: "Consulte horários de diferentes fusos horários ao redor do mundo. Perfeito para reuniões internacionais e coordenação global.",
      icon: Clock,
      href: "/ferramentas/relogio-mundial",
      color: "text-indigo-600",
      seoDescription: "Relógio mundial online. Consulte horários de diferentes países e fusos horários. Ideal para negócios e comunicação internacional."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ferramentas Online Gratuitas
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Acesse nossas ferramentas online gratuitas para facilitar seu dia a dia.
            Tudo funciona direto no navegador, sem downloads ou cadastros.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.href} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg bg-muted ${tool.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base leading-relaxed">
                      {tool.description}
                    </CardDescription>
                    
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>SEO:</strong> {tool.seoDescription}
                      </p>
                    </div>

                    <Button variant="cta" size="lg" asChild className="w-full">
                      <Link to={tool.href}>
                        Usar Ferramenta
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Usar Nossas Ferramentas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvidas pensando na praticidade e eficiência do usuário brasileiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full bg-success text-success-foreground w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Gratuitas</h3>
              <p className="text-muted-foreground">
                Todas as ferramentas são completamente gratuitas, sem cadastro ou limitações.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 rounded-full bg-primary text-primary-foreground w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápidas e Precisas</h3>
              <p className="text-muted-foreground">
                Resultados instantâneos com alta precisão em todos os cálculos e conversões.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 rounded-full bg-warning text-warning-foreground w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sempre Atualizadas</h3>
              <p className="text-muted-foreground">
                Mantemos nossas ferramentas sempre atualizadas com as informações mais recentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-success text-success-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Economize Tempo com Nossas Ferramentas
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Facilite seu dia a dia com ferramentas práticas e confiáveis. 
            Tudo desenvolvido pensando na sua produtividade.
          </p>
          <Button size="lg" variant="outline" asChild className="text-success-foreground border-success-foreground hover:bg-success-foreground hover:text-success">
            <Link to="/reviews">
              Ver Também Nossos Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;