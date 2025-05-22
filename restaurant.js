
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM загружен, начинаем инициализацию...")


  const urlParams = new URLSearchParams(window.location.search)
  const restaurantId = urlParams.get("id") || "1" // По умолчанию ID 1
  console.log("ID ресторана:", restaurantId)

  // Данные ресторанов
  const restaurants = {
    1: {
      name: "Bedduin",
      image: "img/стэйк.jpg",
      rating: 4.8,
      reviews: 124,
      deliveryTime: "25-35 мин",
      cuisine: "Стейки, Гриль, Европейская кухня",
      description:
        "Bedduin — ресторан премиального мяса, где каждый стейк готовится с идеальной прожаркой и ароматом открытого огня. Мы предлагаем изысканные блюда, вдохновлённые традициями гриль-кухни, в сочетании с авторскими соусами и гарнирами.",
    },
    2: {
      name: "Feelka Суши",
      image: "img/feelka.jpg",
      rating: 4.7,
      reviews: 98,
      deliveryTime: "30-40 мин",
      cuisine: "Японская кухня, Суши",
      description:
        "Аутентичная японская кухня от шеф-повара из Токио. Мы используем только свежие ингредиенты и традиционные рецепты для создания настоящих японских блюд.",
    },
    3: {
      name: "KFC",
      image: "img/KFC.jpg",
      rating: 4.5,
      reviews: 158,
      deliveryTime: "25-35 мин",
      cuisine: "Американская кухня, Фастфуд",
      description:
        "KFC — это легендарная сеть ресторанов быстрого питания, известная своими сочными куриными блюдами, приготовленными по оригинальному рецепту с 11 специями и травами. Быстро, вкусно и сытно — идеальный выбор для обеда или ужина.",
    },
    4: {
      name: "Bahandi",
      image: "img/bahandi.jpg",
      rating: 4.8,
      reviews: 118,
      deliveryTime: "25-35 мин",
      cuisine: "Бургеры, Фастфуд",
      description:
        "Современная бургерная из Казахстана с акцентом на сочные котлеты, фирменные соусы и локальные ингредиенты. Bahandi — это быстрый и вкусный способ утолить голод настоящим бургером.",
    },
    5: {
      name: "Додо пицца",
      image: "img/dodopizza.jpg",
      rating: 4.6,
      reviews: 134,
      deliveryTime: "30-35 мин",
      cuisine: "Пицца, Итальянская кухня",
      description:
        "Додо Пицца — международная сеть пиццерий, известная своими сочными пиццами с хрустящей корочкой и натуральными ингредиентами. Готовим с любовью, доставляем с заботой.",
    },
    6: {
      name: "Asian Master",
      image: "img/asian.jpg",
      rating: 4.4,
      reviews: 76,
      deliveryTime: "30-35 мин",
      cuisine: "Азиатская кухня",
      description:
        "Asian Master — это настоящий вкус Азии в каждом блюде. У нас вы найдете любимые воки, рис, лапшу и ароматные супы, приготовленные по традиционным рецептам Востока.",
    },
    7: {
      name: "Ас болсын",
      image: "img/Ас болсын.jpg",
      rating: 4.7,
      reviews: 92,
      deliveryTime: "30-40 мин",
      cuisine: "Казахская кухня, Национальные блюда",
      description:
        "Ас Болсын — это уютный уголок казахских традиций. Мы готовим с любовью такие блюда, как бешбармак, казы, куырдак и баурсаки, чтобы вы могли насладиться настоящим вкусом родины у себя дома.",
    },
    8: {
      name: "Coffee Boom",
      image: "img/Coffee Boom.JPG",
      rating: 4.8,
      reviews: 65,
      deliveryTime: "25-35 мин",
      cuisine: "Кофейня, Выпечка, Десерты",
      description:
        "Coffee Boom — это идеальное место для любителей ароматного кофе и свежей выпечки. У нас вы найдёте лучшие сорта кофе, авторские напитки, круассаны и десерты, созданные с заботой о вашем настроении.",
    },
  }

  // Заполняем данные о ресторане
  function loadRestaurantData() {
    console.log("Загрузка данных о ресторане...")
    const restaurant = restaurants[restaurantId]
    if (!restaurant) {
      console.error("Ресторан не найден:", restaurantId)
      return
    }

    // Устанавливаем данные в DOM
    document.getElementById("restaurantName").textContent = restaurant.name
    document.getElementById("restaurantImage").src = restaurant.image
    document.getElementById("restaurantRating").textContent = restaurant.rating
    document.getElementById("restaurantReviews").textContent = `(${restaurant.reviews} отзыва)`
    document.getElementById("restaurantDeliveryTime").textContent = restaurant.deliveryTime
    document.getElementById("restaurantCuisine").textContent = restaurant.cuisine
    document.getElementById("restaurantDescription").textContent = restaurant.description

    // Устанавливаем заголовок страницы
    document.title = `${restaurant.name} | aller`
    console.log("Данные о ресторане загружены")
  }

  // Загрузка меню ресторана
  function loadRestaurantMenu() {
    console.log("Загрузка меню ресторана...")
    const menuContainer = document.getElementById("menuContainer")

    // Очищаем контейнер меню
    menuContainer.innerHTML = ""

    // Проверяем, доступны ли данные меню
    if (typeof menuData === "undefined") {
      console.error("Ошибка: menuData не определен")
      menuContainer.innerHTML = `
        <div class="empty-menu">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Ошибка загрузки меню. Пожалуйста, обновите страницу.</p>
        </div>
      `
      return
    }

    // Получаем меню для текущего ресторана
    const menu = menuData[restaurantId]

    if (!menu || menu.length === 0) {
      console.error("Меню не найдено для ресторана:", restaurantId)
      menuContainer.innerHTML = `
        <div class="empty-menu">
          <i class="fas fa-utensils"></i>
          <p>Меню этого ресторана пока недоступно</p>
        </div>
      `
      return
    }

    console.log("Найдено секций меню:", menu.length)

    // Создаем секции меню
    menu.forEach((section) => {
      console.log("Обработка секции:", section.category)
      const sectionElement = document.createElement("div")
      sectionElement.className = "menu-section"
      sectionElement.id = `section-${section.category}`

      // Заголовок секции
      const sectionTitle = document.createElement("h2")
      sectionTitle.className = "menu-section-title"

      // Устанавливаем название категории
      switch (section.category) {
        case "main":
          sectionTitle.textContent = "Основные блюда"
          break
        case "starters":
          sectionTitle.textContent = "Закуски"
          break
        case "salads":
          sectionTitle.textContent = "Салаты"
          break
        case "drinks":
          sectionTitle.textContent = "Напитки"
          break
        case "desserts":
          sectionTitle.textContent = "Десерты"
          break
        default:
          sectionTitle.textContent = section.category.charAt(0).toUpperCase() + section.category.slice(1)
      }

      sectionElement.appendChild(sectionTitle)

      // Создаем контейнер для элементов меню
      const itemsContainer = document.createElement("div")
      itemsContainer.className = "menu-items-grid"

      // Добавляем элементы меню
      console.log(`Найдено блюд в секции ${section.category}:`, section.items.length)
      section.items.forEach((item) => {
        console.log(`Добавление блюда: ${item.name}, категория: ${section.category}`)
        const menuItem = document.createElement("div")
        menuItem.className = "menu-item"
        menuItem.dataset.category = section.category // Устанавливаем атрибут data-category

        // Проверяем наличие изображения
        const imageUrl = item.image || "https://via.placeholder.com/300x200?text=Нет+изображения"

        menuItem.innerHTML = `
          <div class="menu-item-img">
            <img src="${imageUrl}" alt="${item.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Нет+изображения';">
          </div>
          <div class="menu-item-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="menu-item-footer">
              <div class="menu-item-price">${item.price}₸</div>
              <button class="menu-item-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        `

        itemsContainer.appendChild(menuItem)
      })

      sectionElement.appendChild(itemsContainer)
      menuContainer.appendChild(sectionElement)
    })

    console.log("Меню загружено успешно")
  }

  // Работа с категориями меню
  function setupMenuCategories() {
    console.log("Настройка категорий меню...")
    const categoryBtns = document.querySelectorAll(".menu-category-btn")
    console.log("Найдено кнопок категорий:", categoryBtns.length)

    // КЛЮЧЕВОЕ ИСПРАВЛЕНИЕ: Используем делегирование событий вместо прямого назначения обработчиков
    const menuCategoriesContainer = document.querySelector(".menu-categories")

    if (!menuCategoriesContainer) {
      console.error("Контейнер категорий меню не найден!")
      return
    }

    menuCategoriesContainer.addEventListener("click", (e) => {
      // Проверяем, что клик был по кнопке категории
      const targetBtn = e.target.closest(".menu-category-btn")
      if (!targetBtn) return

      console.log(`Клик по категории: ${targetBtn.dataset.category}`)

      // Удаляем активный класс со всех кнопок
      categoryBtns.forEach((btn) => btn.classList.remove("active"))

      // Добавляем активный класс на нажатую кнопку
      targetBtn.classList.add("active")

      // Фильтруем элементы меню
      const category = targetBtn.dataset.category
      filterMenuItems(category)
    })

    function filterMenuItems(category) {
      console.log(`Фильтрация по категории: ${category}`)
      const menuItems = document.querySelectorAll(".menu-item")
      const menuSections = document.querySelectorAll(".menu-section")

      console.log(`Найдено элементов меню: ${menuItems.length}`)
      console.log(`Найдено секций меню: ${menuSections.length}`)

      if (category === "all") {
        // Показываем все секции и элементы
        menuSections.forEach((section) => {
          section.style.display = "block"
        })
        menuItems.forEach((item) => {
          item.style.display = "block"
        })
        console.log("Показаны все элементы меню")
      } else {
        // Сначала скрываем все секции
        menuSections.forEach((section) => {
          section.style.display = "none"
        })

        // Скрываем все элементы
        menuItems.forEach((item) => {
          item.style.display = "none"
        })

        // Показываем только элементы с нужной категорией
        let foundItems = 0
        menuItems.forEach((item) => {
          const itemCategory = item.dataset.category
          const itemName = item.querySelector("h3")?.textContent || "Неизвестное блюдо"
          console.log(`Проверка блюда: ${itemName}, категория: ${itemCategory}, искомая категория: ${category}`)

          if (itemCategory === category) {
            item.style.display = "block"
            foundItems++

            // Показываем родительскую секцию
            const parentSection = item.closest(".menu-section")
            if (parentSection) {
              parentSection.style.display = "block"
              console.log(`Показана секция: ${parentSection.id}`)
            }
          }
        })

        console.log(`Найдено элементов с категорией ${category}: ${foundItems}`)

        if (foundItems === 0) {
          console.warn(`Не найдено элементов с категорией: ${category}`)
          // Показываем сообщение, если нет элементов в этой категории
          const menuContainer = document.getElementById("menuContainer")
          const noItemsMessage = document.createElement("div")
          noItemsMessage.className = "empty-category-message"
          noItemsMessage.innerHTML = `
            <i class="fas fa-search"></i>
            <p>В категории "${category}" нет блюд</p>
          `
          menuContainer.appendChild(noItemsMessage)
        }
      }
    }

    console.log("Настройка категорий меню завершена")
  }

  // Работа с корзиной
  function setupCart() {
    console.log("Настройка корзины...")
    // Обновляем счетчик корзины при загрузке
    updateCartCounter()

    // обработчики событий для кнопок добавления в корзину
    // делегирование событий
    document.addEventListener("click", (e) => {
      if (e.target.closest(".menu-item-btn")) {
        const btn = e.target.closest(".menu-item-btn")
        const id = btn.dataset.id
        const name = btn.dataset.name
        const price = Number.parseInt(btn.dataset.price)

        // Анимация кнопки
        btn.classList.add("animate")
        setTimeout(() => btn.classList.remove("animate"), 500)

        // Добавляем в корзину
        addToCart(id, name, price)
      }
    })

    function addToCart(id, name, price) {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      const existingItem = cart.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({ id, name, price, quantity: 1 })
      }

      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartCounter()
      console.log(`Товар добавлен в корзину: ${name}`)
    }

    function updateCartCounter() {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

      const cartCount = document.getElementById("cartCount")
      if (cartCount) {
        cartCount.textContent = totalItems
      }
    }

    console.log("Настройка корзины завершена")
  }

  // Инициализация
  function init() {
    console.log("Инициализация страницы ресторана...")

   
    if (typeof menuData === "undefined") {
      console.error("Ошибка: menuData не определен. Возможно, файл menu-data.js не загружен.")

      // Пробуем загрузить скрипт динамически
      const script = document.createElement("script")
      script.src = "menu-data.js"
      script.onload = () => {
        console.log("menu-data.js загружен динамически")
        continueInit()
      }
      script.onerror = () => {
        console.error("Не удалось загрузить menu-data.js")
        alert("Ошибка загрузки данных меню. Пожалуйста, обновите страницу.")
      }
      document.head.appendChild(script)
    } else {
      continueInit()
    }

    function continueInit() {
      loadRestaurantData()
      loadRestaurantMenu()
      setupMenuCategories()
      setupCart()
      console.log("Инициализация завершена")
    }
  }

 
  init()
})
