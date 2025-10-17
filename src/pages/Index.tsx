import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  progress: number;
  lessons: number;
  optional?: boolean;
}

const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Математика',
    icon: 'Calculator',
    color: 'text-[#8B5CF6]',
    bgColor: 'bg-[#8B5CF6]/10',
    progress: 65,
    lessons: 24
  },
  {
    id: 'english',
    name: 'Английский язык',
    icon: 'Languages',
    color: 'text-[#F97316]',
    bgColor: 'bg-[#F97316]/10',
    progress: 30,
    lessons: 20
  },
  {
    id: 'world',
    name: 'Окружающий мир',
    icon: 'Globe',
    color: 'text-[#10B981]',
    bgColor: 'bg-[#10B981]/10',
    progress: 72,
    lessons: 18
  },
  {
    id: 'russian',
    name: 'Русский язык',
    icon: 'BookOpen',
    color: 'text-[#0EA5E9]',
    bgColor: 'bg-[#0EA5E9]/10',
    progress: 48,
    lessons: 32
  }
];

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mb-6 shadow-lg">
            <Icon name="GraduationCap" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Учебная платформа
          </h1>
          <p className="text-xl text-gray-600">
            Выбери предмет и начни учиться! 🎓
          </p>
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-scale-in">
          {[1, 2, 3, 4].map((grade) => (
            <Button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              variant={selectedGrade === grade ? 'default' : 'outline'}
              size="lg"
              className={`text-lg font-semibold min-w-[100px] transition-all duration-200 ${
                selectedGrade === grade 
                  ? 'shadow-lg scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {grade} класс
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {subjects.map((subject, index) => (
            <Card
              key={subject.id}
              className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${subject.bgColor} p-4 rounded-2xl`}>
                  <Icon 
                    name={subject.icon as any} 
                    size={32} 
                    className={subject.color}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {subject.name}
                    </h3>

                  </div>
                  <p className="text-gray-600">
                    {subject.lessons} уроков
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Прогресс</span>
                  <span className="font-semibold text-gray-800">
                    {subject.progress}%
                  </span>
                </div>
                <Progress value={subject.progress} className="h-3" />
              </div>

              <Button 
                className="w-full font-semibold text-lg" 
                size="lg"
              >
                Начать изучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                Готов учиться?
              </h2>
              <p className="text-white/90 text-lg">
                Каждый день — новые знания и достижения!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">12</div>
                <div className="text-white/80 text-sm">уроков пройдено</div>
              </div>
              <div className="w-px h-16 bg-white/30" />
              <div className="text-center">
                <div className="text-4xl font-bold">94</div>
                <div className="text-white/80 text-sm">осталось</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;