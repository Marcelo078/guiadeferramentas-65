import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Laptop, GraduationCap, Gamepad, Briefcase, Star, ArrowRight, ExternalLink, ShoppingCart, TrendingUp, Cpu, HardDrive, Monitor } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Notebooks = () => {
  const categories = [
    {
      title: "Notebooks para Estudantes",
      description: "Notebooks com excelente custo-benefício para estudos, pesquisas e trabalhos acadêmicos. Leves, duráveis e com boa autonomia de bateria.",
      icon: GraduationCap,
      href: "/notebooks/estudantes",
      products: "50+ modelos analisados",
      priceRange: "R$ 1.500 - R$ 3.500",
      affiliate: "https://amzn.to/3JSf16E",
      color: "text-blue-600",
      specs: ["Intel i3/i5", "8GB RAM", "SSD 256GB", "Tela 14-15\""],
      featured: [
        "Lenovo IdeaPad 3i",
        "ASUS VivoBook 15",
        "Acer Aspire 5"
      ]
    },
    {
      title: "Notebooks Gamer",
      description: "Notebooks poderosos para jogos, streaming e criação de conteúdo. Placas de vídeo dedicadas e processadores de alta performance.",
      icon: Gamepad,
      href: "/notebooks/gamer",
      products: "40+ modelos analisados",
      priceRange: "R$ 3.500 - R$ 12.000",
      affiliate: "https://amzn.to/3JSf16E",
      color: "text-red-600",
      specs: ["Intel i5/i7", "16GB+ RAM", "RTX 3050+", "Tela 15-17\""],
      featured: [
        "ASUS TUF Gaming F15",
        "Acer Nitro 5",
        "Lenovo Legion 5"
      ]
    },
    {
      title: "Notebooks Profissionais",
      description: "Notebooks para trabalho corporativo, home office e produtividade. Foco em durabilidade, segurança e performance estável.",
      icon: Briefcase,
      href: "/notebooks/profissionais",
      products: "35+ modelos analisados",
      priceRange: "R$ 2.500 - R$ 8.000",
      affiliate: "https://amzn.to/3JSf16E",
      color: "text-green-600",
      specs: ["Intel i5/i7", "8-16GB RAM", "SSD 512GB", "Tela 14-15\""],
      featured: [
        "Dell Inspiron 15 3000",
        "HP Pavilion 14",
        "Lenovo ThinkPad E14"
      ]
    }
  ];

  const featuredNotebooks = [
    {
      title: "Melhor Notebook Custo-Benefício",
      description: "Análise completa dos notebooks que oferecem melhor relação preço x performance. Ideal para uso geral, estudos e trabalho leve.",
      specs: {
        processor: "Intel Core i5",
        ram: "8GB DDR4",
        storage: "SSD 256GB",
        screen: "15.6\" Full HD"
      },
      rating: 4.8,
      readTime: "10 min",
      category: "Custo-Benefício",
      href: "/notebooks/melhor-custo-beneficio",
      price: "R$ 2.200 - R$ 3.200",
      pros: ["Ótimo preço", "SSD rápido", "Tela Full HD"],
      cons: ["RAM limitada", "Sem placa dedicada"]
    },
    {
      title: "Notebook Gamer Intermediário",
      description: "O notebook gamer perfeito para quem quer rodar jogos atuais sem quebrar o orçamento. Performance garantida nos principais títulos.",
      specs: {
        processor: "Intel Core i5/i7",
        ram: "16GB DDR4",
        storage: "SSD 512GB",
        screen: "15.6\" 144Hz",
        gpu: "RTX 3060"
      },
      rating: 4.9,
      readTime: "15 min",
      category: "Gaming",
      href: "/notebooks/gamer-intermediario",
      price: "R$ 4.500 - R$ 6.500",
      pros: ["Placa dedicada", "Tela 144Hz", "16GB RAM"],
      cons: ["Bateria limitada", "Peso elevado"]
    },
    {
      title: "Notebook para Home Office",
      description: "Notebook ideal para trabalho remoto com webcam HD, microfone de qualidade e teclado confortável. Produtividade garantida.",
      specs: {
        processor: "Intel Core i5",
        ram: "8GB DDR4", 
        storage: "SSD 512GB",
        screen: "14\" Full HD"
      },
      rating: 4.7,
      readTime: "8 min",
      category: "Profissional",
      href: "/notebooks/home-office",
      price: "R$ 2.800 - R$ 4.200",
      pros: ["Webcam HD", "Bateria longa", "Portabilidade"],
      cons: ["Performance limitada", "Tela pequena"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <Laptop className="w-4 h-4 mr-1" />
            Guia Completo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Guia Definitivo de Notebooks
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Reviews detalhados, comparativos e guias de compra para você escolher o notebook perfeito. 
            Do básico ao profissional, cobrimos todas as necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <TrendingUp className="mr-2 h-5 w-5" />
              Notebooks Populares
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Ofertas
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notebooks por Categoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre o notebook ideal para suas necessidades específicas com nossos guias especializados
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="relative group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {category.products}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {category.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-primary mb-3">
                    {category.priceRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Especificações típicas:</p>
                      {category.specs.map((spec, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground">• {spec}</p>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Modelos em destaque:</p>
                      {category.featured.map((model, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground">• {model}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={category.href}>
                        Ver Guia
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <EnhancedButton variant="amazon" size="sm" asChild>
                      <a href={category.affiliate} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </EnhancedButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reviews Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Análises completas dos melhores notebooks em cada categoria
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNotebooks.map((notebook) => (
              <Card key={notebook.title} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-accent/10 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Laptop className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Review Técnico</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {notebook.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {notebook.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{notebook.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {notebook.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-primary mb-3">
                    {notebook.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Cpu className="h-3 w-3" />
                        <span>{notebook.specs.processor}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HardDrive className="h-3 w-3" />
                        <span>{notebook.specs.ram}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HardDrive className="h-3 w-3" />
                        <span>{notebook.specs.storage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Monitor className="h-3 w-3" />
                        <span>{notebook.specs.screen}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-medium text-green-600 mb-1">Prós:</p>
                        {notebook.pros.map((pro, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground">✓ {pro}</p>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-red-600 mb-1">Contras:</p>
                        {notebook.cons.map((con, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground">✗ {con}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>⏱️ {notebook.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={notebook.href}>
                        Ler Review
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <EnhancedButton variant="amazon" size="sm" asChild>
                      <a href="https://amzn.to/3JSf16E" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </EnhancedButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Escolher Seu Notebook
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guia prático para não errar na compra do seu próximo notebook
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Processador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Intel i3 para tarefas básicas, i5 para uso geral, i7+ para alta performance
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <HardDrive className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Memória RAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  8GB para uso básico, 16GB+ para jogos e tarefas pesadas
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <HardDrive className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Armazenamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SSD obrigatório para velocidade. 256GB mínimo, 512GB+ recomendado
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Tela</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  14" para portabilidade, 15.6" para conforto, Full HD mínimo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encontre o Notebook Perfeito
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pare de perder tempo comparando especificações. Nossos guias fazem todo o trabalho por você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/3JSf16E" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <EnhancedButton size="lg" variant="mercadolivre" asChild>
              <a href="https://mercadolivre.com/sec/2ufrhjF" target="_blank" rel="noopener noreferrer">
                Mercado Livre
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notebooks;