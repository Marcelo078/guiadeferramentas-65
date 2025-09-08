import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Thermometer, Ruler, DollarSign } from "lucide-react";

const UnitConverter = () => {
  const [temperatureValue, setTemperatureValue] = useState("");
  const [temperatureFrom, setTemperatureFrom] = useState("celsius");
  const [temperatureTo, setTemperatureTo] = useState("fahrenheit");
  const [temperatureResult, setTemperatureResult] = useState("");

  const [lengthValue, setLengthValue] = useState("");
  const [lengthFrom, setLengthFrom] = useState("meters");
  const [lengthTo, setLengthTo] = useState("feet");
  const [lengthResult, setLengthResult] = useState("");

  const [weightValue, setWeightValue] = useState("");
  const [weightFrom, setWeightFrom] = useState("kg");
  const [weightTo, setWeightTo] = useState("pounds");
  const [weightResult, setWeightResult] = useState("");

  // Conversões de Temperatura
  const convertTemperature = () => {
    const value = parseFloat(temperatureValue);
    if (isNaN(value)) return;

    let celsius = value;
    if (temperatureFrom === "fahrenheit") {
      celsius = (value - 32) * 5/9;
    } else if (temperatureFrom === "kelvin") {
      celsius = value - 273.15;
    }

    let result = celsius;
    if (temperatureTo === "fahrenheit") {
      result = (celsius * 9/5) + 32;
    } else if (temperatureTo === "kelvin") {
      result = celsius + 273.15;
    }

    setTemperatureResult(result.toFixed(2));
  };

  // Conversões de Comprimento
  const convertLength = () => {
    const value = parseFloat(lengthValue);
    if (isNaN(value)) return;

    const toMeters: { [key: string]: number } = {
      meters: 1,
      centimeters: 0.01,
      millimeters: 0.001,
      kilometers: 1000,
      inches: 0.0254,
      feet: 0.3048,
      yards: 0.9144,
      miles: 1609.344
    };

    const meters = value * toMeters[lengthFrom];
    const result = meters / toMeters[lengthTo];
    setLengthResult(result.toFixed(4));
  };

  // Conversões de Peso
  const convertWeight = () => {
    const value = parseFloat(weightValue);
    if (isNaN(value)) return;

    const toKg: { [key: string]: number } = {
      kg: 1,
      grams: 0.001,
      pounds: 0.453592,
      ounces: 0.0283495,
      tons: 1000
    };

    const kg = value * toKg[weightFrom];
    const result = kg / toKg[weightTo];
    setWeightResult(result.toFixed(4));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-6 w-6" />
            Conversor de Unidades Online
          </CardTitle>
          <CardDescription>
            Converta facilmente entre diferentes unidades de medida: temperatura, comprimento, peso e muito mais.
            Perfeito para estudos, trabalho e uso doméstico.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="temperature" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="temperature" className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Temperatura
              </TabsTrigger>
              <TabsTrigger value="length" className="flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                Comprimento
              </TabsTrigger>
              <TabsTrigger value="weight" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Peso
              </TabsTrigger>
            </TabsList>

            {/* Temperatura */}
            <TabsContent value="temperature" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <Label htmlFor="temp-value">Valor</Label>
                  <Input
                    id="temp-value"
                    type="number"
                    placeholder="Digite o valor"
                    value={temperatureValue}
                    onChange={(e) => setTemperatureValue(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="temp-from">De</Label>
                  <Select value={temperatureFrom} onValueChange={setTemperatureFrom}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celsius">Celsius (°C)</SelectItem>
                      <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                      <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="temp-to">Para</Label>
                  <Select value={temperatureTo} onValueChange={setTemperatureTo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celsius">Celsius (°C)</SelectItem>
                      <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                      <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Button onClick={convertTemperature} variant="success" size="lg">
                  Converter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                {temperatureResult && (
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <p className="text-2xl font-bold text-success">
                      {temperatureResult}°
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {temperatureValue}° {temperatureFrom} = {temperatureResult}° {temperatureTo}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Comprimento */}
            <TabsContent value="length" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <Label htmlFor="length-value">Valor</Label>
                  <Input
                    id="length-value"
                    type="number"
                    placeholder="Digite o valor"
                    value={lengthValue}
                    onChange={(e) => setLengthValue(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="length-from">De</Label>
                  <Select value={lengthFrom} onValueChange={setLengthFrom}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meters">Metros (m)</SelectItem>
                      <SelectItem value="centimeters">Centímetros (cm)</SelectItem>
                      <SelectItem value="millimeters">Milímetros (mm)</SelectItem>
                      <SelectItem value="kilometers">Quilômetros (km)</SelectItem>
                      <SelectItem value="inches">Polegadas (in)</SelectItem>
                      <SelectItem value="feet">Pés (ft)</SelectItem>
                      <SelectItem value="yards">Jardas (yd)</SelectItem>
                      <SelectItem value="miles">Milhas (mi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="length-to">Para</Label>
                  <Select value={lengthTo} onValueChange={setLengthTo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meters">Metros (m)</SelectItem>
                      <SelectItem value="centimeters">Centímetros (cm)</SelectItem>
                      <SelectItem value="millimeters">Milímetros (mm)</SelectItem>
                      <SelectItem value="kilometers">Quilômetros (km)</SelectItem>
                      <SelectItem value="inches">Polegadas (in)</SelectItem>
                      <SelectItem value="feet">Pés (ft)</SelectItem>
                      <SelectItem value="yards">Jardas (yd)</SelectItem>
                      <SelectItem value="miles">Milhas (mi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Button onClick={convertLength} variant="success" size="lg">
                  Converter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                {lengthResult && (
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <p className="text-2xl font-bold text-success">
                      {lengthResult}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lengthValue} {lengthFrom} = {lengthResult} {lengthTo}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Peso */}
            <TabsContent value="weight" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <Label htmlFor="weight-value">Valor</Label>
                  <Input
                    id="weight-value"
                    type="number"
                    placeholder="Digite o valor"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="weight-from">De</Label>
                  <Select value={weightFrom} onValueChange={setWeightFrom}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                      <SelectItem value="grams">Gramas (g)</SelectItem>
                      <SelectItem value="pounds">Libras (lb)</SelectItem>
                      <SelectItem value="ounces">Onças (oz)</SelectItem>
                      <SelectItem value="tons">Toneladas (t)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="weight-to">Para</Label>
                  <Select value={weightTo} onValueChange={setWeightTo}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                      <SelectItem value="grams">Gramas (g)</SelectItem>
                      <SelectItem value="pounds">Libras (lb)</SelectItem>
                      <SelectItem value="ounces">Onças (oz)</SelectItem>
                      <SelectItem value="tons">Toneladas (t)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Button onClick={convertWeight} variant="success" size="lg">
                  Converter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                {weightResult && (
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <p className="text-2xl font-bold text-success">
                      {weightResult}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {weightValue} {weightFrom} = {weightResult} {weightTo}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Amazon Affiliate */}
          <div className="mt-8 p-4 bg-accent/10 rounded-lg">
            <h4 className="font-semibold mb-2">🔧 Precisa de Ferramentas de Medição?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Confira balanças digitais, termômetros e trenas na Amazon com ótimos preços!
            </p>
            <Button variant="amazon" size="sm" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Ferramentas na Amazon
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnitConverter;