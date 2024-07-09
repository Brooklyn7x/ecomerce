import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ProductUpdate {
  name: string;
  imageUrl: string;
  categoryId: number;
}

const productUpdates: ProductUpdate[] = [
  // Electronics (categoryId: 1)
//   { name: "4K Smart TV", imageUrl: "/images/electronics/4k-smart-tv.jpg", categoryId: 1 },
//   { name: "Wireless Headphones", imageUrl: "/images/electronics/wireless-headphones.jpg", categoryId: 1 },
//   { name: "Digital Camera", imageUrl: "/images/electronics/digital-camera.jpg", categoryId: 1 },
//   { name: "Laptop", imageUrl: "/images/electronics/laptop.jpg", categoryId: 1 },
//   { name: "Bluetooth Speaker", imageUrl: "/images/electronics/bluetooth-speaker.jpg", categoryId: 1 },
//   { name: "Gaming Console", imageUrl: "/images/electronics/gaming-console.jpg", categoryId: 1 },
//   { name: "Smartwatch", imageUrl: "/images/electronics/smartwatch.jpg", categoryId: 1 },
//   { name: "Drone", imageUrl: "/images/electronics/drone.jpg", categoryId: 1 },
//   { name: "Tablet", imageUrl: "/images/electronics/tablet.jpg", categoryId: 1 },
//   { name: "Home Security Camera", imageUrl: "/images/electronics/home-security-camera.jpg", categoryId: 1 },

  // Fashion (categoryId: 11)
  { name: "Denim Jeans", imageUrl: "/images/fashion/denim-jeans.jpg", categoryId: 11 },
  { name: "Cotton T-Shirt", imageUrl: "/images/fashion/cotton-t-shirt.jpg", categoryId: 11 },
  { name: "Leather Jacket", imageUrl: "/images/fashion/leather-jacket.jpg", categoryId: 11 },
  { name: "Summer Dress", imageUrl: "/images/fashion/summer-dress.jpg", categoryId: 11 },
  { name: "Formal Suit", imageUrl: "/images/fashion/formal-suit.jpg", categoryId: 11 },
  { name: "Athletic Shoes", imageUrl: "/images/fashion/athletic-shoes.jpg", categoryId: 11 },
  { name: "Winter Coat", imageUrl: "/images/fashion/winter-coat.jpg", categoryId: 11 },
  { name: "Silk Scarf", imageUrl: "/images/fashion/silk-scarf.jpg", categoryId: 11 },
  { name: "Leather Belt", imageUrl: "/images/fashion/leather-belt.jpg", categoryId: 11 },
  { name: "Sunglasses", imageUrl: "/images/fashion/sunglasses.jpg", categoryId: 11 },

  // Home (categoryId: 10)
  { name: "Coffee Maker", imageUrl: "/images/home/coffee-maker.jpg", categoryId: 10 },
  { name: "Bed Sheets Set", imageUrl: "/images/home/bed-sheets-set.jpg", categoryId: 10 },
  { name: "Kitchen Knife Set", imageUrl: "/images/home/kitchen-knife-set.jpg", categoryId: 10 },
  { name: "Vacuum Cleaner", imageUrl: "/images/home/vacuum-cleaner.jpg", categoryId: 10 },
  { name: "Toaster Oven", imageUrl: "/images/home/toaster-oven.jpg", categoryId: 10 },
  { name: "Throw Pillows", imageUrl: "/images/home/throw-pillows.jpg", categoryId: 10 },
  { name: "Area Rug", imageUrl: "/images/home/area-rug.jpg", categoryId: 10 },
  { name: "Table Lamp", imageUrl: "/images/home/table-lamp.jpg", categoryId: 10 },
  { name: "Cookware Set", imageUrl: "/images/home/cookware-set.jpg", categoryId: 10 },
  { name: "Blender", imageUrl: "/images/home/blender.jpg", categoryId: 10 },

  // Movies (categoryId: 9)
  { name: "Inception DVD", imageUrl: "/images/movies/inception-dvd.jpg", categoryId: 9 },
  { name: "The Godfather Blu-ray", imageUrl: "/images/movies/the-godfather-blu-ray.jpg", categoryId: 9 },
  { name: "Jurassic Park 4K", imageUrl: "/images/movies/jurassic-park-4k.jpg", categoryId: 9 },
  { name: "Pulp Fiction", imageUrl: "/images/movies/pulp-fiction.jpg", categoryId: 9 },
  { name: "The Shawshank Redemption", imageUrl: "/images/movies/the-shawshank-redemption.jpg", categoryId: 9 },
  { name: "The Matrix Trilogy", imageUrl: "/images/movies/the-matrix-trilogy.jpg", categoryId: 9 },
  { name: "Schindler's List", imageUrl: "/images/movies/schindlers-list.jpg", categoryId: 9 },
  { name: "The Lord of the Rings Trilogy", imageUrl: "/images/movies/the-lord-of-the-rings-trilogy.jpg", categoryId: 9 },
  { name: "Casablanca", imageUrl: "/images/movies/casablanca.jpg", categoryId: 9 },
  { name: "Star Wars: The Skywalker Saga", imageUrl: "/images/movies/star-wars-the-skywalker-saga.jpg", categoryId: 9 },

  // Books (categoryId: 8)
  { name: "To Kill a Mockingbird", imageUrl: "/images/books/to-kill-a-mockingbird.jpg", categoryId: 8 },
  { name: "1984", imageUrl: "/images/books/1984.jpg", categoryId: 8 },
  { name: "The Great Gatsby", imageUrl: "/images/books/the-great-gatsby.jpg", categoryId: 8 },
  { name: "Pride and Prejudice", imageUrl: "/images/books/pride-and-prejudice.jpg", categoryId: 8 },
  { name: "The Catcher in the Rye", imageUrl: "/images/books/the-catcher-in-the-rye.jpg", categoryId: 8 },
  { name: "The Hobbit", imageUrl: "/images/books/the-hobbit.jpg", categoryId: 8 },
  { name: "Harry Potter Box Set", imageUrl: "/images/books/harry-potter-box-set.jpg", categoryId: 8 },
  { name: "The Da Vinci Code", imageUrl: "/images/books/the-da-vinci-code.jpg", categoryId: 8 },
  { name: "The Alchemist", imageUrl: "/images/books/the-alchemist.jpg", categoryId: 8 },
  { name: "Brave New World", imageUrl: "/images/books/brave-new-world.jpg", categoryId: 8 },

  // Sports (categoryId: 7)
  { name: "Yoga Mat", imageUrl: "/images/sports/yoga-mat.jpg", categoryId: 7 },
  { name: "Dumbbells Set", imageUrl: "/images/sports/dumbbells-set.jpg", categoryId: 7 },
  { name: "Tennis Racket", imageUrl: "/images/sports/tennis-racket.jpg", categoryId: 7 },
  { name: "Basketball", imageUrl: "/images/sports/basketball.jpg", categoryId: 7 },
  { name: "Soccer Ball", imageUrl: "/images/sports/soccer-ball.jpg", categoryId: 7 },
  { name: "Treadmill", imageUrl: "/images/sports/treadmill.jpg", categoryId: 7 },
  { name: "Resistance Bands", imageUrl: "/images/sports/resistance-bands.jpg", categoryId: 7 },
  { name: "Jump Rope", imageUrl: "/images/sports/jump-rope.jpg", categoryId: 7 },
  { name: "Cycling Helmet", imageUrl: "/images/sports/cycling-helmet.jpg", categoryId: 7 },
  { name: "Fitness Tracker", imageUrl: "/images/sports/fitness-tracker.jpg", categoryId: 7 },

  // Mobile (categoryId: 7)
  { name: "iPhone 13", imageUrl: "/images/mobile/iphone-13.jpg", categoryId: 6 },
  { name: "Samsung Galaxy S21", imageUrl: "/images/mobile/samsung-galaxy-s21.jpg", categoryId: 6 },
  { name: "Google Pixel 6", imageUrl: "/images/mobile/google-pixel-6.jpg", categoryId: 6 },
  { name: "OnePlus 9", imageUrl: "/images/mobile/oneplus-9.jpg", categoryId: 6 },
  { name: "Xiaomi Mi 11", imageUrl: "/images/mobile/xiaomi-mi-11.jpg", categoryId: 6 },
  { name: "iPhone SE", imageUrl: "/images/mobile/iphone-se.jpg", categoryId: 6 },
  { name: "Samsung Galaxy A52", imageUrl: "/images/mobile/samsung-galaxy-a52.jpg", categoryId: 6 },
  { name: "Motorola Edge", imageUrl: "/images/mobile/motorola-edge.jpg", categoryId: 6 },
  { name: "Sony Xperia 1 III", imageUrl: "/images/mobile/sony-xperia-1-iii.jpg", categoryId: 6 },
  { name: "Nokia 8.3", imageUrl: "/images/mobile/nokia-8-3.jpg", categoryId: 6 },
];

async function updateProductImages(): Promise<void> {
  for (const product of productUpdates) {
    try {
      const updatedProduct = await prisma.product.updateMany({
        where: {
          title: product.name,
          categoryId: product.categoryId
        },
        data: {
          imageUrl: product.imageUrl
        }
      });

      if (updatedProduct.count > 0) {
        console.log(`Updated image for product: ${product.name}`);
      } else {
        console.log(`No product found with name: ${product.name}`);
      }
    } catch (error) {
      console.error(`Failed to update product ${product.name}:`, error);
    }
  }
}

async function main() {
  try {
    console.log("Starting image update process...");
    await updateProductImages();
    console.log("Image update process completed successfully!");
  } catch (error) {
    console.error("An error occurred during the image update process:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Failed to update images:", error);
});