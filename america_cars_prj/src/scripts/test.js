console.log(0 || 10);
console.log("false" && 0 && 10);

const obj = {
  name: "Vlad",
  age: 23,
};

const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    category: "Smartphone",
    price: 799,
    stock: 25,
    rating: 4.8,
    colors: ["Black", "White", "Red"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    category: "Smartphone",
    price: 999,
    stock: 15,
    rating: 4.7,
    colors: ["Black", "Green", "Silver"],
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    category: "Headphones",
    price: 349,
    stock: 40,
    rating: 4.9,
    colors: ["Black", "Blue"],
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1299,
    stock: 10,
    rating: 4.6,
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
  },
  {
    id: 5,
    name: "Apple MacBook Air M1",
    category: "Laptop",
    price: 999,
    stock: 20,
    rating: 4.9,
    specs: {
      processor: "Apple M1",
      ram: "8GB",
      storage: "256GB SSD",
    },
  },
  {
    id: 6,
    name: "Asus TUF Gaming F15",
    category: "Gaming Laptop",
    price: 1499,
    stock: 5,
    rating: 4.5,
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "NVIDIA RTX 3060",
    },
  },
  {
    id: 7,
    name: "Samsung QLED TV",
    category: "Television",
    price: 1199,
    stock: 8,
    rating: 4.7,
    size: "55 inches",
    resolution: "4K",
  },
  {
    id: 8,
    name: "Xiaomi Mi Band 6",
    category: "Fitness Tracker",
    price: 49,
    stock: 100,
    rating: 4.3,
    features: ["Heart Rate Monitor", "Sleep Tracking", "Waterproof"],
  },
  {
    id: 9,
    name: "Nikon D3500",
    category: "Camera",
    price: 499,
    stock: 12,
    rating: 4.4,
    lens: "18-55mm",
    megapixels: 24.2,
  },
  {
    id: 10,
    name: "Bose SoundLink Revolve",
    category: "Bluetooth Speaker",
    price: 199,
    stock: 30,
    rating: 4.8,
    batteryLife: "12 hours",
    colors: ["Silver", "Black"],
  },
];

function filterObjects() {
  const filterObjects = products
    .filter((product) => {
      return product.price > 199;
    })
    .reduce((acc, product) => (acc += product.price));
  return filterObjects;
}
console.log(filterObjects());
