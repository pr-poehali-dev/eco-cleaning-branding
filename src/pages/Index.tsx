import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'service' | 'product';
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeTab, setActiveTab] = useState<'services' | 'products' | 'blog'>('services');

  const products: Product[] = [
    {
      id: 1,
      name: 'Очистка вентиляции',
      price: 15000,
      category: 'service',
      description: 'Профессиональная очистка вентиляционных систем с гарантией',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/7dd05850-86b0-42e6-8b6b-b7f5ff8ecc85.jpg'
    },
    {
      id: 2,
      name: 'Генеральная уборка',
      price: 8000,
      category: 'service',
      description: 'Комплексная уборка помещений с экологичными средствами',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    },
    {
      id: 3,
      name: 'Эко-средство для уборки',
      price: 450,
      category: 'product',
      description: 'Натуральное чистящее средство без химии, 500 мл',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    },
    {
      id: 4,
      name: 'Мойка окон',
      price: 3500,
      category: 'service',
      description: 'Профессиональная мойка окон без разводов',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Почему важна чистка вентиляции',
      excerpt: 'Регулярная очистка вентиляции продлевает срок службы системы и улучшает качество воздуха...',
      date: '15 ноября 2025'
    },
    {
      id: 2,
      title: 'Экологичная уборка: мифы и реальность',
      excerpt: 'Разбираем популярные заблуждения об экологичных чистящих средствах...',
      date: '10 ноября 2025'
    },
    {
      id: 3,
      title: 'Как часто нужно чистить вентиляцию в офисе',
      excerpt: 'Эксперты рекомендуют проводить профилактическую чистку не реже двух раз в год...',
      date: '5 ноября 2025'
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = activeTab === 'blog' 
    ? [] 
    : products.filter(p => 
        activeTab === 'services' ? p.category === 'service' : p.category === 'product'
      );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/12f014b8-f8cd-4cf8-911b-7d50b8d834ad.jpg" 
              alt="ECO DV" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">ECO DV</h1>
              <p className="text-xs text-muted-foreground">Экологичный клининг</p>
            </div>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
                <SheetDescription>
                  {cartItemsCount > 0 ? `${cartItemsCount} товаров в корзине` : 'Корзина пуста'}
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="ShoppingBag" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Добавьте товары в корзину</p>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4 border-b pb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.price.toLocaleString('ru-RU')} ₽</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Icon name="Plus" size={14} />
                            </Button>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-7 w-7 ml-auto"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 space-y-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Итого:</span>
                        <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Экологичный клининг и профессиональная очистка вентиляции
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Безопасные средства, профессиональное оборудование, гарантия качества
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Phone" size={20} />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <div className="flex gap-2 mb-8 border-b">
          <Button 
            variant={activeTab === 'services' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('services')}
            className="rounded-b-none"
          >
            Услуги
          </Button>
          <Button 
            variant={activeTab === 'products' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('products')}
            className="rounded-b-none"
          >
            Товары
          </Button>
          <Button 
            variant={activeTab === 'blog' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('blog')}
            className="rounded-b-none"
          >
            Блог
          </Button>
        </div>

        {activeTab === 'blog' ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant={product.category === 'service' ? 'default' : 'secondary'}>
                      {product.category === 'service' ? 'Услуга' : 'Товар'}
                    </Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button onClick={() => addToCart(product)} className="gap-2">
                    <Icon name="ShoppingCart" size={16} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h3>
              <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
              <p className="text-muted-foreground">info@ecodv.ru</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Адрес
              </h3>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Режим работы
              </h3>
              <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-muted-foreground">Сб-Вс: выходной</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 ECO DV. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
