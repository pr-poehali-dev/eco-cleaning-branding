import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FoxLogo from '@/components/FoxLogo';
import Icon from '@/components/ui/icon';

const LogoShowcase = () => {
  const downloadSVG = (variant: string) => {
    alert(`Функция скачивания ${variant} логотипа будет доступна в следующей версии`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-3">Fox Family</h1>
          <p className="text-xl text-muted-foreground">Брендбук и гайдлайн по использованию логотипа</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        <section>
          <h2 className="text-4xl font-bold mb-8">Варианты логотипа</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Полный логотип</CardTitle>
                <CardDescription>Основной вариант с названием снизу</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="bg-muted/30 p-8 rounded-lg w-full flex justify-center">
                  <FoxLogo variant="full" size={100} />
                </div>
                <Button onClick={() => downloadSVG('full')} variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать SVG
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Горизонтальный</CardTitle>
                <CardDescription>Для широких форматов (шапка сайта, баннеры)</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="bg-muted/30 p-8 rounded-lg w-full flex justify-center">
                  <FoxLogo variant="horizontal" size={60} />
                </div>
                <Button onClick={() => downloadSVG('horizontal')} variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать SVG
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Иконка</CardTitle>
                <CardDescription>Для аватарок, фавиконок, маленьких размеров</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="bg-muted/30 p-8 rounded-lg w-full flex justify-center">
                  <FoxLogo variant="icon" size={100} />
                </div>
                <Button onClick={() => downloadSVG('icon')} variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать SVG
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8">Цветовая палитра</h2>
          <div className="grid gap-6 md:grid-cols-5">
            {[
              { name: 'Персиковый светлый', color: '#FFDAB9', text: 'dark' },
              { name: 'Персиковый', color: '#FFB89A', text: 'dark' },
              { name: 'Оранжевый тёплый', color: '#FF8C5A', text: 'light' },
              { name: 'Бежевый', color: '#FFF5E6', text: 'dark' },
              { name: 'Коричневый мягкий', color: '#B8866F', text: 'light' }
            ].map((item) => (
              <Card key={item.color} className="overflow-hidden">
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <span 
                    className={`font-semibold ${item.text === 'light' ? 'text-white' : 'text-gray-800'}`}
                  >
                    {item.color}
                  </span>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm font-medium">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8">Шрифты</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Caveat</CardTitle>
                <CardDescription>Основной шрифт для заголовков и логотипа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p style={{ fontFamily: 'Caveat, cursive', fontSize: '42px', fontWeight: 700 }}>
                    Fox Family
                  </p>
                  <p style={{ fontFamily: 'Caveat, cursive', fontSize: '32px', fontWeight: 600 }}>
                    Персональный дизайн
                  </p>
                  <p style={{ fontFamily: 'Caveat, cursive', fontSize: '24px' }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <Badge>Google Fonts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quicksand</CardTitle>
                <CardDescription>Шрифт для основного текста</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 700 }}>
                    Семейные товары
                  </p>
                  <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 500 }}>
                    Для всей семьи с любовью
                  </p>
                  <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px' }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <Badge>Google Fonts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8">Примеры использования</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Шапка сайта</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
                  <FoxLogo variant="horizontal" size={40} />
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm">Каталог</Button>
                    <Button variant="ghost" size="sm">О нас</Button>
                    <Button size="sm">Контакты</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Социальные сети (аватарка)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-white border-4 border-primary/20 mb-2 flex items-center justify-center">
                      <FoxLogo variant="icon" size={80} />
                    </div>
                    <p className="text-sm text-muted-foreground">Instagram / Facebook</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-white border-4 border-primary/20 mb-2 flex items-center justify-center">
                      <FoxLogo variant="icon" size={80} />
                    </div>
                    <p className="text-sm text-muted-foreground">VK / Telegram</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-xl mb-2 flex items-center justify-center p-4">
                      <FoxLogo variant="full" size={60} />
                    </div>
                    <p className="text-sm text-muted-foreground">Stories / Posts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Визитка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl p-8 max-w-md aspect-[1.75/1] flex flex-col justify-between border-2 border-primary/20">
                  <div className="flex items-center gap-4">
                    <FoxLogo variant="icon" size={50} />
                    <div>
                      <p className="text-2xl font-bold text-foreground">Fox Family</p>
                      <p className="text-sm text-muted-foreground">Для всей семьи с любовью</p>
                    </div>
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="flex items-center gap-2">
                      <Icon name="Phone" size={14} />
                      +7 (999) 123-45-67
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Mail" size={14} />
                      hello@foxfamily.ru
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Globe" size={14} />
                      www.foxfamily.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>YouTube обложка канала</CardTitle>
                <CardDescription>Размер 2560×1440 px (безопасная зона 1546×423 px)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-secondary/50 to-accent/40 rounded-lg aspect-video flex items-center justify-center p-8 border-2 border-dashed border-primary/30">
                  <div className="flex items-center gap-8 max-w-4xl">
                    <FoxLogo variant="icon" size={120} />
                    <div>
                      <h3 className="text-4xl font-bold text-foreground mb-2">Fox Family</h3>
                      <p className="text-xl text-muted-foreground">Семейные товары, услуги и идеи для вашего уюта</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Упаковка / Маркировка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-primary/30 rounded-lg p-6 text-center">
                    <FoxLogo variant="full" size={100} />
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>Этикетка на продукцию</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <FoxLogo variant="icon" size={80} />
                      <p className="mt-3 font-semibold text-foreground">Печать на упаковке</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8">Правила использования</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-500/50 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Icon name="Check" size={24} />
                  Можно
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ Использовать на светлом или белом фоне</p>
                <p>✓ Масштабировать пропорционально</p>
                <p>✓ Размещать на пастельных тёплых тонах</p>
                <p>✓ Использовать с достаточным свободным пространством вокруг</p>
                <p>✓ Сохранять читаемость на любых размерах</p>
              </CardContent>
            </Card>

            <Card className="border-red-500/50 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <Icon name="X" size={24} />
                  Нельзя
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✗ Менять цвета логотипа</p>
                <p>✗ Искажать пропорции (растягивать)</p>
                <p>✗ Размещать на пёстром фоне</p>
                <p>✗ Добавлять эффекты (тени, обводки, свечение)</p>
                <p>✗ Менять расположение элементов</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center py-8">
          <Button size="lg" className="gap-2">
            <Icon name="Download" size={20} />
            Скачать полный брендбук (PDF)
          </Button>
        </section>
      </main>
    </div>
  );
};

export default LogoShowcase;
