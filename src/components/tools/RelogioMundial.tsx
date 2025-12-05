import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Plus, X, Sun, Moon } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

interface TimeZone {
  id: string;
  city: string;
  country: string;
  timezone: string;
  offset: string;
}

const defaultTimezones: TimeZone[] = [
  { id: "br", city: "Brasília", country: "Brasil", timezone: "America/Sao_Paulo", offset: "-3" },
  { id: "ny", city: "Nova York", country: "EUA", timezone: "America/New_York", offset: "-5/-4" },
  { id: "ldn", city: "Londres", country: "Reino Unido", timezone: "Europe/London", offset: "0/+1" },
  { id: "tok", city: "Tóquio", country: "Japão", timezone: "Asia/Tokyo", offset: "+9" },
];

const availableTimezones: TimeZone[] = [
  { id: "br", city: "Brasília", country: "Brasil", timezone: "America/Sao_Paulo", offset: "-3" },
  { id: "ny", city: "Nova York", country: "EUA", timezone: "America/New_York", offset: "-5/-4" },
  { id: "la", city: "Los Angeles", country: "EUA", timezone: "America/Los_Angeles", offset: "-8/-7" },
  { id: "ldn", city: "Londres", country: "Reino Unido", timezone: "Europe/London", offset: "0/+1" },
  { id: "par", city: "Paris", country: "França", timezone: "Europe/Paris", offset: "+1/+2" },
  { id: "ber", city: "Berlim", country: "Alemanha", timezone: "Europe/Berlin", offset: "+1/+2" },
  { id: "tok", city: "Tóquio", country: "Japão", timezone: "Asia/Tokyo", offset: "+9" },
  { id: "sha", city: "Xangai", country: "China", timezone: "Asia/Shanghai", offset: "+8" },
  { id: "dub", city: "Dubai", country: "Emirados", timezone: "Asia/Dubai", offset: "+4" },
  { id: "syd", city: "Sydney", country: "Austrália", timezone: "Australia/Sydney", offset: "+10/+11" },
  { id: "sin", city: "Singapura", country: "Singapura", timezone: "Asia/Singapore", offset: "+8" },
  { id: "mex", city: "Cidade do México", country: "México", timezone: "America/Mexico_City", offset: "-6/-5" },
  { id: "lis", city: "Lisboa", country: "Portugal", timezone: "Europe/Lisbon", offset: "0/+1" },
  { id: "mad", city: "Madri", country: "Espanha", timezone: "Europe/Madrid", offset: "+1/+2" },
  { id: "mos", city: "Moscou", country: "Rússia", timezone: "Europe/Moscow", offset: "+3" },
  { id: "del", city: "Nova Delhi", country: "Índia", timezone: "Asia/Kolkata", offset: "+5:30" },
];

const RelogioMundial = () => {
  const [selectedZones, setSelectedZones] = useState<TimeZone[]>(defaultTimezones);
  const [currentTimes, setCurrentTimes] = useState<Record<string, Date>>({});
  const [showAddMenu, setShowAddMenu] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, Date> = {};
      selectedZones.forEach((zone) => {
        times[zone.id] = new Date();
      });
      setCurrentTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [selectedZones]);

  const formatTime = (timezone: string) => {
    return new Date().toLocaleTimeString("pt-BR", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (timezone: string) => {
    return new Date().toLocaleDateString("pt-BR", {
      timeZone: timezone,
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getHour = (timezone: string) => {
    return parseInt(
      new Date().toLocaleTimeString("pt-BR", {
        timeZone: timezone,
        hour: "2-digit",
        hour12: false,
      })
    );
  };

  const isDaytime = (timezone: string) => {
    const hour = getHour(timezone);
    return hour >= 6 && hour < 18;
  };

  const addTimezone = (zone: TimeZone) => {
    if (!selectedZones.find((z) => z.id === zone.id)) {
      setSelectedZones([...selectedZones, zone]);
    }
    setShowAddMenu(false);
  };

  const removeTimezone = (id: string) => {
    setSelectedZones(selectedZones.filter((z) => z.id !== id));
  };

  const availableToAdd = availableTimezones.filter(
    (zone) => !selectedZones.find((z) => z.id === zone.id)
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Ferramenta Online</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Relógio Mundial Online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o horário em tempo real de diversas cidades do mundo. Perfeito para reuniões 
            internacionais e viagens.
          </p>
        </div>

        {/* Add Timezone Button */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Button onClick={() => setShowAddMenu(!showAddMenu)}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Cidade
            </Button>
            
            {showAddMenu && availableToAdd.length > 0 && (
              <Card className="absolute top-12 left-1/2 -translate-x-1/2 z-10 w-72 max-h-80 overflow-y-auto">
                <CardContent className="p-2">
                  {availableToAdd.map((zone) => (
                    <Button
                      key={zone.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => addTimezone(zone)}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      {zone.city}, {zone.country}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Timezone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {selectedZones.map((zone) => (
            <Card 
              key={zone.id} 
              className={`relative overflow-hidden ${
                isDaytime(zone.timezone) 
                  ? 'bg-gradient-to-br from-sky-100 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/10' 
                  : 'bg-gradient-to-br from-indigo-900/20 to-slate-800/20'
              }`}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6"
                onClick={() => removeTimezone(zone.id)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {isDaytime(zone.timezone) ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-blue-400" />
                  )}
                  <div>
                    <CardTitle className="text-lg">{zone.city}</CardTitle>
                    <CardDescription>{zone.country} • GMT{zone.offset}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-4xl font-mono font-bold text-primary mb-2">
                  {formatTime(zone.timezone)}
                </p>
                <p className="text-sm text-muted-foreground capitalize">
                  {formatDate(zone.timezone)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Relógio Mundial - Fusos Horários em Tempo Real</h2>
          <p className="text-muted-foreground mb-4">
            Nosso relógio mundial online mostra o horário em tempo real de diversas cidades ao redor do 
            planeta. Uma ferramenta essencial para quem trabalha com equipes internacionais, faz viagens 
            frequentes ou simplesmente quer saber que horas são em outro país.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Como Usar</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Adicionar cidades:</strong> Clique em "Adicionar Cidade" para incluir novos fusos</li>
            <li><strong>Remover cidades:</strong> Clique no X no canto do card para remover</li>
            <li><strong>Dia/Noite:</strong> O ícone indica se é dia ☀️ ou noite 🌙 na cidade</li>
            <li><strong>Atualização automática:</strong> Os horários atualizam em tempo real</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Principais Fusos Horários</h3>
          <p className="text-muted-foreground mb-4">
            O Brasil utiliza principalmente o fuso horário de Brasília (GMT-3), mas existem outros três 
            fusos no país. Os Estados Unidos possuem 6 fusos horários diferentes. A Europa Central 
            utiliza GMT+1 no inverno e GMT+2 no verão.
          </p>
        </div>

        {/* Affiliate CTA */}
        <Card className="mt-8 bg-gradient-hero text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold mb-2">Relógios de Parede Mundiais</h3>
            <p className="opacity-90 mb-4">
              Decore seu escritório com relógios de fusos horários
            </p>
            <EnhancedButton variant="amazon" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver na Amazon
              </a>
            </EnhancedButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RelogioMundial;
