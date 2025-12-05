import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer, Play, Pause, RotateCcw, Flag, Bell } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useToast } from "@/hooks/use-toast";

const Cronometro = () => {
  // Stopwatch state
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const stopwatchInterval = useRef<NodeJS.Timeout | null>(null);

  // Timer state
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSet, setTimerSet] = useState(false);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  // Stopwatch functions
  useEffect(() => {
    if (isStopwatchRunning) {
      stopwatchInterval.current = setInterval(() => {
        setStopwatchTime((prev) => prev + 10);
      }, 10);
    } else {
      if (stopwatchInterval.current) clearInterval(stopwatchInterval.current);
    }
    return () => {
      if (stopwatchInterval.current) clearInterval(stopwatchInterval.current);
    };
  }, [isStopwatchRunning]);

  // Timer functions
  useEffect(() => {
    if (isTimerRunning && timerTime > 0) {
      timerInterval.current = setInterval(() => {
        setTimerTime((prev) => {
          if (prev <= 1000) {
            setIsTimerRunning(false);
            toast({
              title: "⏰ Tempo Esgotado!",
              description: "O temporizador chegou ao fim."
            });
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
    } else {
      if (timerInterval.current) clearInterval(timerInterval.current);
    }
    return () => {
      if (timerInterval.current) clearInterval(timerInterval.current);
    };
  }, [isTimerRunning, timerTime, toast]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };

  const formatTimerTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleStopwatch = () => setIsStopwatchRunning(!isStopwatchRunning);
  
  const resetStopwatch = () => {
    setIsStopwatchRunning(false);
    setStopwatchTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, stopwatchTime]);
  };

  const startTimer = () => {
    const totalMs = (timerMinutes * 60 + timerSeconds) * 1000;
    if (totalMs <= 0) {
      toast({
        title: "Erro",
        description: "Defina um tempo válido",
        variant: "destructive"
      });
      return;
    }
    setTimerTime(totalMs);
    setTimerSet(true);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
  
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerTime(0);
    setTimerSet(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Timer className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Ferramenta Online</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cronômetro e Temporizador Online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cronômetro preciso e temporizador regressivo para suas atividades. Funciona direto no navegador.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="stopwatch" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stopwatch" className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              Cronômetro
            </TabsTrigger>
            <TabsTrigger value="timer" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Temporizador
            </TabsTrigger>
          </TabsList>

          {/* Stopwatch Tab */}
          <TabsContent value="stopwatch">
            <Card>
              <CardHeader>
                <CardTitle>Cronômetro</CardTitle>
                <CardDescription>
                  Cronômetro com precisão de centésimos de segundo e marcação de voltas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8 bg-muted/30 rounded-lg">
                  <p className="text-6xl md:text-8xl font-mono font-bold text-primary">
                    {formatTime(stopwatchTime)}
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={toggleStopwatch}
                    className={isStopwatchRunning ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                  >
                    {isStopwatchRunning ? (
                      <><Pause className="mr-2 h-5 w-5" /> Pausar</>
                    ) : (
                      <><Play className="mr-2 h-5 w-5" /> Iniciar</>
                    )}
                  </Button>
                  <Button size="lg" variant="outline" onClick={addLap} disabled={!isStopwatchRunning}>
                    <Flag className="mr-2 h-5 w-5" /> Volta
                  </Button>
                  <Button size="lg" variant="destructive" onClick={resetStopwatch}>
                    <RotateCcw className="mr-2 h-5 w-5" /> Zerar
                  </Button>
                </div>

                {laps.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Voltas:</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {laps.map((lap, index) => (
                        <div key={index} className="flex justify-between p-2 bg-muted/50 rounded">
                          <span>Volta {index + 1}</span>
                          <span className="font-mono">{formatTime(lap)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timer Tab */}
          <TabsContent value="timer">
            <Card>
              <CardHeader>
                <CardTitle>Temporizador</CardTitle>
                <CardDescription>
                  Timer regressivo com alerta sonoro ao final
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!timerSet ? (
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="minutes">Minutos</Label>
                      <Input
                        id="minutes"
                        type="number"
                        min={0}
                        value={timerMinutes}
                        onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 0)}
                        className="text-center text-2xl h-16"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seconds">Segundos</Label>
                      <Input
                        id="seconds"
                        type="number"
                        min={0}
                        max={59}
                        value={timerSeconds}
                        onChange={(e) => setTimerSeconds(parseInt(e.target.value) || 0)}
                        className="text-center text-2xl h-16"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-muted/30 rounded-lg">
                    <p className={`text-6xl md:text-8xl font-mono font-bold ${timerTime <= 10000 ? 'text-red-500' : 'text-primary'}`}>
                      {formatTimerTime(timerTime)}
                    </p>
                  </div>
                )}

                <div className="flex justify-center gap-4">
                  {!timerSet ? (
                    <Button size="lg" onClick={startTimer}>
                      <Play className="mr-2 h-5 w-5" /> Iniciar Timer
                    </Button>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        onClick={toggleTimer}
                        className={isTimerRunning ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                      >
                        {isTimerRunning ? (
                          <><Pause className="mr-2 h-5 w-5" /> Pausar</>
                        ) : (
                          <><Play className="mr-2 h-5 w-5" /> Continuar</>
                        )}
                      </Button>
                      <Button size="lg" variant="destructive" onClick={resetTimer}>
                        <RotateCcw className="mr-2 h-5 w-5" /> Cancelar
                      </Button>
                    </>
                  )}
                </div>

                {/* Quick preset buttons */}
                {!timerSet && (
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {[1, 3, 5, 10, 15, 30].map((min) => (
                      <Button
                        key={min}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setTimerMinutes(min);
                          setTimerSeconds(0);
                        }}
                      >
                        {min} min
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Cronômetro e Temporizador Online Gratuito</h2>
          <p className="text-muted-foreground mb-4">
            Nosso cronômetro online oferece precisão de centésimos de segundo e funciona diretamente no seu 
            navegador, sem necessidade de instalar nenhum aplicativo. Ideal para treinos, estudos, 
            competições e qualquer atividade que precise de controle de tempo preciso.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Funcionalidades</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Cronômetro:</strong> Precisão de centésimos, função de marcação de voltas</li>
            <li><strong>Temporizador:</strong> Timer regressivo com alertas visuais</li>
            <li><strong>Fácil de usar:</strong> Interface intuitiva e responsiva</li>
            <li><strong>Presets rápidos:</strong> Tempos pré-definidos para agilidade</li>
          </ul>
        </div>

        {/* Affiliate CTA */}
        <Card className="mt-8 bg-gradient-hero text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold mb-2">Cronômetros Profissionais</h3>
            <p className="opacity-90 mb-4">
              Confira cronômetros físicos para esportes na Amazon
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

export default Cronometro;
