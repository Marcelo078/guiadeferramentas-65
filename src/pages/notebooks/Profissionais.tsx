import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Briefcase,
  Star, 
  ArrowRight, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown,
  Cpu,
  HardDrive,
  Monitor,
  Shield
} from "lucide-react";

const NotebooksProfissionais = () => {
  const notebooks = [
    {
      name: "Dell Inspiron 15 3000 i5 8GB 256GB SSD",
      description: "O Dell Inspiron 15 3000 é o notebook ideal para profissionais que buscam confiabilidade e bom desempenho. Com Intel Core i5 de 11ª geração e 8GB de RAM, oferece performance sólida para Office, navegação e aplicativos corporativos. O suporte Dell ProSupport no Brasil garante assistência rápida em caso de problemas. Construção robusta e design profissional para ambientes corporativos.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71lz7Cxq6ML._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 2.899",
      originalPrice: "R$ 3.599",
      discount: "19%",
      category: "Corporativo",
      pros: ["Suporte Dell Brasil", "Intel Core i5", "Construção robusta", "Design profissional", "SSD 256GB"],
      cons: ["RAM não expansível", "Tela básica", "Sem teclado retroiluminado"],
      specs: {
        processador: "Intel Core i5-1135G7",
        ram: "8GB DDR4",
        armazenamento: "SSD 256GB",
        tela: "15.6\" Full HD",
        bateria: "6 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "HP Pavilion 14 i5 8GB 512GB SSD Touch",
      description: "O HP Pavilion 14 combina portabilidade com recursos premium como tela touch e acabamento em alumínio. Ideal para profissionais que viajam frequentemente, pesa apenas 1.4kg. O SSD de 512GB oferece espaço generoso para arquivos de trabalho. A tela touch de 14 polegadas facilita navegação e anotações. Webcam HP True Vision e microfones de redução de ruído para videoconferências.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71+R7bLIHOL._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 3.299",
      originalPrice: "R$ 4.099",
      discount: "20%",
      category: "Ultraportátil",
      pros: ["Apenas 1.4kg", "Tela touch", "Acabamento alumínio", "Webcam qualidade", "SSD 512GB"],
      cons: ["Tela 14\" pode ser pequena", "8GB RAM fixo", "Preço acima média"],
      specs: {
        processador: "Intel Core i5-1235U",
        ram: "8GB DDR4",
        armazenamento: "SSD 512GB",
        tela: "14\" FHD IPS Touch",
        bateria: "8 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Lenovo ThinkPad E14 Gen 4 Ryzen 5 16GB 256GB",
      description: "O ThinkPad E14 é lenda no mundo corporativo por sua durabilidade excepcional e teclado considerado o melhor do mercado. Certificação MIL-STD-810G para resistência a condições extremas. Com Ryzen 5 e 16GB de RAM, multitarefa pesada não é problema. O TrackPoint vermelho icônico oferece precisão extra de navegação. Segurança TPM 2.0 e leitor de digitais para proteção de dados.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61JC8VjrbQL._AC_SL1500_.jpg",
      rating: 4.8,
      price: "R$ 4.199",
      originalPrice: "R$ 5.299",
      discount: "21%",
      category: "Business Premium",
      pros: ["Qualidade ThinkPad", "16GB RAM", "MIL-STD certificado", "Melhor teclado", "Segurança TPM"],
      cons: ["Design conservador", "Pesado para 14\"", "SSD pequeno 256GB"],
      specs: {
        processador: "AMD Ryzen 5 5625U",
        ram: "16GB DDR4",
        armazenamento: "SSD 256GB",
        tela: "14\" Full HD IPS",
        bateria: "10 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "ASUS ZenBook 14 i7 16GB 512GB SSD OLED",
      description: "O ASUS ZenBook 14 é para profissionais criativos que valorizam qualidade visual. A tela OLED oferece cores perfeitas e preto absoluto, ideal para edição de fotos e vídeos. Com Intel Core i7 e 16GB de RAM, roda Adobe Creative Suite sem problemas. O design ErgoLift eleva o teclado para melhor ergonomia. Acabamento premium em metal com peso de apenas 1.39kg.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71dYDiYMBNL._AC_SL1500_.jpg",
      rating: 4.9,
      price: "R$ 5.999",
      originalPrice: "R$ 7.499",
      discount: "20%",
      category: "Criativo Premium",
      pros: ["Tela OLED incrível", "Intel i7 potente", "16GB RAM", "Design ErgoLift", "Ultraleve 1.39kg"],
      cons: ["Preço elevado", "Poucas portas", "Tela 14\" compacta"],
      specs: {
        processador: "Intel Core i7-1260P",
        ram: "16GB LPDDR5",
        armazenamento: "SSD 512GB NVMe",
        tela: "14\" 2.8K OLED 90Hz",
        bateria: "9 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Acer Swift 3 Ryzen 7 16GB 512GB SSD",
      description: "O Acer Swift 3 oferece especificações de alto nível por um preço competitivo. Com Ryzen 7 5700U e 16GB de RAM, é um dos notebooks mais potentes na categoria custo-benefício. O corpo em alumínio e design fino transmitem profissionalismo. A bateria de longa duração permite um dia inteiro de trabalho. Excelente opção para empreendedores e freelancers.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71V6MLWN2vL._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 3.799",
      originalPrice: "R$ 4.599",
      discount: "17%",
      category: "Custo-Benefício",
      pros: ["Ryzen 7 potente", "16GB RAM", "Corpo alumínio", "Bateria 10h", "Preço justo"],
      cons: ["Webcam HD básica", "Sem Thunderbolt", "Fan audível sob carga"],
      specs: {
        processador: "AMD Ryzen 7 5700U",
        ram: "16GB DDR4",
        armazenamento: "SSD 512GB",
        tela: "14\" Full HD IPS",
        bateria: "10 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/notebooks" className="hover:underline opacity-80">Notebooks</Link>
            <span>/</span>
            <span>Profissionais</span>
          </div>
          <Badge variant="secondary" className="mb-4 bg-blue-500/30 text-white border-blue-400">
            <Briefcase className="w-4 h-4 mr-1" />
            35+ Modelos Avaliados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Melhores Notebooks para Trabalho
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Notebooks para trabalho corporativo, home office e produtividade. Modelos focados em 
            durabilidade, segurança e performance estável para o dia a dia profissional.
          </p>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">Intel i5/i7 ou Ryzen 5/7</p>
              <p className="text-sm text-muted-foreground">Multitarefa fluida</p>
            </div>
            <div className="p-4">
              <HardDrive className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">8-16GB RAM + SSD</p>
              <p className="text-sm text-muted-foreground">Produtividade</p>
            </div>
            <div className="p-4">
              <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">14-15.6" Full HD+</p>
              <p className="text-sm text-muted-foreground">Conforto visual</p>
            </div>
            <div className="p-4">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">TPM + Biometria</p>
              <p className="text-sm text-muted-foreground">Segurança dados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Top 5 Notebooks Profissionais
          </h2>
          
          <div className="space-y-8">
            {notebooks.map((notebook, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-blue-500/30 transition-colors">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <img 
                      src={notebook.image} 
                      alt={notebook.name}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-blue-600 hover:bg-blue-700">{notebook.category}</Badge>
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
                        <p className="text-3xl font-bold text-blue-600">{notebook.price}</p>
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

      {/* Professional Guide */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Guia: Notebook Ideal para Trabalho
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>Prioridades para Uso Profissional</h3>
            <p>
              Confiabilidade vem em primeiro lugar. Marcas como Dell, HP, Lenovo e ASUS têm 
              excelente suporte no Brasil. Notebooks business geralmente têm melhor construção 
              e garantia estendida disponível.
            </p>

            <h3>Home Office: O Que Considerar</h3>
            <p>
              Para videoconferências frequentes, priorize notebooks com boa webcam (HD ou Full HD) 
              e microfones com redução de ruído. Tela de 14" ou maior com painel IPS reduz fadiga 
              visual. Bateria de 8+ horas elimina preocupação com tomadas.
            </p>

            <h3>Segurança de Dados</h3>
            <p>
              Para dados sensíveis, procure notebooks com TPM 2.0 para criptografia de disco, 
              leitor de digitais ou reconhecimento facial, e slot para cabo de segurança. 
              ThinkPads são referência nesse quesito.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Invista na Sua Produtividade
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Encontre o notebook profissional ideal com os melhores preços
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/3JSf16E" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-blue-900">
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

export default NotebooksProfissionais;
