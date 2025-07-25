import ProductRepository from "../repositories/product.repository";
import UserRepository from "../repositories/user.repository";

export const preloadData = async () => {
  // USERS
  const existingUsers = await UserRepository.find();
  if (existingUsers.length === 0) {
    await UserRepository.save([
      {
        name: "Ana",
        lastname: "Pérez",
        email: "ana@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Luis",
        lastname: "García",
        email: "luis@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Sofía",
        lastname: "Martínez",
        email: "sofia@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Carlos",
        lastname: "López",
        email: "carlos@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Julia",
        lastname: "Ramírez",
        email: "julia@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Marcos",
        lastname: "Díaz",
        email: "marcos@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Valentina",
        lastname: "Gómez",
        email: "valentina@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Tomás",
        lastname: "Fernández",
        email: "tomas@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Laura",
        lastname: "Castro",
        email: "laura@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: false,
      },
      {
        name: "Facundo",
        lastname: "Molina",
        email: "facundo@example.com",
        password: "1234",
        confirmPassword: "1234",
        isAdmin: true,
      },
    ]);
    console.log("✅ 10 usuarios precargados");
  }

  // PRODUCTS
  const existingProducts = await ProductRepository.find();
  if (existingProducts.length === 0) {
    await ProductRepository.save([
      {
        name: "Mouse Gamer",
        description: "Mouse óptico con RGB",
        price: 4999.99,
        stock: 100,
      },
      {
        name: "Teclado Mecánico",
        description: "Switches azules retroiluminado",
        price: 8999.99,
        stock: 50,
      },
      {
        name: "Monitor 24'' FHD",
        description: "Resolución 1920x1080 con HDMI",
        price: 59999.99,
        stock: 30,
      },
      {
        name: "Auriculares Inalámbricos",
        description: "Bluetooth 5.0, micrófono integrado",
        price: 12999.99,
        stock: 80,
      },
      {
        name: "Webcam HD",
        description: "Ideal para videollamadas y streaming",
        price: 7999.99,
        stock: 40,
      },
      {
        name: "Notebook Ryzen 5",
        description: "8GB RAM, 512GB SSD, Windows 11",
        price: 389999.99,
        stock: 15,
      },
      {
        name: "Silla Gamer",
        description: "Ergonómica, respaldo reclinable",
        price: 74999.99,
        stock: 25,
      },
      {
        name: "Pad Mouse XL",
        description: "Antideslizante, superficie suave",
        price: 2999.99,
        stock: 200,
      },
      {
        name: "Disco Externo 1TB",
        description: "USB 3.0, portátil",
        price: 34999.99,
        stock: 60,
      },
      {
        name: "Lámpara LED Escritorio",
        description: "Brillo ajustable, carga USB",
        price: 6999.99,
        stock: 90,
      },
    ]);
    console.log("✅ 10 productos precargados");
  }
};
