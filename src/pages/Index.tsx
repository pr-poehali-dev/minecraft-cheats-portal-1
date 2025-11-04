import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const cheats = [
    {
      name: 'KillAura',
      description: 'Автоматическая атака ближайших мобов и игроков',
      features: ['360° радиус', 'Настройка дистанции', 'Анти-бан защита'],
      version: '2.1.4',
      status: 'stable'
    },
    {
      name: 'Fly',
      description: 'Полет в режиме выживания без ограничений',
      features: ['Режим креатива', 'Настройка скорости', 'Обход античитов'],
      version: '3.0.2',
      status: 'beta'
    },
    {
      name: 'XRay',
      description: 'Просмотр руд и сундуков через блоки',
      features: ['Кастомные фильтры', 'ESP для игроков', 'Ночное видение'],
      version: '1.8.1',
      status: 'stable'
    },
    {
      name: 'SpeedHack',
      description: 'Увеличенная скорость передвижения',
      features: ['До 10x скорость', 'Безопасный режим', 'Совместим с Fly'],
      version: '2.5.0',
      status: 'stable'
    },
    {
      name: 'AutoMine',
      description: 'Автоматическая добыча ресурсов',
      features: ['Умная навигация', 'Поиск руд', 'Авто-инструменты'],
      version: '1.2.3',
      status: 'new'
    },
    {
      name: 'ChestESP',
      description: 'Подсветка сундуков и контейнеров',
      features: ['Дистанция 200 блоков', 'Фильтр по типу', 'Цветовая маркировка'],
      version: '1.9.0',
      status: 'stable'
    }
  ];

  const news = [
    {
      date: '28 октября 2024',
      title: 'Обновление 3.0: Новый движок античитов',
      content: 'Полностью переработана система обхода античитов. Теперь все читы работают на серверах с последними версиями античитов.'
    },
    {
      date: '15 октября 2024',
      title: 'AutoMine 1.2.3 - Стабильная версия',
      content: 'Исправлены баги с навигацией. Добавлена поддержка Nether и End измерений.'
    },
    {
      date: '3 октября 2024',
      title: 'Поддержка Minecraft 1.21',
      content: 'Все читы обновлены для работы с последней версией игры.'
    }
  ];

  const faqItems = [
    {
      question: 'Безопасно ли использовать эти читы?',
      answer: 'Все наши читы оснащены системой анти-бан защиты. Однако мы рекомендуем использовать их на свой страх и риск и избегать использования на официальных серверах с сильными античитами.'
    },
    {
      question: 'Какие версии Minecraft поддерживаются?',
      answer: 'Читы поддерживают версии от 1.16 до 1.21. Для старых версий доступны специальные сборки на странице загрузки.'
    },
    {
      question: 'Как часто выходят обновления?',
      answer: 'Мы выпускаем обновления минимум раз в 2 недели. При критических багах или новых версиях Minecraft - в течение 48 часов.'
    },
    {
      question: 'Нужна ли регистрация?',
      answer: 'Нет, все читы полностью бесплатны и доступны без регистрации. Просто скачай и используй.'
    },
    {
      question: 'Работают ли читы в мультиплеере?',
      answer: 'Да, все читы оптимизированы для работы на многопользовательских серверах. Имеют встроенную защиту от обнаружения.'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success('Новое обновление доступно!', {
        description: 'KillAura 2.1.5 - улучшенная точность атаки',
        duration: 5000,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-border">
                <span className="text-xl font-bold">MC</span>
              </div>
              <span className="text-xl font-bold glow-text text-primary">MineCheats</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'cheats', 'install', 'faq', 'news', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'cheats' && 'Читы'}
                  {section === 'install' && 'Установка'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'news' && 'Новости'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="border-primary text-primary animate-glow">
              Полностью бесплатно
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Лучшие читы для Minecraft
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Получи преимущество в игре с нашей коллекцией мощных и безопасных читов. 
            Постоянные обновления и защита от античитов.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8"
              onClick={() => scrollToSection('cheats')}
            >
              <Icon name="Download" className="mr-2" size={20} />
              Смотреть читы
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection('install')}
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Инструкция
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-center">Анти-бан защита</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Встроенная система обхода античитов для максимальной безопасности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Icon name="Zap" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-center">Быстрые обновления</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Новые версии выходят каждые 2 недели с улучшениями и фиксами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <CardTitle className="text-center">Активное комьюнити</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Тысячи игроков уже используют наши читы каждый день
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cheats" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Доступные читы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный набор модов для доминирования в игре
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cheats.map((cheat, index) => (
              <Card 
                key={index} 
                className="border-primary/20 bg-card/80 backdrop-blur hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {cheat.name}
                    </CardTitle>
                    <Badge 
                      variant={cheat.status === 'stable' ? 'default' : cheat.status === 'beta' ? 'secondary' : 'outline'}
                      className={
                        cheat.status === 'stable' ? 'bg-accent text-accent-foreground' :
                        cheat.status === 'beta' ? 'bg-secondary text-secondary-foreground' :
                        'border-primary text-primary'
                      }
                    >
                      {cheat.status === 'stable' && 'Стабильная'}
                      {cheat.status === 'beta' && 'Бета'}
                      {cheat.status === 'new' && 'Новый'}
                    </Badge>
                  </div>
                  <CardDescription>{cheat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Package" size={16} />
                      <span>Версия {cheat.version}</span>
                    </div>
                    <div className="space-y-1">
                      {cheat.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Как установить
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простая инструкция за 3 шага
          </p>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Скачай нужный чит',
                description: 'Выбери чит из списка выше и нажми кнопку "Скачать". Файл сохранится в папку загрузок.',
                icon: 'Download'
              },
              {
                step: 2,
                title: 'Установи Forge/Fabric',
                description: 'Если у тебя еще нет модлоадера, скачай Forge или Fabric для твоей версии Minecraft с официального сайта.',
                icon: 'Package'
              },
              {
                step: 3,
                title: 'Помести файл в папку mods',
                description: 'Открой папку .minecraft/mods (если её нет - создай) и перемести туда скачанный файл. Запусти игру!',
                icon: 'FolderOpen'
              }
            ].map((item) => (
              <Card key={item.step} className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Icon name={item.icon as any} className="text-primary" size={20} />
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertCircle" className="text-accent" size={20} />
                Важно знать
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Используй только на серверах, где разрешены моды, или в одиночной игре</p>
              <p>• Некоторые античиты могут обнаружить читы - используй на свой риск</p>
              <p>• Регулярно обновляй читы для лучшей совместимости и безопасности</p>
              <p>• При проблемах - пиши в наш Discord или Telegram</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 bg-card/50 backdrop-blur"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
            Последние новости
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Будь в курсе всех обновлений
          </p>

          <div className="space-y-6">
            {news.map((item, index) => (
              <Card 
                key={index} 
                className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Calendar" className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription>{item.content}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      <Icon name="Newspaper" size={14} className="mr-1" />
                      Новость
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-secondary/30 bg-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Bell" className="text-secondary" size={20} />
                Подписка на уведомления
              </CardTitle>
              <CardDescription>
                Получай автоматические уведомления о новых версиях читов и важных обновлениях прямо в браузере
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Icon name="BellRing" className="mr-2" size={16} />
                Включить уведомления
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Остались вопросы?
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Свяжись с нами любым удобным способом
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={32} />
                </div>
                <CardTitle>Discord</CardTitle>
                <CardDescription>
                  Присоединяйся к нашему серверу для общения и поддержки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Открыть Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" className="text-secondary" size={32} />
                </div>
                <CardTitle>Telegram</CardTitle>
                <CardDescription>
                  Быстрая поддержка и новости в нашем Telegram канале
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  Открыть Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur hover:border-accent/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-accent" size={32} />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  Напиши нам на почту для деловых вопросов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Написать Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-border">
              <span className="text-sm font-bold">MC</span>
            </div>
            <span className="text-lg font-bold text-primary">MineCheats</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Бесплатные читы для Minecraft. Все права защищены © 2024
          </p>
          <p className="text-xs text-muted-foreground">
            Используйте читы ответственно. Мы не несем ответственности за баны на серверах.
          </p>
        </div>
      </footer>
    </div>
  );
}
