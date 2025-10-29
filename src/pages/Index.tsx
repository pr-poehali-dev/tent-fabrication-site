import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const products = [
    {
      title: 'Складские ангары',
      description: 'Прочные конструкции для хранения товаров и материалов',
      size: 'от 100 до 2000 м²',
      icon: 'Warehouse'
    },
    {
      title: 'Производственные ангары',
      description: 'Просторные помещения для организации производства',
      size: 'от 200 до 5000 м²',
      icon: 'Factory'
    },
    {
      title: 'Спортивные комплексы',
      description: 'Тентовые сооружения для спортивных мероприятий',
      size: 'от 300 до 3000 м²',
      icon: 'Trophy'
    },
    {
      title: 'Сельхоз ангары',
      description: 'Надежная защита для техники и урожая',
      size: 'от 150 до 4000 м²',
      icon: 'Tractor'
    }
  ];

  const advantages = [
    { icon: 'Clock', title: 'Быстрый монтаж', text: 'Установка за 7-14 дней' },
    { icon: 'BadgeRussianRuble', title: 'Выгодная цена', text: 'На 40% дешевле капитальных построек' },
    { icon: 'Shield', title: 'Надежность', text: 'Гарантия 10 лет на конструкцию' },
    { icon: 'Snowflake', title: 'Всесезонность', text: 'Эксплуатация при -50°C до +70°C' },
    { icon: 'Wrench', title: 'Под ключ', text: 'Проектирование, производство, монтаж' },
    { icon: 'Truck', title: 'Мобильность', text: 'Возможность демонтажа и переноса' }
  ];

  const projects = [
    {
      title: 'Складской комплекс "Сибирь"',
      area: '1500 м²',
      location: 'Новосибирск',
      image: 'https://cdn.poehali.dev/projects/9f5e362a-ebde-43c9-bd4e-1788fc22defc/files/bea53591-cb1d-41d0-80d6-383b2d6bc26b.jpg'
    },
    {
      title: 'Производственный цех',
      area: '2200 м²',
      location: 'Бердск',
      image: 'https://cdn.poehali.dev/projects/9f5e362a-ebde-43c9-bd4e-1788fc22defc/files/9d70cc63-549e-42d5-8f15-f03f0435b5af.jpg'
    },
    {
      title: 'Логистический центр',
      area: '3000 м²',
      location: 'Новосибирск',
      image: 'https://cdn.poehali.dev/projects/9f5e362a-ebde-43c9-bd4e-1788fc22defc/files/aebf7f1d-4106-4946-bedf-0e51c63d6c29.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">СибАнгар</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Тентовые ангары <span className="text-primary">под ключ</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Производство и монтаж в Новосибирске. Быстро, надёжно, выгодно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10 лет</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">7-14 дней</div>
                  <div className="text-sm text-muted-foreground">Монтаж</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/9f5e362a-ebde-43c9-bd4e-1788fc22defc/files/bea53591-cb1d-41d0-80d6-383b2d6bc26b.jpg" 
                alt="Тентовый ангар" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">Тентовые ангары для любых задач</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={product.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-primary">{product.size}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Преимущества тентовых ангаров</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl hover-scale">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={adv.icon} size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground">Наши работы в Новосибирске и области</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Icon name="Ruler" size={16} />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании СибАнгар</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Мы специализируемся на производстве и монтаже тентовых ангаров с 2015 года. 
                  За это время реализовали более 200 проектов по всей Сибири.
                </p>
                <p>
                  Наши конструкции отличаются высоким качеством материалов, надежностью каркаса 
                  и быстрыми сроками монтажа. Работаем по технологии "под ключ".
                </p>
                <p>
                  Собственное производство в Новосибирске позволяет контролировать качество 
                  на всех этапах и предлагать конкурентные цены.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} className="text-secondary" />
                  <div>
                    <div className="font-bold">Сертификация</div>
                    <div className="text-sm text-muted-foreground">ГОСТ, ISO</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={32} className="text-secondary" />
                  <div>
                    <div className="font-bold">Команда</div>
                    <div className="text-sm text-muted-foreground">50+ специалистов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/9f5e362a-ebde-43c9-bd4e-1788fc22defc/files/aebf7f1d-4106-4946-bedf-0e51c63d6c29.jpg" 
                alt="Команда СибАнгар" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Рассчитать стоимость</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и получите расчет в течение часа</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Форма заявки</CardTitle>
                <CardDescription>Заполните данные для расчета стоимости ангара</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Петров" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь ангара (м²)</label>
                    <Input 
                      type="number" 
                      placeholder="500" 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea 
                      placeholder="Укажите назначение ангара, особые требования..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-2" />
                <div className="font-semibold">Телефон</div>
                <div className="text-muted-foreground">+7 (383) 123-45-67</div>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@sibangar.ru</div>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-2" />
                <div className="font-semibold">Адрес</div>
                <div className="text-muted-foreground">г. Новосибирск</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} />
                <span className="text-xl font-bold">СибАнгар</span>
              </div>
              <p className="text-sm text-gray-400">
                Производство тентовых ангаров в Новосибирске
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Складские ангары</li>
                <li>Производственные ангары</li>
                <li>Спортивные комплексы</li>
                <li>Сельхоз ангары</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (383) 123-45-67</li>
                <li>info@sibangar.ru</li>
                <li>г. Новосибирск</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 СибАнгар. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
