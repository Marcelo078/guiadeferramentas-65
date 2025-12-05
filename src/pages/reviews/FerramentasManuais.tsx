import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Wrench, 
  Star, 
  ArrowRight, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown,
  Hammer,
  Package
} from "lucide-react";

const FerramentasManuais = () => {
  const products = [
    {
      name: "Kit Ferramentas Bosch X-Line 103 Peças",
      description: "O Kit Bosch X-Line é o conjunto mais completo para uso doméstico e profissional. Com 103 peças incluindo brocas, bits, chaves e acessórios, este kit atende praticamente qualquer necessidade de reparo ou instalação. As brocas Bosch são conhecidas pela durabilidade e precisão, funcionando em madeira, metal e concreto. O estojo organizador robusto mantém tudo organizado e facilita o transporte.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81R8xAqVp9L._AC_SL1500_.jpg",
      rating: 4.9,
      price: "R$ 189",
      originalPrice: "R$ 279",
      discount: "32%",
      category: "Kits Completos",
      pros: ["103 peças variadas", "Qualidade Bosch", "Estojo organizador", "Brocas para todos materiais", "Ótimo custo-benefício"],
      cons: ["Algumas peças básicas", "Estojo plástico", "Sem ferramentas maiores"],
      specs: {
        pecas: "103",
        material: "Aço carbono/HSS",
        inclui: "Brocas, bits, chaves",
        estojo: "Plástico resistente",
        garantia: "1 ano Bosch"
      },
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      name: "Martelo Tramontina 25mm Cabo Fibra",
      description: "O Martelo Tramontina com cabo de fibra de vidro é referência em durabilidade e conforto. A cabeça de aço forjado garante resistência a impactos, enquanto o cabo de fibra absorve vibrações protegendo pulso e braço. O peso de 300g é ideal para trabalhos de precisão em carpintaria e montagens. A Tramontina oferece garantia vitalícia contra defeitos de fabricação, demonstrando confiança na qualidade do produto.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61YKdqjZxbL._AC_SL1500_.jpg",
      rating: 4.8,
      price: "R$ 49",
      originalPrice: "R$ 69",
      discount: "29%",
      category: "Martelos",
      pros: ["Cabo fibra anti-vibração", "Aço forjado resistente", "Garantia vitalícia", "Peso ideal 300g", "Marca tradicional"],
      cons: ["Apenas um tamanho", "Não é unha de aço", "Básico para profissionais"],
      specs: {
        peso: "300g",
        cabeca: "25mm aço forjado",
        cabo: "Fibra de vidro",
        tipo: "Unha curva",
        garantia: "Vitalícia"
      },
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      name: "Alicate Universal Gedore 8\" Premium",
      description: "O Alicate Universal Gedore 8 polegadas é a ferramenta indispensável para qualquer caixa de ferramentas. Fabricado em aço cromo-vanádio temperado, oferece resistência superior e corte preciso de fios e cabos. Os cabos bi-material proporcionam conforto e aderência mesmo em trabalhos prolongados. O sistema de articulação suave garante operação com menor esforço.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61gGKx9mq0L._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 69",
      originalPrice: "R$ 99",
      discount: "30%",
      category: "Alicates",
      pros: ["Aço cromo-vanádio", "Cabos bi-material", "Corte preciso", "Articulação suave", "Durabilidade profissional"],
      cons: ["Preço acima da média", "Sem isolamento 1000V", "Tamanho único"],
      specs: {
        tamanho: "8 polegadas",
        material: "Cromo-vanádio",
        cabo: "Bi-material",
        corte: "Fios até 2mm",
        garantia: "Gedore"
      },
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      name: "Jogo de Chaves Allen Gedore 9 Peças",
      description: "O Jogo de Chaves Allen Gedore em formato L é essencial para montagem de móveis, bicicletas e equipamentos. Com 9 peças nos tamanhos mais utilizados (1.5mm a 10mm), cobre praticamente todas as necessidades. O formato longo permite acesso a locais difíceis, e a ponta esférica facilita trabalhos em ângulo. Acabamento em cromo fosco previne oxidação.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71qbPqJK9nL._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 39",
      originalPrice: "R$ 59",
      discount: "34%",
      category: "Chaves",
      pros: ["9 tamanhos essenciais", "Ponta esférica", "Formato L longo", "Cromo anti-oxidação", "Suporte organizador"],
      cons: ["Sem tamanhos maiores", "Suporte simples", "Sem versão torx"],
      specs: {
        pecas: "9",
        tamanhos: "1.5mm a 10mm",
        material: "Aço cromo",
        formato: "L com ponta esférica",
        garantia: "Gedore"
      },
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      name: "Trena Laser Stanley TLM65 20m",
      description: "A Trena Laser Stanley TLM65 revoluciona medições com precisão de ±3mm em até 20 metros de distância. Basta apontar e apertar o botão para medições instantâneas. O display LCD de fácil leitura mostra medidas em metros, pés ou polegadas. Ideal para medições de ambientes, cálculo de áreas e volumes. Compacta e leve, cabe no bolso para levar a qualquer lugar.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71Csg2BPXGL._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 159",
      originalPrice: "R$ 219",
      discount: "27%",
      category: "Medição",
      pros: ["Precisão ±3mm", "Alcance 20m", "Cálculo área/volume", "Display LCD", "Compacta e leve"],
      cons: ["Não funciona a sol direto", "Pilhas não inclusas", "Básica vs profissionais"],
      specs: {
        alcance: "20 metros",
        precisao: "±3mm",
        display: "LCD retroiluminado",
        funcoes: "Distância, área, volume",
        garantia: "Stanley"
      },
      affiliate: "https://amzn.to/46oITAh"
    },
    {
      name: "Nível de Bolha Stanley 12\" Magnético",
      description: "O Nível de Bolha Stanley 12 polegadas com base magnética é perfeito para trabalhos com estruturas metálicas. As três bolhas (horizontal, vertical e 45°) garantem nivelamento preciso em qualquer situação. O corpo em alumínio é leve mas resistente, e os imãs potentes fixam em superfícies ferrosas liberando as mãos. Acabamento reforçado nas pontas protege contra quedas.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71EzAsvBbRL._AC_SL1500_.jpg",
      rating: 4.5,
      price: "R$ 79",
      originalPrice: "R$ 109",
      discount: "28%",
      category: "Níveis",
      pros: ["Base magnética forte", "3 bolhas precisas", "Alumínio resistente", "Pontas reforçadas", "Marca confiável"],
      cons: ["12\" pode ser curto", "Ímã gruda sujeira", "Sem bolsa"],
      specs: {
        tamanho: "12 polegadas (30cm)",
        bolhas: "3 (0°, 45°, 90°)",
        corpo: "Alumínio",
        base: "Magnética",
        garantia: "Stanley"
      },
      affiliate: "https://amzn.to/46oITAh"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/reviews" className="hover:underline opacity-80">Reviews</Link>
            <span>/</span>
            <span>Ferramentas Manuais</span>
          </div>
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <Wrench className="w-4 h-4 mr-1" />
            100+ Produtos Analisados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Melhores Ferramentas Manuais
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Guia completo com reviews detalhados de martelos, chaves, alicates e todos os 
            itens essenciais para sua caixa de ferramentas. Qualidade profissional com preço justo.
          </p>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {["Kits Completos", "Martelos", "Alicates", "Chaves", "Medição", "Níveis"].map((cat) => (
              <Badge key={cat} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Ferramentas Manuais em Destaque
          </h2>
          
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 flex items-center justify-center bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{product.rating}/5</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm line-through text-muted-foreground">{product.originalPrice}</p>
                        <p className="text-3xl font-bold text-primary">{product.price}</p>
                        <Badge variant="destructive" className="mt-1">-{product.discount}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                          <p className="font-semibold text-sm">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-green-600 flex items-center gap-2 mb-2">
                          <ThumbsUp className="w-4 h-4" /> Pontos Positivos
                        </h4>
                        <ul className="space-y-1">
                          {product.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-500">✓</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 flex items-center gap-2 mb-2">
                          <ThumbsDown className="w-4 h-4" /> Pontos Negativos
                        </h4>
                        <ul className="space-y-1">
                          {product.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-red-500">✗</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <EnhancedButton variant="amazon" size="lg" asChild className="flex-1">
                        <a href={product.affiliate} target="_blank" rel="noopener noreferrer">
                          Ver na Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </EnhancedButton>
                      <EnhancedButton variant="mercadolivre" size="lg" asChild className="flex-1">
                        <a href="https://mercadolivre.com/sec/2ufrhjF" target="_blank" rel="noopener noreferrer">
                          Mercado Livre
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Guia de Compra: Ferramentas Manuais
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>Montando Sua Caixa de Ferramentas</h3>
            <p>
              Para uso doméstico, comece com o essencial: martelo, alicate universal, jogo de chaves 
              de fenda/phillips, chaves allen e uma trena. Com essas ferramentas básicas você resolve 
              90% dos problemas do dia a dia. Invista em marcas reconhecidas como Tramontina, Gedore, 
              Stanley e Bosch.
            </p>

            <h3>Qualidade vs Preço</h3>
            <p>
              Ferramentas muito baratas geralmente têm vida útil curta e podem ser perigosas. Por outro 
              lado, ferramentas profissionais podem ser caras demais para uso ocasional. O ideal é 
              buscar o equilíbrio: marcas reconhecidas com preço intermediário oferecem a melhor 
              relação custo-benefício.
            </p>

            <h3>Cuidados e Manutenção</h3>
            <p>
              Guarde suas ferramentas em local seco para evitar oxidação. Limpe após o uso e aplique 
              óleo fino nas partes metálicas periodicamente. Ferramentas bem cuidadas duram décadas 
              e mantêm sua precisão.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Monte Sua Caixa de Ferramentas Completa
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Aproveite as ofertas e equipe-se com ferramentas de qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/reviews">
                Mais Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FerramentasManuais;
