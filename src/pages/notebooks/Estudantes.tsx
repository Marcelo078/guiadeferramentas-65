import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Laptop, 
  GraduationCap,
  Star, 
  ArrowRight, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown,
  Cpu,
  HardDrive,
  Monitor,
  Battery
} from "lucide-react";

const NotebooksEstudantes = () => {
  const notebooks = [
    {
      name: "Lenovo IdeaPad 3i Intel Core i5 8GB 256GB SSD",
      description: "O Lenovo IdeaPad 3i é a escolha perfeita para estudantes que buscam um notebook confiável e com bom desempenho. Equipado com processador Intel Core i5 de 11ª geração, 8GB de RAM e SSD de 256GB, ele oferece rapidez no dia a dia acadêmico. A tela de 15.6 polegadas Full HD proporciona conforto visual para longas horas de estudo, e a bateria de até 7 horas garante uso durante o dia inteiro de aulas.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61QGMX0Qy1L._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 2.599",
      originalPrice: "R$ 3.199",
      discount: "19%",
      category: "Custo-Benefício",
      pros: ["Intel Core i5 11ª geração", "SSD 256GB rápido", "Tela Full HD", "Bateria 7 horas", "Leve 1.7kg"],
      cons: ["RAM não expansível", "Webcam básica", "Sem teclado iluminado"],
      specs: {
        processador: "Intel Core i5-1135G7",
        ram: "8GB DDR4",
        armazenamento: "SSD 256GB",
        tela: "15.6\" Full HD IPS",
        bateria: "7 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "ASUS VivoBook 15 Ryzen 5 8GB 512GB SSD",
      description: "O ASUS VivoBook 15 combina o poder do processador AMD Ryzen 5 com design elegante e portabilidade. O SSD de 512GB oferece espaço generoso para projetos e arquivos acadêmicos. A tela NanoEdge com bordas finas maximiza a área de visualização, enquanto o acabamento em metal confere durabilidade e sofisticação. Ideal para estudantes de design, arquitetura e engenharia.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 2.899",
      originalPrice: "R$ 3.599",
      discount: "19%",
      category: "Design Premium",
      pros: ["AMD Ryzen 5 potente", "SSD 512GB espaçoso", "Design NanoEdge", "Acabamento metálico", "Leitor biométrico"],
      cons: ["Sem placa dedicada", "Ventilação barulhenta", "Carregador grande"],
      specs: {
        processador: "AMD Ryzen 5 5500U",
        ram: "8GB DDR4",
        armazenamento: "SSD 512GB",
        tela: "15.6\" Full HD NanoEdge",
        bateria: "6 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Acer Aspire 5 Intel Core i3 4GB 256GB SSD",
      description: "O Acer Aspire 5 com Intel Core i3 é a opção mais acessível para estudantes com orçamento limitado. Apesar do preço baixo, oferece bom desempenho para tarefas acadêmicas como pesquisa, edição de textos e navegação. O SSD de 256GB garante inicialização rápida, e a RAM pode ser expandida futuramente. Construção sólida e suporte técnico Acer são diferenciais importantes.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg",
      rating: 4.4,
      price: "R$ 1.899",
      originalPrice: "R$ 2.399",
      discount: "21%",
      category: "Econômico",
      pros: ["Preço acessível", "SSD incluso", "RAM expansível", "Construção sólida", "Suporte Acer Brasil"],
      cons: ["i3 limitado", "Apenas 4GB RAM", "Tela HD não Full HD"],
      specs: {
        processador: "Intel Core i3-1115G4",
        ram: "4GB DDR4 (expansível)",
        armazenamento: "SSD 256GB",
        tela: "15.6\" HD",
        bateria: "8 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    },
    {
      name: "Samsung Book Intel Core i5 8GB 256GB SSD",
      description: "O Samsung Book representa a qualidade e confiabilidade da marca coreana no segmento de notebooks. Com processador Intel Core i5, 8GB RAM e SSD de 256GB, oferece performance sólida para estudos. O diferencial está na tela com tecnologia Samsung de cores vivas e no teclado retroiluminado para estudo noturno. Garantia Samsung Brasil e assistência técnica facilitada.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61CnSjmCzEL._AC_SL1000_.jpg",
      rating: 4.5,
      price: "R$ 2.799",
      originalPrice: "R$ 3.399",
      discount: "18%",
      category: "Marca Premium",
      pros: ["Qualidade Samsung", "Tela cores vivas", "Teclado retroiluminado", "Assistência facilitada", "Design elegante"],
      cons: ["Preço acima média", "SSD 256GB apenas", "Peso moderado"],
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
      name: "HP 256 G8 Intel Core i5 8GB 256GB SSD",
      description: "O HP 256 G8 é desenvolvido especialmente para o ambiente educacional, com construção robusta que resiste ao uso intenso. O processador Intel Core i5 e 8GB de RAM garantem multitarefa fluida entre navegadores, editores de texto e planilhas. A HP oferece excelente suporte técnico no Brasil e peças de reposição disponíveis, garantindo longa vida útil ao equipamento.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71Ug7a1vNKL._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 2.699",
      originalPrice: "R$ 3.299",
      discount: "18%",
      category: "Corporativo/Educacional",
      pros: ["Construção robusta", "Suporte HP Brasil", "Peças disponíveis", "Intel Core i5", "Design profissional"],
      cons: ["Visual básico", "Sem recursos extras", "Bateria mediana"],
      specs: {
        processador: "Intel Core i5-1035G1",
        ram: "8GB DDR4",
        armazenamento: "SSD 256GB",
        tela: "15.6\" HD",
        bateria: "5 horas"
      },
      affiliate: "https://amzn.to/3JSf16E"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/notebooks" className="hover:underline opacity-80">Notebooks</Link>
            <span>/</span>
            <span>Para Estudantes</span>
          </div>
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <GraduationCap className="w-4 h-4 mr-1" />
            50+ Modelos Analisados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Melhores Notebooks para Estudantes
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Notebooks com excelente custo-benefício para estudos, pesquisas e trabalhos acadêmicos. 
            Modelos leves, duráveis e com boa autonomia de bateria selecionados para você.
          </p>
        </div>
      </section>

      {/* Key Specs */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Cpu className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">Intel i3/i5 ou Ryzen 5</p>
              <p className="text-sm text-muted-foreground">Processador recomendado</p>
            </div>
            <div className="p-4">
              <HardDrive className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">8GB RAM + SSD</p>
              <p className="text-sm text-muted-foreground">Configuração ideal</p>
            </div>
            <div className="p-4">
              <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">14-15.6" Full HD</p>
              <p className="text-sm text-muted-foreground">Tela recomendada</p>
            </div>
            <div className="p-4">
              <Battery className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold">6+ horas bateria</p>
              <p className="text-sm text-muted-foreground">Para dia de aulas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Top 5 Notebooks para Estudantes
          </h2>
          
          <div className="space-y-8">
            {notebooks.map((notebook, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 flex items-center justify-center bg-white">
                    <img 
                      src={notebook.image} 
                      alt={notebook.name}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{notebook.category}</Badge>
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
                        <p className="text-3xl font-bold text-primary">{notebook.price}</p>
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

      {/* Guide */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Guia: Como Escolher Notebook para Estudar
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>Processador Ideal para Estudantes</h3>
            <p>
              Para tarefas acadêmicas como navegação, edição de documentos e planilhas, um Intel Core i3 
              ou Ryzen 3 é suficiente. Se você trabalha com softwares mais pesados ou multitarefa 
              intensa, opte pelo Core i5 ou Ryzen 5. Evite processadores Celeron ou Pentium.
            </p>

            <h3>Memória RAM e Armazenamento</h3>
            <p>
              8GB de RAM é o mínimo recomendado para uso confortável em 2024. SSD é obrigatório - ele 
              faz diferença brutal na velocidade do sistema. Prefira modelos com 256GB ou mais de SSD.
            </p>

            <h3>Portabilidade e Bateria</h3>
            <p>
              Se você leva o notebook para a faculdade diariamente, peso e autonomia de bateria são 
              cruciais. Procure modelos com menos de 2kg e bateria de 6+ horas. Telas de 14" oferecem 
              bom equilíbrio entre portabilidade e conforto visual.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encontre o Notebook Ideal para Seus Estudos
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Compare preços e aproveite as melhores ofertas do mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/3JSf16E" target="_blank" rel="noopener noreferrer">
                Ver Ofertas Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </EnhancedButton>
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

export default NotebooksEstudantes;
