import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, DollarSign, Zap, Code, Globe, GraduationCap, Users, Smartphone } from "lucide-react";

const Parceiros = () => {
  const partners = [
    {
      title: "PagBank, PicPay e Banco Neon",
      description: "Ganhe R$ 20 e Mais Benefícios com Nossos Parceiros Financeiros. Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais!",
      icon: DollarSign,
      href: "https://renda-boost.lovable.app",
      category: "Financeiro",
      benefit: "R$ 20 de bônus"
    },
    {
      title: "Readdy IA",
      description: "Crie seus códigos de SaaS Aplicativos NOCODE em segundos. Plataforma de IA para desenvolvimento rápido de aplicações.",
      icon: Code,
      href: "https://readdy.ai/invite/Abq8XgpzJGtX",
      category: "Desenvolvimento",
      benefit: "Acesso VIP"
    },
    {
      title: "Manus IA",
      description: "Crie seus códigos de SaaS Aplicativos NOCODE em segundos. Ferramenta avançada de desenvolvimento automatizado.",
      icon: Zap,
      href: "https://manus.im/invitation/NNBGIDNC6MTV",
      category: "Desenvolvimento",
      benefit: "Convite Especial"
    },
    {
      title: "Lovable IA",
      description: "Crie seus códigos de Aplicativos NOCODE SaaS em segundos. Plataforma fundada em 2023 por Anton Osika e Fabian Hedin.",
      icon: Code,
      href: "https://lovable.dev/?via=marcelo-barbosa",
      category: "Desenvolvimento",
      benefit: "Referência Exclusiva"
    },
    {
      title: "Hostinger",
      description: "Hospedagem de sites profissional com domínios inclusos. Ideal para blogs, e-commerce e sites corporativos.",
      icon: Globe,
      href: "https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB",
      category: "Hospedagem",
      benefit: "Desconto Especial"
    },
    {
      title: "Fórmula Negócio Online",
      description: "Curso completo do Alex Vargas. Todos Eles Começaram do Zero com o Fórmula Negócio Online... Hoje Mudaram de Vida...",
      icon: GraduationCap,
      href: "https://go.hotmart.com/E11195793E",
      category: "Educação",
      benefit: "Curso Completo"
    },
    {
      title: "Carteira Nacional do Estudante",
      description: "CARTEIRA NACIONAL DO ESTUDANTE DIGITAL E FÍSICA. Esqueça os ingressos caros! Compre todos os ingressos que quiser pela metade do preço.",
      icon: GraduationCap,
      href: "https://app.monetizze.com.br/r/AEG25503067",
      category: "Estudantil",
      benefit: "50% OFF Ingressos"
    },
    {
      title: "Agênciagram",
      description: "Seguidores no Instagram de forma orgânica e segura. Aumente seu engajamento e alcance nas redes sociais.",
      icon: Users,
      href: "https://app.monetizze.com.br/r/ALZ12471991",
      category: "Marketing",
      benefit: "Crescimento Orgânico"
    },
    {
      title: "Replit",
      description: "Crie seus códigos de SaaS, Aplicativos em segundos. Ambiente de desenvolvimento colaborativo online.",
      icon: Code,
      href: "https://replit.com/refer/rodobens24horas",
      category: "Desenvolvimento",
      benefit: "Referência Especial"
    },
    {
      title: "YOUWARE",
      description: "Crie seus jogos, códigos de SaaS, Aplicativos em segundos. Plataforma completa de desenvolvimento.",
      icon: Smartphone,
      href: "https://www.youware.com/?via=mbbs-seja-vendo",
      category: "Desenvolvimento",
      benefit: "Acesso Premium"
    }
  ];

  const categoryColors = {
    "Financeiro": "text-green-600 bg-green-50",
    "Desenvolvimento": "text-blue-600 bg-blue-50",
    "Hospedagem": "text-purple-600 bg-purple-50",
    "Educação": "text-orange-600 bg-orange-50",
    "Estudantil": "text-indigo-600 bg-indigo-50",
    "Marketing": "text-pink-600 bg-pink-50"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Parceiros Exclusivos
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Aproveite ofertas especiais e benefícios exclusivos com nossos parceiros selecionados.
            Cada parceria foi cuidadosamente escolhida para oferecer o melhor valor.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              const categoryStyle = categoryColors[partner.category as keyof typeof categoryColors] || "text-gray-600 bg-gray-50";
              
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryStyle}`}>
                            {partner.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{partner.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {partner.description}
                    </CardDescription>
                    
                    <div className="mb-4 p-3 bg-success/10 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">
                          {partner.benefit}
                        </span>
                      </div>
                    </div>

                    <Button variant="cta" size="sm" asChild className="w-full">
                      <a href={partner.href} target="_blank" rel="noopener noreferrer">
                        Acessar Oferta
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer se Tornar Nosso Parceiro?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se você tem um produto ou serviço de qualidade que pode beneficiar nossos usuários,
            adoraríamos conversar sobre uma parceria.
          </p>
          <Button size="lg" variant="default">
            Entrar em Contato
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Aviso Legal:</strong> Como afiliados, recebemos comissões por vendas realizadas através dos nossos links.
            </p>
            <p>
              Isso não afeta o preço que você paga e nos permite manter o portal gratuito para todos os usuários.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;