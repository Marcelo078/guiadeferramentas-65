import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Delete, Equal } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNumber) {
      setDisplay(num);
      setWaitingForNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const result = calculate(currentValue, inputValue, operation);

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForNumber(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNumber(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNumber(false);
  };

  const inputDecimal = () => {
    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const buttons = [
    { label: "C", onClick: clear, variant: "destructive" as const },
    { label: "±", onClick: () => setDisplay(String(-parseFloat(display))), variant: "secondary" as const },
    { label: "%", onClick: () => setDisplay(String(parseFloat(display) / 100)), variant: "secondary" as const },
    { label: "÷", onClick: () => inputOperation("÷"), variant: "amazon" as const },
    
    { label: "7", onClick: () => inputNumber("7"), variant: "outline" as const },  
    { label: "8", onClick: () => inputNumber("8"), variant: "outline" as const },
    { label: "9", onClick: () => inputNumber("9"), variant: "outline" as const },
    { label: "×", onClick: () => inputOperation("×"), variant: "amazon" as const },
    
    { label: "4", onClick: () => inputNumber("4"), variant: "outline" as const },
    { label: "5", onClick: () => inputNumber("5"), variant: "outline" as const },
    { label: "6", onClick: () => inputNumber("6"), variant: "outline" as const },
    { label: "-", onClick: () => inputOperation("-"), variant: "amazon" as const },
    
    { label: "1", onClick: () => inputNumber("1"), variant: "outline" as const },
    { label: "2", onClick: () => inputNumber("2"), variant: "outline" as const },
    { label: "3", onClick: () => inputNumber("3"), variant: "outline" as const },
    { label: "+", onClick: () => inputOperation("+"), variant: "amazon" as const },
    
    { label: "0", onClick: () => inputNumber("0"), variant: "outline" as const, span: 2 },
    { label: ".", onClick: inputDecimal, variant: "outline" as const },
    { label: "=", onClick: performCalculation, variant: "success" as const },
  ];

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Calculadora Online
          </CardTitle>
          <CardDescription>
            Calculadora simples e rápida para seus cálculos do dia a dia. 
            Funciona diretamente no navegador sem necessidade de download.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Display */}
          <div className="mb-4 p-4 bg-muted rounded-lg">
            <div className="text-right text-2xl font-mono font-bold min-h-[2rem] flex items-center justify-end">
              {display}
            </div>
            {operation && (
              <div className="text-right text-sm text-muted-foreground">
                {previousValue} {operation}
              </div>
            )}
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="lg"
                onClick={button.onClick}
                className={`h-12 text-lg font-semibold ${
                  button.span === 2 ? "col-span-2" : ""
                }`}
              >
                {button.label === "=" ? (
                  <Equal className="h-5 w-5" />
                ) : button.label === "C" ? (
                  <Delete className="h-5 w-5" />
                ) : (
                  button.label
                )}
              </Button>
            ))}
          </div>

          {/* Amazon Affiliate */}
          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <h4 className="font-semibold mb-2">📱 Precisa de uma Calculadora Profissional?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Confira calculadoras científicas e financeiras na Amazon com ótimos preços!
            </p>
            <Button variant="amazon" size="sm" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Calculadoras na Amazon
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;