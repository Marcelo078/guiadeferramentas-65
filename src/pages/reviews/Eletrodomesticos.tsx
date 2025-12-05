import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Home as HomeIcon, 
  Star, 
  ArrowRight, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown,
  Refrigerator,
  Flame,
  WashingMachine,
  Wind,
  Zap
} from "lucide-react";

const Eletrodomesticos = () => {
  const products = [
    {
      name: "Geladeira Brastemp BRE80AK Frost Free 573L",
      description: "A Geladeira Brastemp BRE80AK é uma das melhores opções do mercado brasileiro para famílias grandes. Com capacidade de 573 litros, sistema Frost Free que elimina a necessidade de degelo, e tecnologia de resfriamento inteligente, este modelo oferece excelente desempenho e economia de energia. O compartimento Fresh Zone mantém frutas e verduras frescas por mais tempo, enquanto o design inox combina com qualquer cozinha moderna.",
      image: "https://images-na.ssl-images-amazon.com/images/I/51K4YQqZXgL._AC_SL1000_.jpg",
      rating: 4.8,
      price: "R$ 4.299",
      originalPrice: "R$ 5.199",
      discount: "17%",
      category: "Geladeiras",
      pros: ["Grande capacidade 573L", "Frost Free automático", "Selo Procel A", "Fresh Zone para verduras", "Design moderno inox"],
      cons: ["Preço elevado", "Ocupa bastante espaço", "Consumo moderado"],
      specs: {
        capacidade: "573 Litros",
        tipo: "Frost Free",
        voltagem: "110V/220V",
        consumo: "58 kWh/mês",
        garantia: "1 ano"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      name: "Fogão Electrolux 4 Bocas 52LXC Branco",
      description: "O Fogão Electrolux 52LXC é a escolha perfeita para quem busca um fogão confiável e eficiente. Com 4 bocas de tamanhos variados, forno de 52 litros com grill, e acendimento automático Super Automático, este modelo facilita o preparo de qualquer refeição. A mesa de inox é fácil de limpar e o timer digital ajuda no controle do tempo de cozimento. Aprovado pelo Inmetro com selo de eficiência.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71Ue4KxqXjL._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 899",
      originalPrice: "R$ 1.199",
      discount: "25%",
      category: "Fogões",
      pros: ["Acendimento automático", "Forno com grill", "Mesa inox fácil limpar", "Timer digital", "Ótimo custo-benefício"],
      cons: ["Forno poderia ser maior", "Acabamento básico", "Sem válvula de segurança"],
      specs: {
        bocas: "4",
        forno: "52 Litros",
        acendimento: "Super Automático",
        mesa: "Inox",
        garantia: "1 ano"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      name: "Máquina de Lavar Consul CWL12AB 12kg",
      description: "A Máquina de Lavar Consul CWL12AB é ideal para famílias de médio porte. Com capacidade de 12kg, oferece 15 programas de lavagem que se adaptam a diferentes tipos de roupa. A tecnologia Eco Enxágue economiza água sem comprometer a limpeza, e o ciclo rápido de 35 minutos é perfeito para o dia a dia corrido. O dispensador automático de detergente e amaciante garante dosagem correta a cada lavagem.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61+RKq4GXEL._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 1.699",
      originalPrice: "R$ 2.099",
      discount: "19%",
      category: "Máquinas de Lavar",
      pros: ["12kg de capacidade", "15 programas de lavagem", "Eco Enxágue economia", "Ciclo rápido 35min", "Dispensador automático"],
      cons: ["Sem secadora", "Barulho moderado", "Centrifugação básica"],
      specs: {
        capacidade: "12 kg",
        programas: "15",
        voltagem: "127V/220V",
        consumo: "0.22 kWh por ciclo",
        garantia: "1 ano"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      name: "Ar Condicionado Split Inverter Consul 12000 BTUs",
      description: "O Ar Condicionado Split Inverter Consul oferece refrigeração eficiente com economia de energia de até 60% comparado aos modelos convencionais. A tecnologia Inverter mantém a temperatura estável sem variações bruscas, proporcionando maior conforto térmico. O filtro antibactéria garante ar mais limpo, e o modo Sleep ajusta automaticamente a temperatura durante a noite para seu conforto.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61lCnHnRYzL._AC_SL1500_.jpg",
      rating: 4.7,
      price: "R$ 1.999",
      originalPrice: "R$ 2.599",
      discount: "23%",
      category: "Ar Condicionado",
      pros: ["Tecnologia Inverter", "60% economia energia", "Filtro antibactéria", "Modo Sleep", "Silencioso"],
      cons: ["Instalação não inclusa", "Necessita manutenção", "Preço inicial alto"],
      specs: {
        capacidade: "12000 BTUs",
        tecnologia: "Inverter",
        voltagem: "220V",
        consumo: "820W",
        garantia: "2 anos"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      name: "Aspirador de Pó Vertical Electrolux ERG30",
      description: "O Aspirador Electrolux ERG30 é a solução 2 em 1 para limpeza doméstica. Funciona como aspirador vertical e portátil, adaptando-se a diferentes necessidades. Com potência de 1200W e filtro HEPA, captura até 99,9% das partículas de poeira e ácaros. O cabo de 6 metros permite ampla mobilidade, e o reservatório de 1,3L reduz a frequência de esvaziamento.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61EKkBVjzML._AC_SL1500_.jpg",
      rating: 4.5,
      price: "R$ 349",
      originalPrice: "R$ 449",
      discount: "22%",
      category: "Aspiradores",
      pros: ["2 em 1 vertical e portátil", "Filtro HEPA", "1200W potência", "Cabo 6 metros", "Leve e prático"],
      cons: ["Reservatório pequeno", "Sem função mop", "Esquenta com uso prolongado"],
      specs: {
        potencia: "1200W",
        filtro: "HEPA",
        reservatorio: "1,3 Litros",
        cabo: "6 metros",
        garantia: "1 ano"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    },
    {
      name: "Liquidificador Mondial Turbo Power 1200W",
      description: "O Liquidificador Mondial Turbo Power é um dos mais potentes da categoria, com motor de 1200W que tritura qualquer ingrediente. Com copo de 3 litros em plástico resistente e lâminas de aço inox, prepara desde sucos simples até massas pesadas. O sistema de segurança impede funcionamento sem o copo acoplado, e as 12 velocidades oferecem controle preciso.",
      image: "https://images-na.ssl-images-amazon.com/images/I/61MKvFkGc0L._AC_SL1500_.jpg",
      rating: 4.6,
      price: "R$ 179",
      originalPrice: "R$ 249",
      discount: "28%",
      category: "Liquidificadores",
      pros: ["1200W super potente", "Copo 3 litros", "12 velocidades", "Lâminas inox", "Preço acessível"],
      cons: ["Barulhento", "Plástico do copo", "Base grande"],
      specs: {
        potencia: "1200W",
        capacidade: "3 Litros",
        velocidades: "12",
        material: "Copo plástico, lâminas inox",
        garantia: "1 ano"
      },
      affiliate: "https://amzn.to/3VBYYfL"
    }
  ];

  const categories = [
    { name: "Geladeiras", icon: Refrigerator, count: 45 },
    { name: "Fogões", icon: Flame, count: 32 },
    { name: "Máquinas de Lavar", icon: WashingMachine, count: 28 },
    { name: "Ar Condicionado", icon: Wind, count: 24 },
    { name: "Pequenos Eletros", icon: Zap, count: 56 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/reviews" className="hover:underline opacity-80">Reviews</Link>
            <span>/</span>
            <span>Eletrodomésticos</span>
          </div>
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
            <HomeIcon className="w-4 h-4 mr-1" />
            200+ Produtos Analisados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Guia Completo de Eletrodomésticos
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Reviews detalhados, comparativos e análises técnicas dos melhores eletrodomésticos 
            do mercado brasileiro. Economize tempo e dinheiro comprando o produto certo.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <Badge key={cat.name} variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.name} ({cat.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Eletrodomésticos em Destaque
          </h2>
          
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="p-6 flex items-center justify-center bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
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

                    {/* Specs */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                          <p className="font-semibold text-sm">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pros and Cons */}
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

                    {/* CTA */}
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
            Guia de Compra de Eletrodomésticos
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>Como Escolher a Geladeira Ideal</h3>
            <p>
              A capacidade em litros deve ser proporcional ao número de pessoas na casa. Para uma 
              pessoa, 280L são suficientes. Para famílias de 4 pessoas, considere modelos acima de 
              400L. Sempre prefira modelos Frost Free com selo Procel A para economia de energia.
            </p>

            <h3>Dicas para Escolher um Fogão</h3>
            <p>
              Avalie o tamanho do forno conforme suas necessidades. Fogões com acendimento automático 
              são mais práticos e seguros. Considere modelos com timer e mesa em inox para facilitar 
              a limpeza. Verifique se o modelo possui regulagem de chama e válvula de segurança.
            </p>

            <h3>Máquina de Lavar: Capacidade Ideal</h3>
            <p>
              Para solteiros, máquinas de 8-10kg são suficientes. Famílias de 4+ pessoas devem optar 
              por modelos de 12kg ou mais. Considere funções como ciclo rápido, eco enxágue e 
              centrifugação alta para roupas mais sequinhas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encontre o Eletrodoméstico Perfeito
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Compare preços e encontre as melhores ofertas do mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" variant="amazon" asChild>
              <a href="https://amzn.to/3VBYYfL" target="_blank" rel="noopener noreferrer">
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

export default Eletrodomesticos;
