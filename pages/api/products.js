// pages/api/products.js
export default function handler(req, res) {
  const products = [
    {
      id: 0,
      title: "Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1",
    },
    {
      id: 1,
      title: "Huawei Mate 20 Lite 64 GB (Huawei Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1",
    },
    {
      id: 2,
      title: "Huawei P20 Lite 64 GB (Huawei Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/19/280-413/9826975907890.jpg?v1",
    },
    {
      id: 3,
      title: "Meizu 16TH 64 GB (Meizu Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/24/280-413/10094991409202.jpg?v1",
    },
    {
      id: 4,
      title: "Meizu X8 64 GB (Meizu Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/25/280-413/10108030091314.jpg?v1",
    },
    {
      id: 5,
      title: "Samsung Galaxy A7 2018 64 GB (Samsung Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/22/280-413/9946187399218.jpg?v1",
    },
    {
      id: 6,
      title: "Samsung Galaxy J6 Plus 32 GB (Samsung Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/22/280-413/9941129494578.jpg?v1",
    },
    {
      id: 7,
      title: "Vestel Venus Z20 (Vestel Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/19/280-413/9841497047090.jpg?v1",
    },
    {
      id: 8,
      title: "Xiaomi Mi 8 Lite 128 GB (İthalatçı Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/22/280-413/9957349523506.jpg?v1",
    },
    {
      id: 9,
      title: "Xiaomi Mi 8 Lite 64 GB (İthalatçı Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/23/280-413/10051147202610.jpg?v1",
    },
    {
      id: 10,
      title: "Apple iPhone 7 32 GB (Apple Türkiye Garantili)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image:
        "https://productimages.hepsiburada.net/s/1/280-413/9502147641394.jpg?v1",
    },
  ];
  res.status(200).json(products);
}
