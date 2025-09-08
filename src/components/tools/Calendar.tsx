import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = Janeiro

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // Feriados nacionais brasileiros
  const currentYear = new Date().getFullYear();
  const holidays = {
    [`${currentYear}-01-01`]: "Confraternização Universal",
    [`${currentYear}-02-17`]: "Carnaval",
    [`${currentYear}-02-18`]: "Carnaval",
    [`${currentYear}-04-18`]: "Sexta-feira Santa",
    [`${currentYear}-04-21`]: "Tiradentes",
    [`${currentYear}-05-01`]: "Dia do Trabalhador",
    [`${currentYear}-09-07`]: "Independência do Brasil",
    [`${currentYear}-10-12`]: "Nossa Senhora Aparecida",
    [`${currentYear}-11-02`]: "Finados",
    [`${currentYear}-11-15`]: "Proclamação da República",
    [`${currentYear}-12-25`]: "Natal"
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isHoliday = (day: number, month: number) => {
    const dateKey = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays[dateKey as keyof typeof holidays];
  };

  const renderCalendar = () => {
    const year = currentYear;
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    
    const days = [];
    
    // Células vazias para os dias antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10"></div>
      );
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
          className={`h-10 w-10 flex items-center justify-center text-sm rounded-md cursor-pointer hover:bg-accent transition-colors ${
            isToday ? 'bg-primary text-primary-foreground font-bold' : ''
          } ${
            holiday ? 'text-red-600 font-semibold' : ''
          }`}
          title={holiday || ''}
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

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center gap-2 justify-center">
              <CalendarIcon className="h-6 w-6" />
              Calendário com Feriados
            </CardTitle>
            <CardDescription>
              Calendário completo do ano atual com todos os feriados nacionais brasileiros. 
              Navegue pelos meses e veja as datas importantes destacadas em vermelho.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="sm" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-2xl font-bold">
                {months[currentMonth]} {currentYear}
              </h3>
              <Button variant="outline" size="sm" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Calendar Grid */}
            <div className="bg-card rounded-lg p-4 border">
              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="h-10 w-10 flex items-center justify-center text-sm font-semibold text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {renderCalendar()}
              </div>
            </div>

            {/* Holiday Legend */}
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2 text-center">Feriados Nacionais {currentYear}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {Object.entries(holidays).map(([date, holiday]) => {
                  const [year, month, day] = date.split('-');
                  return (
                    <div key={date} className="flex justify-between">
                      <span className="text-red-600 font-medium">{day}/{month}</span>
                      <span>{holiday}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SEO Content */}
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>Calendário Brasileiro Completo:</strong> Visualize todos os meses do ano {currentYear} com feriados nacionais destacados. 
                Ferramenta essencial para planejamento pessoal e profissional.
              </p>
              <p>
                <strong>Feriados Oficiais:</strong> Todos os feriados são baseados na legislação brasileira oficial, 
                incluindo datas fixas e móveis como Carnaval e Páscoa.
              </p>
            </div>

            {/* Amazon Affiliate */}
            <div className="p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2">📅 Organize-se Melhor!</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Confira agendas, planners e calendários físicos na Amazon para se organizar ainda melhor!
              </p>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://amzn.to/46oITAh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Ver Agendas na Amazon
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;