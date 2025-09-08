import { Link } from "react-router-dom";
import { Calculator, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/ferramentas/calendario", label: "Calendário Brasileiro" },
    { href: "/ferramentas/calculadora", label: "Calculadora Online" },
    { href: "/ferramentas/conversor", label: "Conversor de Unidades" },
    { href: "/reviews/ferramentas", label: "Reviews Ferramentas" },
    { href: "/reviews/eletrodomesticos", label: "Eletrodomésticos" },
    { href: "/notebooks", label: "Guia de Notebooks" },
  ];

  const partnerLinks = [
    { href: "https://amzn.to/46oITAh", label: "Amazon Ferramentas" },
    { href: "https://amzn.to/3VBYYfL", label: "Amazon Eletrodomésticos" },
    { href: "https://amzn.to/3JSf16E", label: "Amazon Notebooks" },
    { href: "https://mercadolivre.com/sec/2ufrhjF", label: "Mercado Livre" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-hero flex items-center justify-center">
                <Calculator className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Portal Brasileiro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ferramentas online gratuitas, reviews detalhados e guias de compra 
              para brasileiros. Tudo em um só lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h3 className="font-semibold mb-4">Parceiros</h3>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/politica-privacidade" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos-uso" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Programa de Afiliados
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portal Brasileiro. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Como afiliado da Amazon e Mercado Livre, ganhamos comissões por compras qualificadas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;