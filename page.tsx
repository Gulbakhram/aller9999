"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  Moon,
  Sun,
  X,
  Menu,
  Star,
  Clock,
  Utensils,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock8,
} from "lucide-react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [activeAuthTab, setActiveAuthTab] = useState("login")
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")
  const [scrolled, setScrolled] = useState(false)

  // Популярные рестораны
  const popularRestaurants = [
    {
      id: "1",
      name: "Bedduin",
      image: "/img/стэйк.jpg",
      rating: 4.8,
      reviews: 124,
      deliveryTime: "45-60 мин",
      cuisine: "Стейки, Гриль, Европейская кухня",
      categories: ["european", "kazakh"],
    },
    {
      id: "2",
      name: "Feelka Суши",
      image: "/img/feelka.jpg",
      rating: 4.7,
      reviews: 98,
      deliveryTime: "30-40 мин",
      cuisine: "Японская кухня, Суши",
      categories: ["asian", "sushi"],
    },
    {
      id: "3",
      name: "KFC",
      image: "/img/KFC.jpg",
      rating: 4.5,
      reviews: 158,
      deliveryTime: "25-35 мин",
      cuisine: "Американская кухня, Фастфуд",
      categories: ["street"],
    },
    {
      id: "4",
      name: "Bahandi",
      image: "/img/bahandi.jpg",
      rating: 4.8,
      reviews: 118,
      deliveryTime: "25-35 мин",
      cuisine: "Бургеры, Street food",
      categories: ["street"],
    },
  ]

  // Все рестораны
  const allRestaurants = [
    ...popularRestaurants,
    {
      id: "5",
      name: "Додо пицца",
      image: "/img/dodopizza.jpg",
      rating: 4.6,
      reviews: 134,
      deliveryTime: "30-35 мин",
      cuisine: "Пицца, Итальянская кухня",
      categories: ["pizza"],
    },
    {
      id: "6",
      name: "Asian Master",
      image: "/img/asian.jpg",
      rating: 4.4,
      reviews: 76,
      deliveryTime: "25-35 мин",
      cuisine: "Азиатская кухня",
      categories: ["asian"],
    },
    {
      id: "7",
      name: "Ас болсын",
      image: "/img/Ас болсын.jpg",
      rating: 4.7,
      reviews: 92,
      deliveryTime: "30-40 мин",
      cuisine: "Казахская кухня, Национальные блюда",
      categories: ["kazakh"],
    },
    {
      id: "8",
      name: "Coffee Boom",
      image: "/img/Coffee Boom.JPG",
      rating: 4.8,
      reviews: 65,
      deliveryTime: "25-35 мин",
      cuisine: "Кофейня, Выпечка, Десерты",
      categories: ["desserts"],
    },
  ]

  // Фильтрация ресторанов по категории
  const filteredRestaurants =
    activeCategory === "all"
      ? allRestaurants
      : allRestaurants.filter((restaurant) => restaurant.categories && restaurant.categories.includes(activeCategory))

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
              href="#features"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Преимущества
            </Link>
            <Link
              href="#restaurants"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Популярное
            </Link>
            <Link
              href="#categories"
              className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 transition-colors"
            >
              Рестораны
            </Link>
            <Link
              href="#couriers"
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
                href="#features"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Преимущества
              </Link>
              <Link
                href="#restaurants"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Популярное
              </Link>
              <Link
                href="#categories"
                className="font-medium text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                onClick={handleNavLinkClick}
              >
                Рестораны
              </Link>
              <Link
                href="#couriers"
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
        {/* Герой-секция */}
        <section className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/img/allerfood.jpg')] bg-cover bg-center"></div>
          </div>

          <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Доставка еды из лучших ресторанов Казахстана
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                aller — премиальная служба доставки, которая объединяет кухни лучших ресторанов страны. Быстро, вкусно и
                удобно!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#restaurants"
                  className="px-6 py-3 bg-white text-teal-600 font-medium rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors transform hover:-translate-y-0.5"
                >
                  Выбрать ресторан
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
                <Link
                  href="#categories"
                  className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all transform hover:-translate-y-0.5"
                >
                  Смотреть все
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Секция преимуществ */}
        <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Почему выбирают нас
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 mt-2"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
                Мы делаем все, чтобы ваш опыт заказа еды был максимально удобным и приятным
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Преимущество 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500 mb-6 mx-auto">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Быстрая доставка</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Среднее время доставки 25-30 минут благодаря оптимизированным маршрутам
                </p>
              </div>

              {/* Преимущество 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500 mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v4M18.36 6.64l-2.83 2.83M23 12h-4M18.36 17.36l-2.83-2.83M12 23v-4M5.64 17.36l2.83-2.83M1 12h4M5.64 6.64l2.83 2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Гарантия качества</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Работаем только с проверенными ресторанами и тщательно отбираем партнеров
                </p>
              </div>

              {/* Преимущество 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500 mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Оплата онлайн</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Удобная и безопасная оплата картой, Apple Pay или Google Pay
                </p>
              </div>

              {/* Преимущество 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500 mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Поддержка 24/7</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Наша служба поддержки всегда готова помочь с любым вопросом
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Секция популярных ресторанов */}
        <section id="restaurants" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Популярные рестораны
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 mt-2"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
                Самые востребованные заведения нашего сервиса
              </p>
            </div>

            <div className="overflow-x-auto pb-6 -mx-4 px-4">
              <div className="flex space-x-6 min-w-max">
                {popularRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow w-72 flex-shrink-0 transform hover:-translate-y-2 duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded-full flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex items-center">
                        <Utensils className="w-4 h-4 mr-1 text-teal-500" />
                        {restaurant.cuisine}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-teal-500" />
                          {restaurant.deliveryTime}
                        </p>
                        <Link
                          href={`/restaurant/${restaurant.id}`}
                          className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-full transition-colors"
                        >
                          Меню
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Секция категорий ресторанов */}
        <section id="categories" className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Рестораны по категориям
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 mt-2"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
                Выберите кухню, которая вам по душе
              </p>
            </div>

            {/* Табы категорий */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("all")}
              >
                Все
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "asian" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("asian")}
              >
                Азиатская
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "eastern" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("eastern")}
              >
                Восточная
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "street" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("street")}
              >
                Street-food
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "european" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("european")}
              >
                Европейская
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "kazakh" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("kazakh")}
              >
                Казахская
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "pizza" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("pizza")}
              >
                Пицца
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "sushi" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("sushi")}
              >
                Суши
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "desserts" ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveCategory("desserts")}
              >
                Десерты
              </button>
            </div>

            {/* Сетка ресторанов */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex items-center">
                      <Utensils className="w-4 h-4 mr-1 text-teal-500" />
                      {restaurant.cuisine}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-teal-500" />
                        {restaurant.deliveryTime}
                      </p>
                      <Link
                        href={`/restaurant/${restaurant.id}`}
                        className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-full transition-colors"
                      >
                        Меню
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция для курьеров */}
        <section id="couriers" className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Станьте курьером aller</h2>
                <p className="text-xl opacity-90 mb-8">Зарабатывайте от 150 000₸ в месяц с гибким графиком работы</p>
                <Link
                  href="https://t.me/+IZOzL5WeKucwNjgy"
                  target="_blank"
                  className="px-6 py-3 bg-white text-blue-900 font-medium rounded-full inline-flex items-center hover:bg-gray-100 transition-colors transform hover:-translate-y-0.5"
                >
                  Подробнее
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image src="/img/aller.png" alt="Курьер" width={500} height={400} className="w-full h-auto" />
                </div>
              </div>
            </div>
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
                  <Link href="#features" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link href="#restaurants" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Популярное
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link href="#couriers" className="text-gray-400 hover:text-teal-500 transition-colors hover:pl-1">
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
                  <MapPin className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">г. Кокшетау, ул. Абылай хана 1/3, офис 142</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+7 (776) 213-68-00</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">support@aller.kz</span>
                </li>
                <li className="flex items-center">
                  <Clock8 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
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
