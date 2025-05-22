document.addEventListener("DOMContentLoaded", () => {
  // Переключение мобильного меню
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const nav = document.getElementById("nav")
  const body = document.body

  function toggleMobileMenu() {
    nav.classList.toggle("active")
    mobileMenuBtn.innerHTML = nav.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>'
    body.style.overflow = nav.classList.contains("active") ? "hidden" : ""
  }

  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    toggleMobileMenu()
  })

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== mobileMenuBtn && nav.classList.contains("active")) {
      toggleMobileMenu()
    }
  })

 
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("active")) {
      toggleMobileMenu()
    }
  })

  // Эффект тени у хедера при скролле
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50)
  })

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
         // Закрытие мобильного меню, если открыто
        if (nav.classList.contains("active")) {
          toggleMobileMenu()
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Переключатель темы (темный/светлый режим)
  const themeToggle = document.getElementById("themeToggle")
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark")
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    } else {
      localStorage.setItem("theme", "light")
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    }
  })

  // Проверка сохраненной темы в localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }

   // Модальное окно авторизации/регистраци
  const loginBtn = document.getElementById("loginBtn")
  const authModal = document.getElementById("authModal")
  const closeAuth = document.getElementById("closeAuth")
  const switchToRegister = document.getElementById("switchToRegister")
  const switchToLogin = document.getElementById("switchToLogin")
  const authTabs = document.querySelectorAll(".auth-tab")
  const authForms = document.querySelectorAll(".auth-form")

  function switchAuthTab(tabName) {
    authTabs.forEach((tab) => tab.classList.remove("active"))
    authForms.forEach((form) => form.classList.remove("active"))

    document.querySelector(`.auth-tab[data-tab="${tabName}"]`).classList.add("active")
    document.getElementById(`${tabName}Form`).classList.add("active")
  }

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    authModal.classList.add("active")
  })

  closeAuth.addEventListener("click", () => {
    authModal.classList.remove("active")
  })

  switchToRegister.addEventListener("click", (e) => {
    e.preventDefault()
    switchAuthTab("register")
  })

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault()
    switchAuthTab("login")
  })

  authTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      switchAuthTab(this.getAttribute("data-tab"))
    })
  })

   // Обработка отправки форм
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    alert(`Вход выполнен!\nEmail: ${email}\nPassword: ${password}`)
    authModal.classList.remove("active")
    loginBtn.textContent = "Мой профиль"
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("registerName").value
    const email = document.getElementById("registerEmail").value
    const password = document.getElementById("registerPassword").value
    const confirm = document.getElementById("registerConfirm").value

    if (password !== confirm) {
      alert("Пароли не совпадают!")
      return
    }

    alert(`Регистрация успешна!\nИмя: ${name}\nEmail: ${email}\nPassword: ${password}`)
    authModal.classList.remove("active")
    loginBtn.textContent = "Мой профиль"
    switchAuthTab("login")
  })

  // Логика работы корзины
  const cartBtn = document.getElementById("cartBtn")
  const cartSidebar = document.getElementById("cartSidebar")
  const closeCart = document.getElementById("closeCart")
  const cartItems = document.getElementById("cartItems")
  const cartCount = document.getElementById("cartCount")
  const cartTotal = document.getElementById("cartTotal")
  const totalAmount = document.getElementById("totalAmount")
  const checkoutBtn = document.getElementById("checkoutBtn")


  let cart = JSON.parse(localStorage.getItem("cart")) || []


  updateCart()

 // Открытие/закрытие боковой панели корзины
  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active")
  })

  closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active")
  })

 // Добавление товара в корзину через кнопки меню
  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu-item-btn")) {
      const btn = e.target.closest(".menu-item-btn")
      const id = btn.getAttribute("data-id")
      const name = btn.getAttribute("data-name")
      const price = Number.parseInt(btn.getAttribute("data-price"))

      // Добавление товара в корзину
      addToCart(id, name, price)

    // Анимация кнопки
      btn.classList.add("animate")
      setTimeout(() => btn.classList.remove("animate"), 500)
    }
  })

  function addToCart(id, name, price) {
    const existingItem = cart.find((item) => item.id === id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ id, name, price, quantity: 1 })
    }

   
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
  }

   // Данные ресторанов
  const restaurants = [
    {
      id: "1",
      name: "Bedduin",
      image: "img/стэйк.jpg",
      rating: 4.8,
      reviews: 124,
      deliveryTime: "45-60 мин",
      cuisine: "Стейки, Гриль, Европейская кухня",
      categories: ["european", "kazakh"],
      description:
        "Bedduin — ресторан премиального мяса, где каждый стейк готовится с идеальной прожаркой и ароматом открытого огня. Мы предлагаем изысканные блюда, вдохновлённые традициями гриль-кухни, в сочетании с авторскими соусами и гарнирами.",
    },
    {
      id: "2",
      name: "Feelka Суши",
      image: "img/feelka.jpg",
      rating: 4.7,
      reviews: 98,
      deliveryTime: "30-40 мин",
      cuisine: "Японская кухня, Суши",
      categories: ["asian", "sushi"],
      description: "Аутентичная японская кухня от шеф-повара из Токио.",
    },
    {
      id: "3",
      name: "KFC",
      image: "img/KFC.jpg",
      rating: 4.5,
      reviews: 158,
      deliveryTime: "25-35 мин",
      cuisine: "Американская кухня, Фастфуд",
      categories: ["street"],
      description:
        "KFC — это легендарная сеть ресторанов быстрого питания, известная своими сочными куриными блюдами, приготовленными по оригинальному рецепту с 11 специями и травами. Быстро, вкусно и сытно — идеальный выбор для обеда или ужина.",
    },
    {
      id: "4",
      name: "Bahandi",
      image: "img/bahandi.jpg",
      rating: 4.8,
      reviews: 118,
      deliveryTime: "25-35 мин",
      cuisine: "Бургеры, Street food",
      categories: ["street"],
      description:
        "Современная бургерная из Казахстана с акцентом на сочные котлеты, фирменные соусы и локальные ингредиенты. Bahandi — это быстрый и вкусный способ утолить голод настоящим бургером.",
    },
    {
      id: "5",
      name: "Додо пицца",
      image: "img/dodopizza.jpg",
      rating: 4.6,
      reviews: 134,
      deliveryTime: "30-35 мин",
      cuisine: "Пицца, Итальянская кухня",
      categories: ["pizza"],
      description:
        "Додо Пицца — международная сеть пиццерий, известная своими сочными пиццами с хрустящей корочкой и натуральными ингредиентами. Готовим с любовью, доставляем с заботой.",
    },
    {
      id: "6",
      name: "Asian Master",
      image: "img/asian.jpg",
      rating: 4.4,
      reviews: 76,
      deliveryTime: "25-35 мин",
      cuisine: "Азиатская кухня",
      categories: ["asian"],
      description:
        "Asian Master — это настоящий вкус Азии в каждом блюде. У нас вы найдете любимые воки, рис, лапшу и ароматные супы, приготовленные по традиционным рецептам Востока.",
    },
    {
      id: "7",
      name: "Ас болсын",
      image: "img/Ас болсын.jpg",
      rating: 4.7,
      reviews: 92,
      deliveryTime: "30-40 мин",
      cuisine: "Казахская кухня, Национальные блюда",
      categories: ["kazakh"],
      description:
        "Ас Болсын — это уютный уголок казахских традиций. Мы готовим с любовью такие блюда, как бешбармак, казы, куырдак и баурсаки, чтобы вы могли насладиться настоящим вкусом родины у себя дома.",
    },
    {
      id: "8",
      name: "Coffee Boom",
      image: "img/Coffee Boom.JPG",
      rating: 4.8,
      reviews: 65,
      deliveryTime: "25-35 мин",
      cuisine: "Кофейня, Выпечка, Десерты",
      categories: ["desserts"],
      description:
        "Coffee Boom — это идеальное место для любителей ароматного кофе и свежей выпечки. У нас вы найдёте лучшие сорта кофе, авторские напитки, круассаны и десерты, созданные с заботой о вашем настроении.",
    },
  ]

  // рендеринг
  const popularRestaurantsContainer = document.getElementById("popularRestaurants")
  if (popularRestaurantsContainer) {
    renderRestaurants(restaurants.slice(0, 4), popularRestaurantsContainer)
  }


  const restaurantsGrid = document.getElementById("restaurantsGrid")
  if (restaurantsGrid) {
    renderRestaurants(restaurants, restaurantsGrid)
  }

  function renderRestaurants(restaurantsToRender, container) {
    container.innerHTML = ""

    restaurantsToRender.forEach((restaurant) => {
      const restaurantCard = document.createElement("div")
      restaurantCard.className = "restaurant-card"
      restaurantCard.innerHTML = `
        <div class="restaurant-img">
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <div class="restaurant-rating">
            <i class="fas fa-star"></i>
            <span>${restaurant.rating}</span>
          </div>
        </div>
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <p class="restaurant-cuisine">
            <i class="fas fa-utensils"></i>
            ${restaurant.cuisine}
          </p>
          <div class="restaurant-footer">
            <p class="restaurant-delivery">
              <i class="fas fa-clock"></i>
              ${restaurant.deliveryTime}
            </p>
            <button class="view-menu-btn" data-id="${restaurant.id}">Меню</button>
          </div>
        </div>
      `
      container.appendChild(restaurantCard)
    })

   // Обработчики для кнопок "Меню"
    document.querySelectorAll(".view-menu-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const restaurantId = this.getAttribute("data-id")
        window.location.href = `restaurant.html?id=${restaurantId}`
      })
    })
  }

  // Фильтрация ресторанов по категориям
  const categoryTabs = document.querySelectorAll(".category-tab")

  if (categoryTabs.length > 0) {
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        
        categoryTabs.forEach((t) => t.classList.remove("active"))

       
        this.classList.add("active")

       
        const category = this.getAttribute("data-category")

       
        if (category === "all") {
          renderRestaurants(restaurants, restaurantsGrid)
        } else {
          const filteredRestaurants = restaurants.filter(
            (restaurant) => restaurant.categories && restaurant.categories.includes(category),
          )
          renderRestaurants(filteredRestaurants, restaurantsGrid)
        }
      })
    })
  }

  // Обновление интерфейса корзины
  function updateCart() {
    // Подсчет общего количества товаров
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems

    // Отрисовка товаров в корзине
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-basket"></i>
          <p>Ваша корзина пуста</p>
        </div>
      `
      cartTotal.style.display = "none"
      checkoutBtn.style.display = "none"
    } else {
      cartItems.innerHTML = ""
      cart.forEach((item) => {
        const cartItemElement = document.createElement("div")
        cartItemElement.className = "cart-item"
        cartItemElement.innerHTML = `
          <div class="cart-item-img">
            <img src="https://via.placeholder.com/80" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-price">${item.price}₸</div>
            <div class="cart-item-actions">
              <div class="quantity-control">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
              <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `
        cartItems.appendChild(cartItemElement)
      })

      // Расчет общей суммы
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      totalAmount.textContent = `${total}₸`
      cartTotal.style.display = "flex"
      checkoutBtn.style.display = "block"
    }

    // Обработчики для кнопок "+/-" и удаления
    document.querySelectorAll(".quantity-btn.minus").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        const item = cart.find((item) => item.id === id)

        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          cart = cart.filter((item) => item.id !== id)
        }

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart))

        updateCart()
      })
    })

    document.querySelectorAll(".quantity-btn.plus").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        const item = cart.find((item) => item.id === id)
        item.quantity += 1

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart))

        updateCart()
      })
    })

    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        cart = cart.filter((item) => item.id !== id)

        
        localStorage.setItem("cart", JSON.stringify(cart))

        updateCart()
      })
    })
  }

   // Оформление заказа
  checkoutBtn.addEventListener("click", () => {
    if (loginBtn.textContent === "Войти") {
      alert("Пожалуйста, войдите или зарегистрируйтесь для оформления заказа")
      authModal.classList.add("active")
      cartSidebar.classList.remove("active")
    } else {
      alert("Заказ оформлен! Сумма: " + totalAmount.textContent)
      cart = []
      localStorage.removeItem("cart")
      updateCart()
      cartSidebar.classList.remove("active")
    }
  })

  // Анимация и прокрутка
  function animateOnScroll() {
    const elements = document.querySelectorAll(".feature, .menu-item, .testimonial, .restaurant-card, .category-card")
    const windowHeight = window.innerHeight

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementPosition < windowHeight - elementVisible) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

 
  document.querySelectorAll(".feature, .menu-item, .testimonial, .restaurant-card, .category-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })


  animateOnScroll()


  window.addEventListener("scroll", animateOnScroll)

  // Горизонтальный скролл для ресторановl
  function initRestaurantScroll() {
    const scrollContainer = document.querySelector(".restaurants-scroll-container")
    if (scrollContainer) {
      let isDown = false
      let startX
      let scrollLeft

      scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true
        startX = e.pageX - scrollContainer.offsetLeft
        scrollLeft = scrollContainer.scrollLeft
      })

      scrollContainer.addEventListener("mouseleave", () => {
        isDown = false
      })

      scrollContainer.addEventListener("mouseup", () => {
        isDown = false
      })

      scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - scrollContainer.offsetLeft
        const walk = (x - startX) * 2
        scrollContainer.scrollLeft = scrollLeft - walk
      })
    }
  }

  initRestaurantScroll()
})
