require('dotenv').config();
const mongoose = require('mongoose');
const Route = require('./models/Route'); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const initialRoutes = [
  {
    title: "Подорож до Карпат",
    description: "Гори, чисте повітря, неймовірні краєвиди.",
    location: "Карпати",
    tags: ["гори", "похід", "природа"],
    popularity: 5,
  },
  {
    title: "Морський відпочинок в Одесі",
    description: "Відпочинок на березі моря з насиченим нічним життям.",
    location: "Одеса",
    tags: ["море", "пляж", "відпочинок"],
    popularity: 4,
  },
  {
    title: "Подорож історичними місцями Львова",
    description: "Екскурсія містом Львів з багатою історією та культурою.",
    location: "Львів",
    tags: ["історія", "місто", "екскурсія"],
    popularity: 3,
  },
  {
    title: "Еко-тур на Шацькі озера",
    description: "Насолоджуйтесь природою національного парку Шацькі озера.",
    location: "Шацьк",
    tags: ["озера", "екотуризм", "природа"],
    popularity: 5,
  },
  {
    title: "Відпочинок на Синевирі",
    description: "Відвідайте одне з найвідоміших озер України.",
    location: "Синевир",
    tags: ["озеро", "гори", "природа"],
    popularity: 4,
  },
];

const seedRoutes = async () => {
  try {
    await Route.deleteMany(); 
    await Route.insertMany(initialRoutes);
    console.log("Дані успішно додано!");
    process.exit();
  } catch (error) {
    console.error("Помилка при додаванні даних:", error);
    process.exit(1);
  }
};

seedRoutes();