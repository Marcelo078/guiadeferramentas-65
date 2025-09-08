import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, HomeIcon, Wrench, Star, ArrowRight, ExternalLink, ShoppingCart, TrendingUp } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Reviews = () => {
  const categories = [
    {
      title: "Ferramentas Elétricas",
      description: "Reviews detalhados das melhores furadeiras, serras, parafusadeiras e ferramentas elétricas do mercado brasileiro",
      icon: Zap,
      href: "/reviews/ferramentas-eletricas",
      products: "150+ produtos analisados",
      rating: "4.8/5",
      affiliate: "https://amzn.to/46oITAh",
      color: "text-yellow-600",
      featured: [
        "Furadeira de Impacto Bosch GSB 13 RE",
        "Parafusadeira Black+Decker LD120",
        "Serra Circular Makita 5017RG"
      ]
    },
    {
      title: "Eletrodomésticos",
      description: "Guias completos de geladeiras, fogões, máquinas de lavar e todos os eletrodomésticos essenciais para sua casa",
      icon: HomeIcon,
      href: "/reviews/eletrodomesticos",
      products: "200+ produtos analisados",
      rating: "4.9/5",
      affiliate: "https://amzn.to/3VBYYfL",
      color: "text-blue-600",
      featured: [
        "Geladeira Brastemp BRE80AK",
        "Fogão Electrolux 4 Bocas",
        "Máquina de Lavar Consul CWL12AB"
      ]
    },
    {
      title: "Ferramentas Manuais",
      description: "Reviews de martelos, chaves, alicates e todas as ferramentas manuais indispensáveis para casa e trabalho",
      icon: Wrench,
      href: "/reviews/ferramentas-manuais",
      products: "100+ produtos analisados", 
      rating: "4.7/5",
      affiliate: "https://amzn.to/46oITAh",
      color: "text-green-600",
      featured: [
        "Kit Ferramentas Bosch X-Line",
        "Martelo Tramontina 25mm",
        "Alicate Universal Gedore"
      ]
    }
  ];

  const featuredReviews = [
    {
      title: "Melhor Furadeira de Impacto - Guia Completo",
      description: "Análise detalhada das 10 melhores furadeiras de impacto disponíveis no Brasil. Comparamos potência, durabilidade e custo-benefício.",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      readTime: "8 min",
      category: "Ferramentas Elétricas",
      href: "/reviews/melhor-furadeira-impacto",
      price: "R$ 180 - R$ 450"
    },
    {
      title: "Top 5 Geladeiras Custo-Benefício",
      description: "Selecionamos as melhores geladeiras com excelente relação custo-benefício. Economize na conta de luz sem abrir mão da qualidade.",
      image: "/api/placeholder/300/200", 
      rating: 4.8,
      readTime: "12 min",
      category: "Eletrodomésticos",
      href: "/reviews/melhores-geladeiras-custo-beneficio",
      price: "R$ 1.200 - R$ 2.800"
    },
    {
      title: "Kit Ferramentas Essencial para Casa",
      description: "Montamos o kit de ferramentas perfeito para resolver 90% dos problemas domésticos. Lista completa com preços atualizados.",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      readTime: "6 min", 
      category: "Ferramentas Manuais",
      href: "/reviews/kit-ferramentas-essencial-casa",
      price: "R$ 120 - R$ 350"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <Star className="w-4 h-4 mr-1" />
            Reviews Confiáveis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reviews Detalhados e Honestos
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Análises completas, comparativos e guias de compra para você fazer a melhor escolha. 
            Testamos para você não errar na compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <TrendingUp className="mr-2 h-5 w-5" />
              Reviews Populares
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Guias de Compra
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Categorias de Reviews
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a categoria que mais interessa para você e descubra os melhores produtos do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="relative group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {category.rating}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Produtos:</span>
                      <span className="font-medium">{category.products}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Produtos em destaque:</p>
                      {category.featured.map((product, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground">• {product}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={category.href}>
                        Ver Reviews
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
              Reviews em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos reviews mais populares e atualizados para te ajudar na decisão de compra
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <Card key={review.title} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-accent/10 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Wrench className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Review Completo</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {review.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {review.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{review.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {review.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>⏱️ {review.readTime}</span>
                    <span className="font-medium text-primary">{review.price}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={review.href}>
                      Ler Review Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não Perca Mais Tempo Pesquisando
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossos reviews economizam horas de pesquisa. Análises técnicas, 
            testes práticos e comparações honestas para sua melhor compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/ferramentas">
                Ferramentas Gratuitas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;