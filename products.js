const productsList = [
  {
    name: "Samsung Galaxy S10",
    category: "Electronics",
    subCategory: "Smartphones",
    imageUrl:
      "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYTg5ZDY1NjA2ZmI3YzZlMDNiMGFlLXNhbXN1bmctZ2FsYXh5LXMxMC1nOTczdS10aWRhay10ZXJrdW5jaS5qcGc.jpg",
    price: "64999",
    rating: "4.5",
    description:
      "The Samsung Galaxy S10 is a flagship smartphone with a 6.1-inch QHD+ display, Exynos 9820 processor, and a triple camera setup.",
  },
  {
    name: "Apple MacBook Pro",
    category: "Electronics",
    subCategory: "Laptops",
    imageUrl:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
    price: "129999",
    rating: "4.8",
    description:
      "The Apple MacBook Pro is a high-performance laptop with a 13-inch Retina display, Intel Core i5 processor, and 8GB RAM.",
  },
  {
    name: "Nike Air Max 270",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51s+egIlArS._AC_UY1000_.jpg",
    price: "8999",
    rating: "4.3",
    description:
      "The Nike Air Max 270 is a stylish and comfortable shoe with a visible Air Max unit in the heel and a breathable mesh upper.",
  },
  {
    name: "Sony PlayStation 5",
    category: "Electronics",
    subCategory: "Gaming Consoles",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61t4-CwedjL.jpg",
    price: "49999",
    rating: "4.9",
    description:
      "The Sony PlayStation 5 is a next-gen gaming console with support for 4K gaming, ray tracing, and fast loading times.",
  },
  {
    name: "Canon EOS 80D",
    category: "Electronics",
    subCategory: "Cameras",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/jgwkzgw0/dslr-camera/h/h/x/eos-80d-dslr-camera-body-with-single-lens-18-55-is-stm-16-gb-sd-original-imaeuzc6vhrxjmyh.jpeg?q=90",
    price: "79999",
    rating: "4.7",
    description:
      "The Canon EOS 80D is a versatile DSLR camera with a 24.2MP sensor, 45-point autofocus system, and Full HD video recording.",
  },
  {
    name: "Adidas Originals Superstar",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/f/v/s/-original-imagtgaqjr3zetz2.jpeg?q=90",
    price: "6999",
    rating: "4.6",
    description:
      "The Adidas Originals Superstar is a classic sneaker with a leather upper, rubber shell toe, and iconic three stripes.",
  },
  {
    name: "LG 55-inch 4K Smart TV",
    category: "Electronics",
    subCategory: "Televisions",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/n/n/q/55uq9000psd-55uq9000psd-lg-original-imaggczykg3mdzq5.jpeg?q=90",
    price: "59999",
    rating: "4.4",
    description:
      "The LG 55-inch 4K Smart TV offers a stunning visual experience with its 4K UHD resolution and support for HDR content.",
  },
  {
    name: "Fitbit Charge 4",
    category: "Electronics",
    subCategory: "Wearable Technology",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71smqRr0pmL.jpg",
    price: "14999",
    rating: "4.2",
    description:
      "The Fitbit Charge 4 is an advanced fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking.",
  },
  {
    name: "Levi's 501 Original",
    category: "Fashion",
    subCategory: "Jeans",
    imageUrl:
      "https://images-cdn.ubuy.co.in/635e5063f71d4121257071ab-levis-501-original-fit-jeans-button-fly.jpg",
    price: "3999",
    rating: "4.5",
    description:
      "The Levi's 501 Original is a timeless pair of jeans with a straight fit, button fly, and classic five-pocket styling.",
  },
  {
    name: "Bose QuietComfort 35 II",
    category: "Electronics",
    subCategory: "Headphones",
    imageUrl:
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png",
    price: "29999",
    rating: "4.8",
    description:
      "The Bose QuietComfort 35 II is a premium wireless headphone with industry-leading noise cancellation technology.",
  },
  {
    name: "Samsung 55-inch QLED TV",
    category: "Electronics",
    subCategory: "Televisions",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/918kUwIXQoL.jpg",
    price: "79999",
    rating: "4.9",
    description:
      "The Samsung 55-inch QLED TV delivers stunning picture quality with its Quantum Dot technology and 4K resolution.",
  },
  {
    name: "Fossil Gen 5 Smartwatch",
    category: "Electronics",
    subCategory: "Wearable Technology",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/k0mqtu80/smartwatch/g/q/y/ftw4024-fossil-original-imafkduygkuwe4h9.jpeg?q=90",
    price: "22999",
    rating: "4.3",
    description:
      "The Fossil Gen 5 Smartwatch is a stylish and feature-packed wearable with a built-in speaker, heart rate monitoring, and Google Assistant.",
  },
  {
    name: "Vans Old Skool",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/t/w/-original-imagg3tgrjpbdaqu-bb.jpeg?q=90",
    price: "4999",
    rating: "4.7",
    description:
      "The Vans Old Skool is a classic skate shoe with a canvas and suede upper, padded collar, and signature waffle outsole.",
  },
  {
    name: "Amazon Echo Dot",
    category: "Electronics",
    subCategory: "Smart Speakers",
    imageUrl: "https://m.media-amazon.com/images/I/81WaomQESKL._SX679_.jpg",
    price: "3499",
    rating: "4.5",
    description:
      "The Amazon Echo Dot is a smart speaker powered by Alexa, offering voice control for music, smart home devices, and more.",
  },
  {
    name: "GoPro HERO9 Black",
    category: "Electronics",
    subCategory: "Action Cameras",
    imageUrl:
      "https://m.media-amazon.com/images/I/21yB6vZ9TrL._SY300_SX300_QL70_FMwebp_.jpg",
    price: "49999",
    rating: "4.4",
    description:
      "The GoPro HERO9 Black is a versatile action camera with 5K video recording, 20MP photos, and a front-facing display.",
  },
  {
    name: "Puma Suede Classic",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/1/f/a/-original-imagqe3ygmzhffxt.jpeg?q=90",
    price: "5999",
    rating: "4.6",
    description:
      "The Puma Suede Classic is a retro sneaker with a suede upper, padded collar, and rubber outsole for enhanced traction.",
  },
  {
    name: "Dell XPS 15",
    category: "Electronics",
    subCategory: "Laptops",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81rsoANm7tL._AC_UF1000,1000_QL80_.jpg",
    price: "149999",
    rating: "4.9",
    description:
      "The Dell XPS 15 is a powerful laptop with a 15.6-inch 4K UHD display, Intel Core i7 processor, and NVIDIA GeForce GTX 1650 graphics.",
  },
  {
    name: "Nikon D5600",
    category: "Electronics",
    subCategory: "Cameras",
    imageUrl:
      "https://images.jdmagicbox.com/quickquotes/images_main/nikon-digital-cameras-06-08-2021-006-239909829-s4z75ru9.png",
    price: "59999",
    rating: "4.7",
    description:
      "The Nikon D5600 is a compact DSLR camera with a 24.2MP sensor, 39-point autofocus system, and Full HD video recording.",
  },
  {
    name: "Converse Chuck Taylor All Star",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/1000/k0bbb0w0/shoe/b/d/4/150760c-ct-hi-9-converse-optical-white-original-imafjzg2phkasaag.jpeg?q=20",
    price: "4999",
    rating: "4.5",
    description:
      "The Converse Chuck Taylor All Star is an iconic sneaker with a canvas upper, rubber toe cap, and vulcanized rubber sole.",
  },
  {
    name: "Sony WH-1000XM4",
    category: "Electronics",
    subCategory: "Headphones",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61rCUQp+pDL._AC_UF350,350_QL80_.jpg",
    price: "29999",
    rating: "4.8",
    description:
      "The Sony WH-1000XM4 is a premium wireless headphone with industry-leading noise cancellation, 30-hour battery life, and touch controls.",
  },
  {
    name: "OnePlus 8 Pro",
    category: "Electronics",
    subCategory: "Smartphones",
    imageUrl:
      "https://cdn.opstatics.com/store/20170907/assets/images/events/instant-noodle/19811/kv/kv-mo.webp",
    price: "54999",
    rating: "4.4",
    description:
      "The OnePlus 8 Pro is a flagship smartphone with a 6.78-inch QHD+ display, Snapdragon 865 processor, and quad camera setup.",
  },
  {
    name: "Adidas Ultraboost",
    category: "Fashion",
    subCategory: "Shoes",
    imageUrl:
      "https://5.imimg.com/data5/ANDROID/Default/2023/7/328802572/SX/SX/HS/146284842/product-jpeg-500x500.jpg",
    price: "12999",
    rating: "4.6",
    description:
      "The Adidas Ultraboost is a premium running shoe with a responsive Boost midsole, Primeknit upper, and supportive cage.",
  },
  {
    name: "LG 65-inch OLED TV",
    category: "Electronics",
    subCategory: "Televisions",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61z1yvcTd%2BL._SL1500_.jpg",
    price: "149999",
    rating: "4.9",
    description:
      "The LG 65-inch OLED TV offers stunning picture quality with its self-lit pixels, Dolby Vision IQ, and Dolby Atmos support.",
  },
  {
    name: "Garmin Forerunner 245",
    category: "Electronics",
    subCategory: "Wearable Technology",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/715n-MCbISL._AC_SS300_.jpg",
    price: "24999",
    rating: "4.3",
    description:
      "The Garmin Forerunner 245 is a GPS running watch with advanced performance metrics, built-in music storage, and smart notifications.",
  },
  {
    name: "Wrangler Regular Fit",
    category: "Fashion",
    subCategory: "Jeans",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71WlVBtMZkL._AC_UY1100_.jpg",
    price: "2999",
    rating: "4.5",
    description:
      "The Wrangler Regular Fit is a classic pair of jeans with a regular fit, straight leg, and durable denim construction.",
  },
  {
    name: "JBL Flip 5",
    category: "Electronics",
    subCategory: "Portable Speakers",
    imageUrl: "https://m.media-amazon.com/images/I/81nglwEY59L._SX679_.jpg",
    price: "8999",
    rating: "4.4",
    description:
      "The JBL Flip 5 is a portable Bluetooth speaker with 12 hours of playtime, IPX7 waterproof rating, and PartyBoost feature.",
  },
];

module.exports = productsList;
