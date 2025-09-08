import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

const Calendar2025 = () => {
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = Janeiro

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // Feriados nacionais brasileiros 2025
  const holidays = {
    "2025-01-01": "Confraternização Universal",
    "2025-02-17": "Carnaval",
    "2025-02-18": "Carnaval",
    "2025-04-18": "Sexta-feira Santa",
    "2025-04-21": "Tiradentes",
    "2025-05-01": "Dia do Trabalhador",
    "2025-09-07": "Independência do Brasil",
    "2025-10-12": "Nossa Senhora Aparecida",
    "2025-11-02": "Finados",
    "2025-11-15": "Proclamação da República",
    "2025-12-25": "Natal"
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isHoliday = (day: number, month: number) => {
    const dateKey = `2025-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays[dateKey as keyof typeof holidays];
  };

  const renderCalendar = () => {
    const year = 2025;
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    const days = [];

    // Dias vazios do início do mês
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const holiday = isHoliday(day, currentMonth);
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentMonth && 
                     new Date().getFullYear() === year;

      days.push(
        <div
          key={day}
          className={`h-10 w-10 flex items-center justify-center text-sm rounded-md transition-colors ${
            isToday 
              ? "bg-primary text-primary-foreground font-bold" 
              : holiday 
                ? "bg-destructive/10 text-destructive font-semibold" 
                : "hover:bg-muted"
          }`}
          title={holiday || ""}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  };

  const currentHolidays = Object.entries(holidays).filter(([date, _]) => {
    const month = parseInt(date.split('-')[1]) - 1;
    return month === currentMonth;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            Calendário 2025 com Feriados
          </CardTitle>
          <CardDescription>
            Calendário completo do ano 2025 com todos os feriados nacionais brasileiros. 
            Navegue pelos meses e veja as datas importantes destacadas em vermelho.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Header do Calendário */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-2xl font-bold">
              {months[currentMonth]} 2025
            </h3>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dias da Semana */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="h-10 flex items-center justify-center font-semibold text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Grade do Calendário */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {renderCalendar()}
          </div>

          {/* Feriados do Mês */}
          {currentHolidays.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-destructive">
                Feriados em {months[currentMonth]}:
              </h4>
              <div className="space-y-2">
                {currentHolidays.map(([date, name]) => {
                  const day = parseInt(date.split('-')[2]);
                  return (
                    <div key={date} className="flex items-center gap-2 text-sm">
                      <span className="font-medium w-12">{day}</span>
                      <span>{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legenda */}
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span>Hoje</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-destructive/10 border border-destructive rounded"></div>
              <span>Feriados</span>
            </div>
          </div>

          {/* Amazon Affiliate */}
          <div className="p-4 bg-accent/10 rounded-lg">
            <h4 className="font-semibold mb-2">📅 Organize-se Melhor em 2025!</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Confira agendas, planners e calendários físicos na Amazon para se organizar ainda melhor!
            </p>
            <Button variant="amazon" size="sm" asChild>
              <a href="https://amzn.to/46oITAh" target="_blank" rel="noopener noreferrer">
                Ver Agendas na Amazon
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar2025;