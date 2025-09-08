import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, ExternalLink, Zap, ShoppingCart, CheckCircle, XCircle, Battery, Settings, Shield } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const FerramentasEletricas = () => {
  const featuredProducts = [
    {
      title: "Furadeira de Impacto Bosch GSB 13 RE",
      description: "Furadeira robusta ideal para trabalhos domésticos e profissionais. Motor de 650W com função impacto para trabalhar em alvenaria.",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      price: "R$ 249,90",
      originalPrice: "R$ 329,90",
      category: "Furadeira",
      specs: ["650W de potência", "Mandril de 13mm", "Função impacto", "Velocidade variável"],
      pros: ["Excelente custo-benefício", "Robusta e durável", "Boa potência", "Marca confiável"],
      cons: ["Cabo um pouco curto", "Ruído elevado"],
      affiliate: "https://amzn.to/46oITAh",
      inStock: true
    },
    {
      title: "Parafusadeira Black+Decker 12V",
      description: "Parafusadeira sem fio compacta e leve, perfeita para montagens e trabalhos de precisão. Bateria de lítio com boa durabilidade.",
      image: "/api/placeholder/300/200", 
      rating: 4.6,
      price: "R$ 129,90",
      originalPrice: "R$ 179,90",
      category: "Parafusadeira",
      specs: ["12V Bateria Lítio", "Mandril 10mm", "18 posições torque", "LED integrado"],
      pros: ["Muito leve", "Bateria dura bem", "LED útil", "Preço acessível"],
      cons: ["Potência limitada para trabalhos pesados", "Carregador lento"],
      affiliate: "https://amzn.to/46oITAh",
      inStock: true
    },
    {
      title: "Serra Circular Makita 5017RG",
      description: "Serra circular profissional com motor de 1200W. Ideal para cortes precisos em madeira, compensado e materiais similares.",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      price: "R$ 389,90", 
      originalPrice: "R$ 459,90",
      category: "Serra",
      specs: ["1200W de potência", "Disco 165mm", "Base em alumínio", "Guia laser"],
      pros: ["Corte muito preciso", "Motor potente", "Base estável", "Guia laser útil"],
      cons: ["Preço mais elevado", "Pesada para uso prolongado"],
      affiliate: "https://amzn.to/46oITAh",
      inStock: true
    }
  ];

  const categories = [
    {
      name: "Furadeiras",
      description: "Furadeiras de impacto e convencionais para todos os tipos de trabalho",
      icon: Settings,
      count: "25+ produtos"
    },
    {
      name: "Parafusadeiras",
      description: "Parafusadeiras com e sem fio para montagens e fixações",
      icon: Settings,
      count: "18+ produtos"
    },
    {
      name: "Serras",
      description: "Serras circulares, tico-tico e sabre para cortes precisos",
      icon: Settings,
      count: "15+ produtos"
    },
    {
      name: "Esmerilhadeiras",
      description: "Esmerilhadeiras angulares para corte e desbaste",
      icon: Settings,
      count: "12+ produtos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <Zap className="w-4 h-4 mr-1" />
            Ferramentas Elétricas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Melhores Ferramentas Elétricas
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Reviews detalhados das ferramentas elétricas mais confiáveis do mercado brasileiro. 
            Testadas e aprovadas por profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comparar Preços
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Categorias de Ferramentas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <category.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ferramentas em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seleção das melhores ferramentas elétricas com base em testes práticos, 
              durabilidade e feedback de usuários
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.title} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-accent/10 rounded-t-lg flex items-center justify-center relative">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  {product.inStock && (
                    <Badge className="absolute top-2 right-2 text-xs bg-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Em Estoque
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Specs */}
                    <div>
                      <p className="text-sm font-medium mb-2">Especificações:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {product.specs.map((spec, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-center">
                            <Settings className="h-3 w-3 mr-1" />
                            {spec}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pros and Cons */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-medium text-green-600 mb-1">Prós:</p>
                        {product.pros.slice(0, 2).map((pro, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-start">
                            <CheckCircle className="h-3 w-3 mr-1 text-green-600 flex-shrink-0 mt-0.5" />
                            {pro}
                          </p>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-red-600 mb-1">Contras:</p>
                        {product.cons.slice(0, 2).map((con, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-start">
                            <XCircle className="h-3 w-3 mr-1 text-red-600 flex-shrink-0 mt-0.5" />
                            {con}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Review Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <EnhancedButton variant="amazon" size="sm" asChild>
                      <a href={product.affiliate} target="_blank" rel="noopener noreferrer">
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Guia de Compra: Como Escolher Ferramentas Elétricas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <Battery className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-xl">Potência e Alimentação</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Ferramentas com fio: maior potência constante</li>
                    <li>• Sem fio: mais mobilidade, verifique voltagem da bateria</li>
                    <li>• Para uso profissional: prefira modelos com fio</li>
                    <li>• Para uso doméstico: sem fio 12V-18V é suficiente</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-xl">Segurança e Qualidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Verifique se possui certificação INMETRO</li>
                    <li>• Marcas conhecidas oferecem melhor suporte</li>
                    <li>• Empunhadura ergonômica reduz fadiga</li>
                    <li>• Sistemas de segurança como trava do gatilho</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold mb-4">Por que Confiar em Nossos Reviews?</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe testa cada ferramenta em condições reais de uso, simulando tanto trabalhos 
                domésticos quanto profissionais. Avaliamos durabilidade, facilidade de uso, precisão 
                e custo-benefício antes de fazer nossas recomendações.
              </p>
              <p className="text-muted-foreground mb-6">
                Todos os produtos recomendados passaram por pelo menos 30 dias de testes práticos, 
                garantindo que nossa avaliação seja baseada em experiência real, não apenas em 
                especificações técnicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encontre Sua Ferramenta Ideal
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Não perca tempo com ferramentas de baixa qualidade. 
            Invista em equipamentos testados e aprovados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Todas as Ofertas
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/reviews">
                Outros Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FerramentasEletricas;