import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Gamepad,
  Star, 
  ArrowRight, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown,
  Cpu,
  HardDrive,
  Monitor,
  Zap
} from "lucide-react";

const NotebooksGamer = () => {
  const notebooks = [
    {
      name: "ASUS TUF Gaming F15 i5 RTX 3050 16GB 512GB SSD",
      description: "O ASUS TUF Gaming F15 é um dos notebooks gamer mais equilibrados do mercado brasileiro. Com a poderosa RTX 3050, você roda todos os jogos atuais em qualidade média-alta. A tela de 144Hz proporciona gameplay suave e responsivo. A construção TUF é certificada MIL-STD-810H, garantindo durabilidade mesmo em uso intenso. Sistema de refrigeração dual-fan mantém temperaturas controladas durante sessões longas.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71HAIaYdZ6L._AC_SL1500_.jpg",
      rating: 4.8,
      price: "R$ 4.999",
      originalPrice: "R$ 6.299",
      discount: "21%",
      category: "Melhor Custo-Benefício",
      pros: ["RTX 3050 jogos atuais", "Tela 144Hz fluida", "Construção MIL-STD", "16GB RAM", "Teclado RGB"],
      cons: ["Bateria curta 3h", "Pesado 2.3kg", "Alto consumo energia"],
      specs: {
        processador: "Intel Core i5-11400H",
        gpu: "NVIDIA RTX 3050 4GB",
        ram: "16GB DDR4",
        armazenamento: "SSD 512GB",
        tela: "15.6\" FHD 144Hz"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Acer Nitro 5 i5 RTX 3060 16GB 512GB SSD",
      description: "O Acer Nitro 5 com RTX 3060 é para quem quer jogar no máximo sem gastar uma fortuna. A GPU RTX 3060 oferece ray tracing e DLSS para gráficos cinematográficos. Com 16GB de RAM e SSD NVMe de 512GB, o carregamento de jogos é instantâneo. A tela IPS de 144Hz garante cores precisas e movimentos fluidos. Refrigeração CoolBoost com duas ventoinhas e 4 saídas de ar.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 5.799",
      originalPrice: "R$ 7.199",
      discount: "19%",
      category: "Performance Alta",
      pros: ["RTX 3060 ray tracing", "Tela IPS 144Hz", "Sistema CoolBoost", "16GB RAM", "NitroSense controle"],
      cons: ["Autonomia limitada", "Design chamativo", "Fan barulhento sob carga"],
      specs: {
        processador: "Intel Core i5-11400H",
        gpu: "NVIDIA RTX 3060 6GB",
        ram: "16GB DDR4",
        armazenamento: "SSD 512GB NVMe",
        tela: "15.6\" FHD IPS 144Hz"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Lenovo Legion 5 Ryzen 7 RTX 3070 16GB 1TB SSD",
      description: "O Lenovo Legion 5 é a escolha dos gamers exigentes. Com Ryzen 7 5800H e RTX 3070, entrega performance de desktop em formato portátil. A tela de 165Hz com G-Sync elimina tearing para competitivos. O design discreto Legion Coldfront 3.0 oferece refrigeração silenciosa e eficiente. Bateria de 80Wh é a maior da categoria. Construção sólida e acabamento premium em metal.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81MxM3lF8UL._AC_SL1500_.jpg",
      rating: 4.9,
      price: "R$ 7.999",
      originalPrice: "R$ 9.499",
      discount: "16%",
      category: "Enthusiast",
      pros: ["RTX 3070 top tier", "Ryzen 7 5800H", "Tela 165Hz G-Sync", "1TB SSD generoso", "Design discreto"],
      cons: ["Preço elevado", "Peso 2.4kg", "Carregador pesado"],
      specs: {
        processador: "AMD Ryzen 7 5800H",
        gpu: "NVIDIA RTX 3070 8GB",
        ram: "16GB DDR4 3200MHz",
        armazenamento: "SSD 1TB NVMe",
        tela: "15.6\" FHD IPS 165Hz"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Dell G15 i5 RTX 3050 8GB 512GB SSD",
      description: "O Dell G15 é o entry-level gamer mais sólido do mercado. Com design inspirado no Alienware e qualidade de construção Dell, oferece confiabilidade superior. A RTX 3050 roda jogos populares como Fortnite, CS2 e Valorant sem problemas. O sistema térmico Game Shift aumenta a refrigeração com um botão. Suporte Dell Premium no Brasil é diferencial importante.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71gr5HkfDEL._AC_SL1500_.jpg",
      rating: 4.5,
      price: "R$ 4.299",
      originalPrice: "R$ 5.299",
      discount: "19%",
      category: "Entry-Level",
      pros: ["Qualidade Dell", "Design Alienware", "Game Shift térmico", "Suporte Brasil", "Construção sólida"],
      cons: ["8GB RAM limitado", "Tela 120Hz apenas", "SSD 512GB básico"],
      specs: {
        processador: "Intel Core i5-11400H",
        gpu: "NVIDIA RTX 3050 4GB",
        ram: "8GB DDR4",
        armazenamento: "SSD 512GB",
        tela: "15.6\" FHD 120Hz"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Acer Predator Helios 300 i7 RTX 3070 Ti 16GB 512GB",
      description: "O Acer Predator Helios 300 é para gamers hardcore que não aceitam compromissos. Com i7-12700H e RTX 3070 Ti, entrega frames altíssimos em qualquer jogo. A tela de 165Hz QHD (2560x1440) oferece mais nitidez e imersão. Sistema de overclock PredatorSense permite extrair máxima performance. RGB customizável em 4 zonas e design agressivo icônico da linha Predator.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71tJUDJqJuL._AC_SL1500_.jpg",
      rating: 4.8,
      price: "R$ 9.999",
      originalPrice: "R$ 12.499",
      discount: "20%",
      category: "Premium",
      pros: ["RTX 3070 Ti potente", "i7-12700H desktop-level", "Tela QHD 165Hz", "PredatorSense OC", "RGB 4 zonas"],
      cons: ["Preço premium", "Pesado 2.5kg", "Bateria 2h gaming"],
      specs: {
        processador: "Intel Core i7-12700H",
        gpu: "NVIDIA RTX 3070 Ti 8GB",
        ram: "16GB DDR5",
        armazenamento: "SSD 512GB NVMe",
        tela: "15.6\" QHD IPS 165Hz"
      },
      affiliate: "https://amzn.to/3JSf16E"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/notebooks" className="hover:underline opacity-80">Notebooks</Link>
            <span>/</span>
            <span>Gamer</span>
          </div>
          <Badge variant="secondary" className="mb-4 bg-red-500/30 text-white border-red-400">
            <Gamepad className="w-4 h-4 mr-1" />
            40+ Modelos Testados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Melhores Notebooks Gamer
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Análises completas dos notebooks mais potentes para jogos. RTX, telas de alta taxa de 
            atualização e processadores de última geração para você dominar qualquer game.
          </p>
        </div>
      </section>

      {/* Key Specs */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Cpu className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="font-semibold">Intel i5/i7 ou Ryzen 7</p>
              <p className="text-sm text-muted-foreground">Processador gaming</p>
            </div>
            <div className="p-4">
              <Zap className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="font-semibold">RTX 3050 a 3070 Ti</p>
              <p className="text-sm text-muted-foreground">GPU dedicada</p>
            </div>
            <div className="p-4">
              <HardDrive className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="font-semibold">16GB RAM + SSD NVMe</p>
              <p className="text-sm text-muted-foreground">Mínimo recomendado</p>
            </div>
            <div className="p-4">
              <Monitor className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <p className="font-semibold">144Hz+ Full HD/QHD</p>
              <p className="text-sm text-muted-foreground">Tela para games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Top 5 Notebooks Gamer
          </h2>
          
          <div className="space-y-8">
            {notebooks.map((notebook, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-red-500/30 transition-colors">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <img 
                      src={notebook.image} 
                      alt={notebook.name}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-red-500 hover:bg-red-600">{notebook.category}</Badge>
                        <h3 className="text-2xl font-bold mb-2">{notebook.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(notebook.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{notebook.rating}/5</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm line-through text-muted-foreground">{notebook.originalPrice}</p>
                        <p className="text-3xl font-bold text-red-500">{notebook.price}</p>
                        <Badge variant="destructive" className="mt-1">-{notebook.discount}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {notebook.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(notebook.specs).map(([key, value]) => (
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
                          {notebook.pros.map((pro, i) => (
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
                          {notebook.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-red-500">✗</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <EnhancedButton variant="amazon" size="lg" asChild className="flex-1">
                        <a href={notebook.affiliate} target="_blank" rel="noopener noreferrer">
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

      {/* Gaming Guide */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Guia: Como Escolher Notebook Gamer
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>GPU: O Coração do Notebook Gamer</h3>
            <p>
              A placa de vídeo é o componente mais importante. RTX 3050 é o mínimo para jogos atuais 
              em Full HD médio. RTX 3060 oferece ray tracing decente. RTX 3070 e 3070 Ti são para 
              quem quer jogar no máximo em Full HD ou médio-alto em QHD.
            </p>

            <h3>Taxa de Atualização da Tela</h3>
            <p>
              144Hz é o padrão atual para gaming competitivo. Jogos como CS2, Valorant e Fortnite 
              se beneficiam muito de telas rápidas. 165Hz oferece margem extra. Para jogos casuais, 
              120Hz já é excelente.
            </p>

            <h3>Refrigeração e Ruído</h3>
            <p>
              Notebooks gamer esquentam e fazem barulho sob carga - isso é normal. Procure modelos 
              com sistemas de refrigeração robustos (dual-fan mínimo). Leia reviews sobre níveis de 
              ruído e throttling térmico antes de comprar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hora de Subir de Nível
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Encontre seu próximo notebook gamer com os melhores preços
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/3JSf16E" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-purple-900">
              <Link to="/notebooks">
                Ver Outras Categorias
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotebooksGamer;
