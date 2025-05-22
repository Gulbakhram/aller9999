"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Moon, Sun, X, Menu, Star, Clock, Utensils, Plus } from "lucide-react"

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [activeAuthTab, setActiveAuthTab] = useState("login")
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")
  const [scrolled, setScrolled] = useState(false)

  // Данные ресторана
  const restaurants = {
    "1": {
      name: "Bedduin",
      image: "/img/стэйк.jpg",
      rating: 4.8,
      reviews: 124,
      deliveryTime: "25-35 мин",
      cuisine: "Стейки, Гриль, Европейская кухня",
      description:
        "Bedduin — ресторан премиального мяса, где каждый стейк готовится с идеальной прожаркой и ароматом открытого огня. Мы предлагаем изысканные блюда, вдохновлённые традициями гриль-кухни, в сочетании с авторскими соусами и гарнирами.",
    },
    "2": {
      name: "Feelka Суши",
      image: "/img/feelka.jpg",
      rating: 4.7,
      reviews: 98,
      deliveryTime: "30-40 мин",
      cuisine: "Японская кухня, Суши",
      description:
        "Аутентичная японская кухня от шеф-повара из Токио. Мы используем только свежие ингредиенты и традиционные рецепты для создания настоящих японских блюд.",
    },
    "3": {
      name: "KFC",
      image: "/img/KFC.jpg",
      rating: 4.5,
      reviews: 158,
      deliveryTime: "25-35 мин",
      cuisine: "Американская кухня, Фастфуд",
      description:
        "KFC — это легендарная сеть ресторанов быстрого питания, известная своими сочными куриными блюдами, приготовленными по оригинальному рецепту с 11 специями и травами. Быстро, вкусно и сытно — идеальный выбор для обеда или ужина.",
    },
    "4": {
      name: "Bahandi",
      image: "/img/bahandi.jpg",
      rating: 4.8,
      reviews: 118,
      deliveryTime: "25-35 мин",
      cuisine: "Бургеры, Фастфуд",
      description:
        "Современная бургерная из Казахстана с акцентом на сочные котлеты, фирменные соусы и локальные ингредиенты. Bahandi — это быстрый и вкусный способ утолить голод настоящим бургером.",
    },
    "5": {
      name: "Додо пицца",
      image: "/img/dodopizza.jpg",
      rating: 4.6,
      reviews: 134,
      deliveryTime: "30-35 мин",
      cuisine: "Пицца, Итальянская кухня",
      description:
        "Додо Пицца — международная сеть пиццерий, известная своими сочными пиццами с хрустящей корочкой и натуральными ингредиентами. Готовим с любовью, доставляем с заботой.",
    },
    "6": {
      name: "Asian Master",
      image: "/img/asian.jpg",
      rating: 4.4,
      reviews: 76,
      deliveryTime: "30-35 мин",
      cuisine: "Азиатская кухня",
      description:
        "Asian Master — это настоящий вкус Азии в каждом блюде. У нас вы найдете любимые воки, рис, лапшу и ароматные супы, приготовленные по традиционным рецептам Востока.",
    },
    "7": {
      name: "Ас болсын",
      image: "/img/Ас болсын.jpg",
      rating: 4.7,
      reviews: 92,
      deliveryTime: "30-40 мин",
      cuisine: "Казахская кухня, Национальные блюда",
      description:
        "Ас Болсын — это уютный уголок казахских традиций. Мы готовим с любовью такие блюда, как бешбармак, казы, куырдак и баурсаки, чтобы вы могли насладиться настоящим вкусом родины у себя дома.",
    },
    "8": {
      name: "Coffee Boom",
      image: "/img/Coffee Boom.JPG",
      rating: 4.8,
      reviews: 65,
      deliveryTime: "25-35 мин",
      cuisine: "Кофейня, Выпечка, Десерты",
      description:
        "Coffee Boom — это идеальное место для любителей ароматного кофе и свежей выпечки. У нас вы найдёте лучшие сорта кофе, авторские напитки, круассаны и десерты, созданные с заботой о вашем настроении.",
    },
  }

  // Получаем данные текущего ресторана
  const restaurant = restaurants[params.id]

  // Примеры блюд для меню
  const menuItems = [
    {
      id: "101",
      name: "Рибай стейк",
      description: "Сочный стейк из мраморной говядины, приготовленный на гриле до идеальной прожарки",
      price: 7500,
      image: "/img/ribeye.jpg",
      category: "main",
    },
    {
      id: "102",
      name: "Филе миньон",
      description: "Нежнейшее филе говядины с соусом из красного вина и трюфельным маслом",
      price: 8200,
      image: "/img/filetmignon.jpg",
      category: "main",
    },
    {
      id: "103",
      name: "Стриплойн стейк",
      description: "Классический стейк из отруба стриплойн с ароматными травами",
      price: 6800,
      image: "/img/striploin.jpg",
      category: "main",
    },
    {
      id: "105",
      name: "Карпаччо из говядины",
      description: "Тонко нарезанная сырая говядина с рукколой, пармезаном и трюфельным маслом",
      price: 3500,
      image: "/img/carpaccio.jpg",
      category: "starters",
    },
    {
      id: "106",
      name: "Тартар из говядины",
      description: "Рубленая сырая говядина с каперсами, луком и специями",
      price: 3800,
      image: "/img/tartar.jpg",
      category: "starters",
    },
    {
      id: "107",
      name: "Салат Цезарь с курицей",
      description: "Классический салат с куриной грудкой, гренками и соусом Цезарь",
      price: 2800,
      image: "/img/caesar.jpg",
      category: "salads",
    },
    {
      id: "109",
      name: "Красное вино",
      description: "Бокал премиального красного вина",
      price: 2500,
      image: "/img/red-wine.jpg",
      category: "drinks",
    },
  ]

  // Фильтрация блюд по категории
  const filteredMenuItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  // Эффект для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Проверка темной темы в localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Переключение темной темы
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Закрытие мобильного меню при клике на ссылку
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false)
  }

  // Добавление в корзину
  const addToCart = (item) => {
    // Здесь будет логика добавления в корзину
    setCartCount((prev) => prev + 1)
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ресторан не найден</p>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 text-gray-900 transition-colors duration-300 ${darkMode ? "dark:bg-gray-900 dark:text-gray-100" : ""}`}
    >
      {/* Хедер */}
      <header
        className={`sticky top-0 z-50 bg-white dark:bg-gray-800 transition-all duration-300 ${scrolled ? "shadow-md py-3" : "py-5"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/img/logo.png" alt="aller logo" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Навигация для десктопа */}
          <nav className={`hidden md:flex items-center space-x-6`}>
            <Link
              href="/#features"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Преимущества
            </Link>
            <Link
              href="/#restaurants"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Популярное
            </Link>
            <Link
              href="/#categories"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Рестораны
            </Link>
            <Link
              href="/#couriers"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Стать курьером
            </Link>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-all transform hover:-translate-y-0.5"
            >
              Войти
            </button>
            <button onClick={() => setCartOpen(true)} className="relative text-gray-700 dark:text-gray-200">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-200 hover:rotate-12 transition-transform"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </nav>

          {/* Кнопки для мобильных устройств */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setCartOpen(true)} className="relative text-gray-700 dark:text-gray-200">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-200">
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 dark:text-gray-200">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-8">
              <Image src="/img/logo.png" alt="aller logo" width={100} height={30} className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-5">
              <Link
                href="/#features"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Преимущества
              </Link>
              <Link
                href="/#restaurants"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Популярное
              </Link>
              <Link
                href="/#categories"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Рестораны
              </Link>
              <Link
                href="/#couriers"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Стать курьером
              </Link>
              <button
                onClick={() => {
                  setAuthModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Войти
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Модальное окно авторизации */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${authModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md mx-4 transform transition-transform duration-300 ${authModalOpen ? "scale-100" : "scale-95"}`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex border-b border-gray-200 dark:border-gray-700 w-full">
                <button
                  className={`pb-3 px-4 text-sm font-medium ${activeAuthTab === "login" ? "text-teal-500 border-b-2 border-teal-500" : "text-gray-500 dark:text-gray-400"}`}
                  onClick={() => setActiveAuthTab("login")}
                >
                  Вход
                </button>
                <button
                  className={`pb-3 px-4 text-sm font-medium ${activeAuthTab === "register" ? "text-teal-500 border-b-2 border-teal-500" : "text-gray-500 dark:text-gray-400"}`}
                  onClick={() => setActiveAuthTab("register")}
                >
                  Регистрация
                </button>
              </div>
              <button
                onClick={() => setAuthModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Форма входа */}
            {activeAuthTab === "login" && (
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="loginEmail"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="loginPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors"
                >
                  Войти
                </button>
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Нет аккаунта?{" "}
                  <button onClick={() => setActiveAuthTab("register")} className="text-teal-500 font-medium">
                    Зарегистрироваться
                  </button>
                </div>
              </form>
            )}

            {/* Форма регистрации */}
            {activeAuthTab === "register" && (
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="registerName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="registerName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerEmail"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerConfirm"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Подтвердите пароль
                  </label>
                  <input
                    type="password"
                    id="registerConfirm"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors"
                >
                  Зарегистрироваться
                </button>
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Уже есть аккаунт?{" "}
                  <button onClick={() => setActiveAuthTab("login")} className="text-teal-500 font-medium">
                    Войти
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Боковая панель корзины */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`fixed top-0 right-0 w-full max-w-md h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">Ваша корзина</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Ваша корзина пуста</p>
                </div>
              ) : (
                <div className="space-y-4">{/* Здесь будут элементы корзины */}</div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Итого:</span>
                  <span className="font-bold text-xl">0₸</span>
                </div>
                <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors">
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Шапка ресторана */}
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5">
                <div className="rounded-xl overflow-hidden h-64 md:h-80">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{restaurant.name}</h1>
                <div className="flex flex-wrap gap-6 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">({restaurant.reviews} отзывов)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-teal-500 mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-5 h-5 text-teal-500 mr-1" />
                    <span>{restaurant.cuisine}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{restaurant.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Категории меню */}
        <div className="sticky top-[72px] z-30 bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4 overflow-x-auto">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "all" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("all")}
              >
                Все
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "main" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("main")}
              >
                Основные блюда
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "starters" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("starters")}
              >
                Закуски
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "salads" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("salads")}
              >
                Салаты
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "drinks" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("drinks")}
              >
                Напитки
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "desserts" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                onClick={() => setActiveCategory("desserts")}
              >
                Десерты
              </button>
            </div>
          </div>
        </div>

        {/* Меню ресторана */}
        <section className="py-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-teal-500">{item.price}₸</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors transform hover:rotate-90 duration-300"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMenuItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">В этой категории нет блюд</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-6 relative pb-3">
                aller
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-teal-500"></span>
              </h4>
              <p className="text-gray-400 mb-6">
                Премиальная служба доставки еды. Мы доставляем не просто еду, а удовольствие и экономию вашего времени.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/theaaruss"
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/theaaruss"
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/theaaruss"
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 relative pb-3">
                Навигация
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-teal-500"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link href="/#restaurants" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Популярное
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link href="/#couriers" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Стать курьером
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 relative pb-3">
                Компания
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-teal-500"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://t.me/+IZOzL5WeKucwNjgy"
                    className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1"
                  >
                    Стать курьером
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 relative pb-3">
                Контакты
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-teal-500"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">г. Кокшетау, ул. Абылай хана 1/3, офис 142</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+7 (776) 213-68-00</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">support@aller.kz</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-400">Круглосуточно, без выходных</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} aller — служба доставки еды. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
