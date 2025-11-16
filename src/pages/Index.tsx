import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import FoxLogo from '@/components/FoxLogo';

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
  const [activeTab, setActiveTab] = useState<'services' | 'products' | 'blog'>('products');

  const products: Product[] = [
    {
      id: 1,
      name: 'Детский набор для творчества',
      price: 2500,
      category: 'product',
      description: 'Всё для развития креативности вашего ребёнка',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    },
    {
      id: 2,
      name: 'Семейная фотосессия',
      price: 12000,
      category: 'service',
      description: 'Профессиональная съёмка для сохранения тёплых воспоминаний',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/7dd05850-86b0-42e6-8b6b-b7f5ff8ecc85.jpg'
    },
    {
      id: 3,
      name: 'Настольная игра "Лисья тропа"',
      price: 1800,
      category: 'product',
      description: 'Увлекательная игра для всей семьи на 2-6 игроков',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/b558e9c3-8900-4f0e-9dbd-302946b754cc.jpg'
    },
    {
      id: 4,
      name: 'Организация праздника',
      price: 25000,
      category: 'service',
      description: 'Полная организация детского или семейного праздника',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/f261e2dc-fbdb-4561-b4a5-1dd37ef5bf6e.jpg'
    },
    {
      id: 5,
      name: 'Семейный плед "Уют"',
      price: 3200,
      category: 'product',
      description: 'Мягкий плюшевый плед для тёплых семейных вечеров',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    },
    {
      id: 6,
      name: 'Мастер-класс для детей',
      price: 1500,
      category: 'service',
      description: 'Познавательные занятия по рисованию, лепке или конструированию',
      image: 'https://cdn.poehali.dev/projects/e808d3c4-2b7a-4889-b20a-c96704be1db3/files/4389420d-a3e8-4b02-9918-d015f16731e7.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать подарок для всей семьи',
      excerpt: 'Делимся идеями подарков, которые понравятся каждому члену семьи...',
      date: '15 ноября 2025'
    },
    {
      id: 2,
      title: '5 игр для семейного вечера',
      excerpt: 'Подборка лучших настольных игр для уютных вечеров дома...',
      date: '10 ноября 2025'
    },
    {
      id: 3,
      title: 'Организация праздника: советы профи',
      excerpt: 'Как устроить незабываемый праздник без стресса и переплат...',
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
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/logo" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <FoxLogo variant="icon" size={56} />
            <div>
              <h1 className="text-3xl font-bold text-primary">Fox Family</h1>
              <p className="text-sm text-muted-foreground">Для всей семьи с любовью</p>
            </div>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <Icon name="ShoppingCart" size={22} />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs">
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

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/40 p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Всё для вашей семьи в одном месте
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Товары, услуги и незабываемые моменты для тех, кто ценит семейное тепло и уют
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Icon name="Heart" size={22} />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                О нас
              </Button>
            </div>
          </div>
        </section>

        <div className="flex gap-3 mb-10 border-b pb-1">
          <Button 
            variant={activeTab === 'products' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('products')}
            className="text-lg px-6"
          >
            Товары
          </Button>
          <Button 
            variant={activeTab === 'services' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('services')}
            className="text-lg px-6"
          >
            Услуги
          </Button>
          <Button 
            variant={activeTab === 'blog' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('blog')}
            className="text-lg px-6"
          >
            Блог
          </Button>
        </div>

        {activeTab === 'blog' ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <Badge 
                    variant={product.category === 'service' ? 'default' : 'secondary'}
                    className="absolute top-3 right-3"
                  >
                    {product.category === 'service' ? 'Услуга' : 'Товар'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button onClick={() => addToCart(product)} className="gap-2">
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t mt-20 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={24} />
                Контакты
              </h3>
              <p className="text-muted-foreground text-lg">+7 (999) 123-45-67</p>
              <p className="text-muted-foreground text-lg">hello@foxfamily.ru</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={24} />
                Адрес
              </h3>
              <p className="text-muted-foreground text-lg">г. Москва, ул. Семейная, д. 7</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={24} />
                Режим работы
              </h3>
              <p className="text-muted-foreground text-lg">Пн-Пт: 10:00 - 20:00</p>
              <p className="text-muted-foreground text-lg">Сб-Вс: 11:00 - 18:00</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p className="text-lg">© 2025 Fox Family. Создано с любовью для вашей семьи 🦊</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;