// Данные меню для каждого ресторана
const menuData = {
  // Bedduin (ID: 1)
  '1': [
    {
      category: 'main',
      items: [
        {
          id: '101',
          name: 'Рибай стейк',
          description: 'Сочный стейк из мраморной говядины, приготовленный на гриле до идеальной прожарки',
          price: 7500,
          image: 'img/ribeye.jpg',
          category: 'main'
        },
        {
          id: '102',
          name: 'Филе миньон',
          description: 'Нежнейшее филе говядины с соусом из красного вина и трюфельным маслом',
          price: 8200,
          image: 'img/filetmignon.jpg',
          category: 'main'
        },
        {
          id: '103',
          name: 'Стриплойн стейк',
          description: 'Классический стейк из отруба стриплойн с ароматными травами',
          price: 6800,
          image: 'img/striploin.jpg',
          category: 'main'
        },
        {
          id: '104',
          name: 'Томагавк',
          description: 'Впечатляющий стейк на кости, идеально подходит для двоих',
          price: 12500,
          image: 'img/tomahawk.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '105',
          name: 'Карпаччо из говядины',
          description: 'Тонко нарезанная сырая говядина с рукколой, пармезаном и трюфельным маслом',
          price: 3500,
          image: 'img/carpaccio.jpg',
          category: 'starters'
        },
        {
          id: '106',
          name: 'Тартар из говядины',
          description: 'Рубленая сырая говядина с каперсами, луком и специями',
          price: 3800,
          image: 'img/tartar.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '107',
          name: 'Салат Цезарь с курицей',
          description: 'Классический салат с куриной грудкой, гренками и соусом Цезарь',
          price: 2800,
          image: 'img/caesar.jpg',
          category: 'salads'
        },
        {
          id: '108',
          name: 'Греческий салат',
          description: 'Свежие овощи, оливки и сыр фета с оливковым маслом',
          price: 2500,
          image: 'img/greek-salad.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '109',
          name: 'Красное вино',
          description: 'Бокал премиального красного вина',
          price: 2500,
          image: 'img/red-wine.jpg',
          category: 'drinks'
        },
        {
          id: '110',
          name: 'Свежевыжатый сок',
          description: 'Апельсиновый, яблочный или морковный на выбор',
          price: 1200,
          image: 'img/juice.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '111',
          name: 'Чизкейк',
          description: 'Нежный чизкейк с ягодным соусом',
          price: 1800,
          image: 'img/cheesecake.jpg',
          category: 'desserts'
        },
        {
          id: '112',
          name: 'Шоколадный фондан',
          description: 'Теплый шоколадный кекс с жидкой начинкой и шариком мороженого',
          price: 2200,
          image: 'img/fondant.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Feelka Суши (ID: 2)
  '2': [
    {
      category: 'main',
      items: [
        {
          id: '201',
          name: 'Сет "Филадельфия"',
          description: 'Набор из 32 роллов: Филадельфия, Калифорния, Дракон, Аляска',
          price: 6500,
          image: 'img/philadelphia-set.jpg',
          category: 'main'
        },
        {
          id: '202',
          name: 'Ролл "Филадельфия"',
          description: 'Классический ролл с лососем, сливочным сыром и авокадо',
          price: 2200,
          image: 'img/philadelphia.jpg',
          category: 'main'
        },
        {
          id: '203',
          name: 'Ролл "Калифорния"',
          description: 'Ролл с крабовым мясом, авокадо и огурцом',
          price: 1900,
          image: 'img/california.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '204',
          name: 'Мисо суп',
          description: 'Традиционный японский суп с водорослями, тофу и зеленым луком',
          price: 1200,
          image: 'img/miso.jpg',
          category: 'starters'
        },
        {
          id: '205',
          name: 'Эдамаме',
          description: 'Молодые соевые бобы с морской солью',
          price: 1500,
          image: 'img/edamame.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '206',
          name: 'Салат с водорослями',
          description: 'Традиционный японский салат из морских водорослей',
          price: 1800,
          image: 'img/seaweed-salad.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '207',
          name: 'Зеленый чай',
          description: 'Традиционный японский зеленый чай',
          price: 800,
          image: 'img/green-tea.jpg',
          category: 'drinks'
        },
        {
          id: '208',
          name: 'Саке',
          description: 'Традиционное японское рисовое вино',
          price: 2500,
          image: 'img/sake.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '209',
          name: 'Моти',
          description: 'Японский десерт из рисового теста с начинкой',
          price: 1500,
          image: 'img/mochi.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // KFC (ID: 3)
  '3': [
    {
      category: 'main',
      items: [
        {
          id: '301',
          name: 'Баскет 16 крыльев',
          description: 'Острые куриные крылышки в фирменной панировке, 16 шт',
          price: 4500,
          image: 'img/wings-basket.png',
          category: 'main'
        },
        {
          id: '302',
          name: 'Баскет L',
          description: '6 острых куриных ножек, 6 стрипсов, 6 крыльев, 2 соуса',
          price: 5200,
          image: 'img/basket-l.jpg',
          category: 'main'
        },
        {
          id: '303',
          name: 'Твистер',
          description: 'Ролл с куриной грудкой, свежими овощами и соусом',
          price: 1500,
          image: 'img/twister.png',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '304',
          name: 'Картофель фри',
          description: 'Хрустящий картофель фри, большая порция',
          price: 800,
          image: 'img/fries.png',
          category: 'starters'
        },
        {
          id: '305',
          name: 'Наггетсы',
          description: 'Куриные наггетсы, 9 шт',
          price: 1200,
          image: 'img/nuggets.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '306',
          name: 'Цезарь с курицей',
          description: 'Салат с куриной грудкой, гренками и соусом Цезарь',
          price: 1800,
          image: 'img/caesar.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '307',
          name: 'Пепси',
          description: 'Pepsi, 0.5л',
          price: 500,
          image: 'img/pepsi.jpg',
          category: 'drinks'
        },
        {
          id: '308',
          name: 'Милкшейк',
          description: 'Ванильный, шоколадный или клубничный на выбор',
          price: 900,
          image: 'img/milkshake.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '309',
          name: 'Мороженое',
          description: 'Мягкое мороженое с карамельным соусом',
          price: 700,
          image: 'img/ice-cream.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Bahandi (ID: 4)
  '4': [
    {
      category: 'main',
      items: [
        {
          id: '401',
          name: 'Бургер "Классик"',
          description: 'Сочная говяжья котлета, сыр чеддер, салат, помидор, соус',
          price: 2200,
          image: 'img/classic-burger.jpg',
          category: 'main'
        },
        {
          id: '402',
          name: 'Бургер "Двойной сыр"',
          description: 'Две говяжьи котлеты, двойной сыр, бекон, соус BBQ',
          price: 2800,
          image: 'img/double-cheese.jpg',
          category: 'main'
        },
        {
          id: '403',
          name: 'Бургер "Казахский"',
          description: 'Говяжья котлета, казы, сыр, лук, специальный соус',
          price: 2500,
          image: 'img/kazakh-burger.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '404',
          name: 'Картофель фри',
          description: 'Хрустящий картофель фри с фирменным соусом',
          price: 800,
          image: 'img/fries-bahandi.jpg',
          category: 'starters'
        },
        {
          id: '405',
          name: 'Луковые кольца',
          description: 'Хрустящие луковые кольца в панировке',
          price: 1000,
          image: 'img/onion-rings.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '406',
          name: 'Коул слоу',
          description: 'Свежий салат из капусты и моркови',
          price: 700,
          image: 'img/coleslaw.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '407',
          name: 'Кока-кола',
          description: 'Coca-Cola, 0.5л',
          price: 500,
          image: 'img/cola.jpg',
          category: 'drinks'
        },
        {
          id: '408',
          name: 'Милкшейк',
          description: 'Ванильный, шоколадный или клубничный на выбор',
          price: 1200,
          image: 'img/milkshake.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '409',
          name: 'Чизкейк',
          description: 'Нежный чизкейк с ягодным соусом',
          price: 1500,
          image: 'img/cheesecake.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Додо пицца (ID: 5)
  '5': [
    {
      category: 'main',
      items: [
        {
          id: '501',
          name: 'Пепперони',
          description: 'Пицца с томатным соусом, моцареллой и пепперони',
          price: 2500,
          image: 'img/pepperoni.jpg',
          category: 'main'
        },
        {
          id: '502',
          name: 'Четыре сыра',
          description: 'Пицца с моцареллой, пармезаном, дор блю и чеддером',
          price: 2800,
          image: 'img/four-cheese.jpg',
          category: 'main'
        },
        {
          id: '503',
          name: 'Маргарита',
          description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
          price: 2200,
          image: 'img/margherita.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '504',
          name: 'Додстер',
          description: 'Ролл с курицей, свежими овощами и соусом',
          price: 1200,
          image: 'img/dodster.jpg',
          category: 'starters'
        },
        {
          id: '505',
          name: 'Картофельные дольки',
          description: 'Запеченные картофельные дольки с соусом',
          price: 900,
          image: 'img/potato-wedges.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '506',
          name: 'Цезарь',
          description: 'Салат с куриной грудкой, гренками и соусом Цезарь',
          price: 1800,
          image: 'img/caesar.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '507',
          name: 'Кока-кола',
          description: 'Coca-Cola, 0.5л',
          price: 500,
          image: 'img/cola.jpg',
          category: 'drinks'
        },
        {
          id: '508',
          name: 'Сок',
          description: 'Яблочный или апельсиновый на выбор, 0.5л',
          price: 600,
          image: 'img/juice.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '509',
          name: 'Чизкейк Нью-Йорк',
          description: 'Классический американский чизкейк',
          price: 1500,
          image: 'img/cheesecake.jpg',
          category: 'desserts'
        },
        {
          id: '510',
          name: 'Шоколадный маффин',
          description: 'Теплый шоколадный маффин с начинкой',
          price: 900,
          image: 'img/muffin.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Asian Master (ID: 6)
  '6': [
    {
      category: 'main',
      items: [
        {
          id: '601',
          name: 'Вок с курицей',
          description: 'Лапша с курицей, овощами и соусом терияки',
          price: 2200,
          image: 'img/chicken-wok.jpg',
          category: 'main'
        },
        {
          id: '602',
          name: 'Вок с говядиной',
          description: 'Рисовая лапша с говядиной, овощами и острым соусом',
          price: 2500,
          image: 'img/beef-wok.jpg',
          category: 'main'
        },
        {
          id: '603',
          name: 'Рис с морепродуктами',
          description: 'Жареный рис с креветками, кальмарами и овощами',
          price: 2800,
          image: 'img/seafood-rice.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '604',
          name: 'Спринг роллы',
          description: 'Хрустящие спринг роллы с овощами и соусом',
          price: 1200,
          image: 'img/spring-rolls.jpg',
          category: 'starters'
        },
        {
          id: '605',
          name: 'Том Ям',
          description: 'Острый тайский суп с креветками и грибами',
          price: 1800,
          image: 'img/tom-yum.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '606',
          name: 'Салат с курицей и арахисом',
          description: 'Тайский салат с курицей, арахисом и острым соусом',
          price: 1800,
          image: 'img/thai-salad.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '607',
          name: 'Тайский чай',
          description: 'Традиционный тайский чай со специями',
          price: 800,
          image: 'img/thai-tea.jpg',
          category: 'drinks'
        },
        {
          id: '608',
          name: 'Лимонад с лемонграссом',
          description: 'Освежающий лимонад с лемонграссом и мятой',
          price: 900,
          image: 'img/lemongrass.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '609',
          name: 'Манго с клейким рисом',
          description: 'Традиционный тайский десерт со спелым манго',
          price: 1500,
          image: 'img/mango-rice.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Ас болсын (ID: 7)
  '7': [
    {
      category: 'main',
      items: [
        {
          id: '701',
          name: 'Бешбармак',
          description: 'Традиционное казахское блюдо с мясом, лапшой и луком',
          price: 3500,
          image: 'img/beshbarmak.jpg',
          category: 'main'
        },
        {
          id: '702',
          name: 'Куырдак',
          description: 'Жаркое из мяса с печенью и луком',
          price: 2800,
          image: 'img/kuirdak.jpg',
          category: 'main'
        },
        {
          id: '703',
          name: 'Плов',
          description: 'Ароматный плов с бараниной и специями',
          price: 2500,
          image: 'img/plov.png',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '704',
          name: 'Казы',
          description: 'Традиционная конская колбаса',
          price: 2200,
          image: 'img/kazy.jpg',
          category: 'starters'
        },
        {
          id: '705',
          name: 'Сорпа',
          description: 'Наваристый мясной суп с овощами',
          price: 1500,
          image: 'img/sorpa.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'salads',
      items: [
        {
          id: '706',
          name: 'Шопский салат',
          description: 'Свежие овощи с брынзой и оливковым маслом',
          price: 1800,
          image: 'img/shopsky.jpg',
          category: 'salads'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '707',
          name: 'Кумыс',
          description: 'Традиционный кисломолочный напиток из кобыльего молока',
          price: 1000,
          image: 'img/kumys.jpg',
          category: 'drinks'
        },
        {
          id: '708',
          name: 'Шубат',
          description: 'Кисломолочный напиток из верблюжьего молока',
          price: 1200,
          image: 'img/shubat.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '709',
          name: 'Баурсаки',
          description: 'Традиционные казахские пончики',
          price: 1000,
          image: 'img/baursaki.jpg',
          category: 'desserts'
        },
        {
          id: '710',
          name: 'Чак-чак',
          description: 'Медовый десерт из теста',
          price: 1200,
          image: 'img/chak-chak.jpg',
          category: 'desserts'
        }
      ]
    }
  ],
  
  // Coffee Boom (ID: 8)
  '8': [
    {
      category: 'main',
      items: [
        {
          id: '801',
          name: 'Сэндвич с курицей',
          description: 'Сэндвич с куриной грудкой, авокадо и соусом',
          price: 1800,
          image: 'img/chicken-sandwich.jpg',
          category: 'main'
        },
        {
          id: '802',
          name: 'Киш с грибами',
          description: 'Французский пирог с грибами и сыром',
          price: 2200,
          image: 'img/mushroom-quiche.jpg',
          category: 'main'
        }
      ]
    },
    {
      category: 'starters',
      items: [
        {
          id: '803',
          name: 'Круассан с ветчиной и сыром',
          description: 'Свежий круассан с ветчиной и сыром',
          price: 1500,
          image: 'img/ham-croissant.jpg',
          category: 'starters'
        }
      ]
    },
    {
      category: 'drinks',
      items: [
        {
          id: '804',
          name: 'Капучино',
          description: 'Классический капучино с молочной пенкой',
          price: 1200,
          image: 'img/cappuccino.jpg',
          category: 'drinks'
        },
        {
          id: '805',
          name: 'Латте',
          description: 'Кофе с молоком и нежной пенкой',
          price: 1300,
          image: 'img/latte.jpg',
          category: 'drinks'
        },
        {
          id: '806',
          name: 'Американо',
          description: 'Классический черный кофе',
          price: 900,
          image: 'img/americano.jpg',
          category: 'drinks'
        },
        {
          id: '807',
          name: 'Раф кофе',
          description: 'Кофе со сливками и ванильным сахаром',
          price: 1500,
          image: 'img/raf.jpg',
          category: 'drinks'
        }
      ]
    },
    {
      category: 'desserts',
      items: [
        {
          id: '808',
          name: 'Круассан',
          description: 'Свежий масляный круассан',
          price: 900,
          image: 'img/croissant.jpg',
          category: 'desserts'
        },
        {
          id: '809',
          name: 'Чизкейк',
          description: 'Нежный чизкейк с ягодным соусом',
          price: 1500,
          image: 'img/cheesecake.jpg',
          category: 'desserts'
        },
        {
          id: '810',
          name: 'Тирамису',
          description: 'Классический итальянский десерт с кофейным вкусом',
          price: 1800,
          image: 'img/tiramisu.jpg',
          category: 'desserts'
        },
        {
          id: '811',
          name: 'Макарон',
          description: 'Французское миндальное печенье с начинкой, 3 шт',
          price: 1200,
          image: 'img/macaron.jpg',
          category: 'desserts'
        }
      ]
    }
  ]
};