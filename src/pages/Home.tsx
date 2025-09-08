import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Calendar, 
  Thermometer, 
  Clock, 
  Shuffle, 
  Timer,
  Wrench,
  Zap,
  Home as HomeIcon,
  Laptop,
  Star,
  TrendingUp,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Home = () => {
  const tools = [
    {
      title: "Calendário 2025",
      description: "Calendário completo com feriados nacionais brasileiros",
      icon: Calendar,
      href: "/ferramentas/calendario-2025",
      color: "text-blue-600"
    },
    {
      title: "Calculadora",
      description: "Calculadora online simples e rápida",
      icon: Calculator,
      href: "/ferramentas/calculadora",
      color: "text-green-600"
    },
    {
      title: "Conversor",
      description: "Converta unidades, moedas e temperaturas",
      icon: Thermometer,
      href: "/ferramentas/conversor",
      color: "text-orange-600"
    },
    {
      title: "Sorteador",
      description: "Sorteie números aleatórios online",
      icon: Shuffle,
      href: "/ferramentas/sorteador",
      color: "text-purple-600"
    },
    {
      title: "Cronômetro",
      description: "Cronômetro e temporizador online",
      icon: Timer,
      href: "/ferramentas/cronometro",
      color: "text-red-600"
    },
    {
      title: "Relógio Mundial",
      description: "Fusos horários do mundo todo",
      icon: Clock,
      href: "/ferramentas/relogio-mundial",
      color: "text-indigo-600"
    }
  ];

  const categories = [
    {
      title: "Ferramentas Elétricas",
      description: "Reviews detalhados das melhores furadeiras, serras e parafusadeiras",
      icon: Zap,
      href: "/reviews/ferramentas-eletricas",
      products: "150+ produtos analisados",
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      title: "Eletrodomésticos",
      description: "Guias completos de geladeiras, fogões e máquinas de lavar",
      icon: HomeIcon,
      href: "/reviews/eletrodomesticos",
      products: "200+ produtos analisados",
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      title: "Notebooks",
      description: "Reviews e comparativos dos melhores notebooks de 2025",
      icon: Laptop,
      href: "/notebooks",
      products: "100+ modelos analisados",
      affiliate: "https://amzn.to/3JSf16E"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portal Brasileiro 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ferramentas online gratuitas, reviews detalhados e guias de compra. 
            Tudo em português e focado no mercado brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" asChild>
              <Link to="/ferramentas">
                Explorar Ferramentas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/reviews" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Ver Reviews
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ferramentas Online */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ferramentas Online Gratuitas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesse nossas ferramentas online gratuitas para facilitar seu dia a dia.
              Tudo funciona direto no navegador, sem downloads.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.href} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted ${tool.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {tool.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={tool.href}>
                        Usar Ferramenta
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews e Guias */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reviews e Guias de Compra</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reviews detalhados e comparativos completos para ajudar você a escolher 
              os melhores produtos do mercado brasileiro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.href} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4 text-sm text-success font-medium">
                      <TrendingUp className="h-4 w-4" />
                      {category.products}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="default" size="sm" asChild>
                        <Link to={category.href}>
                          Ver Reviews
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="amazon" size="sm" asChild>
                        <a href={category.affiliate} target="_blank" rel="noopener noreferrer">
                          Ver na Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-success text-success-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Economize Tempo e Dinheiro
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Use nossas ferramentas gratuitas e leia nossos reviews detalhados 
            antes de fazer suas compras. Tudo pensado para o consumidor brasileiro.
          </p>
          <Button size="lg" variant="outline" asChild className="text-success-foreground border-success-foreground hover:bg-success-foreground hover:text-success">
            <Link to="/parceiros">
              Conheça Nossos Parceiros
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;