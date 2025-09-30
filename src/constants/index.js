const info = [ 
    {
    id: "deals",
    title: "Todays Deals",
    link: "#",
} ,
{
    id: "prime-video",
    title: "Amazon Prime Video",
    link: "#"
},
{
    id: "gift-cards",
    title: "Gift Cards",
    link: "#"
},
{
    id: "registry",
    title: "Registry",
    link: "#"
},
{
    id: "customer-service",
    title: "Customer Service",
    link: "#"
},
{
    id: "sell",
    title: "Sell",
    link: "#"
},
{
    id: "mobiles",
    title: "Mobiles",
    link: "#"
},
{
    id: "electronics",
    title: "Electronics",
    link: "#"
},
{
    id: "amazon-pay",
    title: "Amazon Pay",
    link: "#"
}
];

const images = [
    { id: "gif", src: "/assets/Images/mainHero.jpg", alt: "image1" , link: "https://www.amazon.in/events/greatindianfestival/?_encoding=UTF8&ref_=jup25_power_asins&bubble-id=deals-collection-powerasins-deals&pd_rd_w=3QBpQ&content-id=amzn1.sym.11bb393e-43bd-4128-a5fd-16960798c4f5&pf_rd_p=11bb393e-43bd-4128-a5fd-16960798c4f5&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=Ej8lA&pd_rd_r=9c85268d-a444-4516-94cc-f76aa2744317"},
    { id: "gaming", src: "/assets/Images/HeroImage3.jpg", alt: "image2" , link: "https://www.amazon.in/gaming/b?ie=UTF8&node=1372798031&ref_=nav_cs_gaming"},
    { id: "fashion", src: "/assets/Images/HeroImage1.jpg", alt: "image3" , link: "https://www.amazon.in/fashion/b?ie=UTF8&node=1372798031&ref_=nav_cs_fashion"},
    { id: "toys", src: "/assets/Images/HeroImage2.jpg", alt: "image4" , link: "https://www.amazon.in/toys/b?ie=UTF8&node=1372798031&ref_=nav_cs_toys"},
    ];

const laptops1 = [
    { id: "laptop1", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71crqqvVHaL._AC_SY145_.jpg", alt: "laptop1" },
    { id: "laptop2", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71o5eHSQiKL._AC_SY145_.jpg", alt: "laptop2" },
    { id: "laptop3", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_SY145_.jpg", alt: "laptop3" },
    { id: "laptop4", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71l3rBy8IPL._AC_SY145_.jpg", alt: "laptop4" },
]

const laptops2 = [
    { id: "laptop5", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/81pV6W6b0ML._AC_SY145_.jpg", alt: "laptop5" },
    { id: "laptop6", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71t-lG3LpxL._AC_SY145_.jpg", alt: "laptop6" },
    { id: "laptop7", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/8149ThY8zAL._AC_SY145_.jpg", alt: "laptop7" },
    { id: "laptop8", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71UcgypoOKL._AC_SY145_.jpg", alt: "laptop8" },
]

const laptops3 = [
    { id: "laptop9", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/61hpKVB9X2L._AC_SY145_.jpg", alt: "laptop9" },
    { id: "laptop10", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/815XAHj5XpL._AC_SY145_.jpg", alt: "laptop10" },
    { id: "laptop11", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/71W+D4R0lEL._AC_SY145_.jpg", alt: "laptop11" },
    { id: "laptop12", a:"https://www.amazon.in/ASUS-Vivobook-i7-13620H-Metallic-S3607VA-RP060WS/dp/B0F9YDMZQP/?_encoding=UTF8&pd_rd_w=Q7X1q&content-id=amzn1.sym.1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_p=1014e596-2817-4003-a89c-b44bcab1a9bb&pf_rd_r=Y4D1RCD2PWR229JR2XJ8&pd_rd_wg=W88O2&pd_rd_r=c4f335d4-1f05-42eb-9ba7-2a62521b7f86&ref_=pd_hp_d_atf_dealz_cs", src: "https://m.media-amazon.com/images/I/613+7m34z2L._AC_SY145_.jpg", alt: "laptop12" },
]

// Gadgets & Electronics Data (20+ items)
const gadgets = [
    { id: "gadget1", name: "APES Bluetooth Speaker", price: "₹2,999", originalPrice: "₹4,999", discount: "40% off", url: "https://www.amazon.in/AFERS-Bluetooth-Speaker-Wireless-Rechargeable/dp/B0CQBZX5ZG", src: "https://m.media-amazon.com/images/I/71F5eB6gFPL._AC_SX450_.jpg", alt: "APES Bluetooth Speaker" },
    { id: "gadget2", name: "Samsung Galaxy Watch4", price: "₹14,999", originalPrice: "₹24,999", discount: "40% off", url: "https://www.amazon.in/Samsung-Galaxy-Watch4-40mm-Bluetooth/dp/B097KZQBYT", src: "https://m.media-amazon.com/images/I/61wXiAgwKUL._AC_SX450_.jpg", alt: "Samsung Galaxy Watch4" },
    { id: "gadget3", name: "Apple AirPods (3rd Gen)", price: "₹17,900", originalPrice: "₹20,900", discount: "14% off", url: "https://www.amazon.in/Apple-MME73HN-AirPods-3rd-Generation/dp/B09JQL3NWT", src: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX450_.jpg", alt: "Apple AirPods 3rd Gen" },
    { id: "gadget4", name: "Xiaomi Mi 11X 5G Camera Lens", price: "₹899", originalPrice: "₹1,999", discount: "55% off", url: "https://www.amazon.in/Phone-Camera-Lens-for-Xiaomi/dp/B094Q1XHGL", src: "https://m.media-amazon.com/images/I/61NfP4nFG+L._AC_SX450_.jpg", alt: "Xiaomi Camera Lens" },
    { id: "gadget5", name: "Galaxy Z Fold4 5G", price: "₹89,999", originalPrice: "₹1,54,999", discount: "42% off", url: "https://www.amazon.in/Samsung-Galaxy-Fold4-Phantom-Storage/dp/B0B7K1VQ1T", src: "https://m.media-amazon.com/images/I/61I1txnjdQL._AC_SX450_.jpg", alt: "Galaxy Z Fold4" },
    { id: "gadget6", name: "Shure AONIC 40 Wireless", price: "₹15,990", originalPrice: "₹24,900", discount: "36% off", url: "https://www.amazon.in/Shure-AONIC-Wireless-Noise-Cancelling/dp/B09PH5NKRP", src: "https://m.media-amazon.com/images/I/71S6FXQSPGL._AC_SX450_.jpg", alt: "Shure AONIC 40" },
    { id: "gadget7", name: "Linear Wireless Earbuds", price: "₹1,299", originalPrice: "₹2,999", discount: "57% off", url: "https://www.amazon.in/Linear-Wireless-Earbuds-Bluetooth-Gaming/dp/B0CHQZFS2L", src: "https://m.media-amazon.com/images/I/614FxMrRHPL._AC_SX450_.jpg", alt: "Linear Earbuds" },
    { id: "gadget8", name: "Elgato 4K Capture Card", price: "₹18,999", originalPrice: "₹24,999", discount: "24% off", url: "https://www.amazon.in/Elgato-Game-Capture-4K60-Pro/dp/B07XC63B8Z", src: "https://m.media-amazon.com/images/I/61S1wS35DfL._AC_SX450_.jpg", alt: "Elgato Capture Card" },
    { id: "gadget9", name: "Phone Stand Adjustable", price: "₹399", originalPrice: "₹999", discount: "60% off", url: "https://www.amazon.in/Adjustable-Phone-Stand-Tablet-Holder/dp/B08N6GPYF4", src: "https://m.media-amazon.com/images/I/61K8vXGsKiL._AC_SX450_.jpg", alt: "Phone Stand" },
    { id: "gadget10", name: "Xiaomi Earbuds Basic 3", price: "₹1,499", originalPrice: "₹2,299", discount: "35% off", url: "https://www.amazon.in/Xiaomi-Earbuds-Basic-Bluetooth-Earphones/dp/B0B7T2QKXG", src: "https://m.media-amazon.com/images/I/61sT7T-1tYL._AC_SX450_.jpg", alt: "Xiaomi Earbuds" },
    { id: "gadget11", name: "Projector 4K WiFi", price: "₹12,999", originalPrice: "₹19,999", discount: "35% off", url: "https://www.amazon.in/Projector-HAPPRUN-Bluetooth-Compatible-Smartphone/dp/B08T1G7XK6", src: "https://m.media-amazon.com/images/I/71sVhqEfVAL._AC_SX450_.jpg", alt: "4K Projector" },
    { id: "gadget12", name: "Apes Speaker RGB", price: "₹2,399", originalPrice: "₹3,999", discount: "40% off", url: "https://www.amazon.in/AFERS-Bluetooth-Speaker-RGB-Gaming/dp/B0C8SGMP7R", src: "https://m.media-amazon.com/images/I/71VBG7k3DJL._AC_SX450_.jpg", alt: "RGB Speaker" },
    { id: "gadget13", name: "Linear Earbuds Pro", price: "₹1,899", originalPrice: "₹3,499", discount: "46% off", url: "https://www.amazon.in/Linear-Earbuds-Pro-Wireless-Bluetooth/dp/B0C7G2WQLK", src: "https://m.media-amazon.com/images/I/51U+3lYUl8L._AC_SX450_.jpg", alt: "Linear Pro Earbuds" },
    { id: "gadget14", name: "Projector Tripod Stand", price: "₹1,699", originalPrice: "₹2,999", discount: "43% off", url: "https://www.amazon.in/Projector-Tripod-Stand-Adjustable-Height/dp/B08XYVPGQH", src: "https://m.media-amazon.com/images/I/61xCqlXYtaL._AC_SX450_.jpg", alt: "Projector Stand" },
    { id: "gadget15", name: "FLAV Gaming Earbuds", price: "₹1,199", originalPrice: "₹2,999", discount: "60% off", url: "https://www.amazon.in/FLAV-Gaming-Earbuds-Wireless-Bluetooth/dp/B0CGZXF8NH", src: "https://m.media-amazon.com/images/I/61ZQA8m0TUL._AC_SX450_.jpg", alt: "FLAV Earbuds" },
    { id: "gadget16", name: "Apple Watch Ultra 2", price: "₹89,900", originalPrice: "₹89,900", discount: "Latest", url: "https://www.amazon.in/Apple-Watch-Ultra-GPS-Cellular/dp/B0CHX7R6WJ", src: "https://m.media-amazon.com/images/I/71pLJ8SvNDL._AC_SX450_.jpg", alt: "Apple Watch Ultra 2" },
    { id: "gadget17", name: "Lens Attachment Kit", price: "₹799", originalPrice: "₹1,499", discount: "47% off", url: "https://www.amazon.in/Phone-Camera-Lens-Kit-Universal/dp/B08XBHY9Z7", src: "https://m.media-amazon.com/images/I/71VLfJQ5HYL._AC_SX450_.jpg", alt: "Lens Kit" },
    { id: "gadget18", name: "USB-C Adapter Cable", price: "₹299", originalPrice: "₹999", discount: "70% off", url: "https://www.amazon.in/USB-C-to-USB-Adapter-Cable/dp/B08YP7ZGF5", src: "https://m.media-amazon.com/images/I/61CnQpfPfvL._AC_SX450_.jpg", alt: "USB-C Cable" },
    { id: "gadget19", name: "Apes Bluetooth Speaker Mini", price: "₹1,799", originalPrice: "₹2,999", discount: "40% off", url: "https://www.amazon.in/AFERS-Bluetooth-Speaker-Mini-Portable/dp/B0CHMD8XGR", src: "https://m.media-amazon.com/images/I/71Zk2xj9yxL._AC_SX450_.jpg", alt: "Mini Speaker" },
    { id: "gadget20", name: "FLAV Projector 4K", price: "₹14,999", originalPrice: "₹22,999", discount: "35% off", url: "https://www.amazon.in/FLAV-Projector-4K-WiFi-Bluetooth/dp/B0CGBQ5NP7", src: "https://m.media-amazon.com/images/I/71MxFGcq9PL._AC_SX450_.jpg", alt: "FLAV Projector" }
]

// Mobile Phones Data (15 items)
const mobilePhones = [
    { id: "phone1", name: "OnePlus 13R", price: "₹39,999", originalPrice: "₹49,999", discount: "20% off", url: "https://www.amazon.in/OnePlus-13R-5G-128GB-Blue/dp/B0C8QWXYZ7", src: "https://m.media-amazon.com/images/I/71vCq3vV6lL._AC_SX450_.jpg", alt: "OnePlus 13R" },
    { id: "phone2", name: "Samsung Galaxy S24 Ultra 5G", price: "₹99,999", originalPrice: "₹1,29,999", discount: "23% off", url: "https://www.amazon.in/Samsung-Galaxy-Ultra-256GB-Titanium/dp/B0CTJQZ8XQ", src: "https://m.media-amazon.com/images/I/71ZjvFX28QL._AC_SX450_.jpg", alt: "Galaxy S24 Ultra" },
    { id: "phone3", name: "OnePlus 13s", price: "₹44,999", originalPrice: "₹54,999", discount: "18% off", url: "https://www.amazon.in/OnePlus-13s-5G-256GB-Green/dp/B0CHRF7X89", src: "https://m.media-amazon.com/images/I/61vGqXX89fL._AC_SX450_.jpg", alt: "OnePlus 13s" },
    { id: "phone4", name: "iPhone 17", price: "₹79,900", originalPrice: "₹89,900", discount: "11% off", url: "https://www.amazon.in/Apple-iPhone-17-128GB-Blue/dp/B0DCKR8TYL", src: "https://m.media-amazon.com/images/I/61tMZGXkerL._AC_SX450_.jpg", alt: "iPhone 17" },
    { id: "phone5", name: "Xiaomi 14 CIVI", price: "₹42,999", originalPrice: "₹49,999", discount: "14% off", url: "https://www.amazon.in/Xiaomi-14-CIVI-5G-128GB/dp/B0CHXV8NP6", src: "https://m.media-amazon.com/images/I/71+2XZjJvOL._AC_SX450_.jpg", alt: "Xiaomi 14 CIVI" },
    { id: "phone6", name: "realme GT 7", price: "₹32,999", originalPrice: "₹39,999", discount: "18% off", url: "https://www.amazon.in/realme-GT-7-5G-128GB/dp/B0CQHM9LX8", src: "https://m.media-amazon.com/images/I/614FxMrRHPL._AC_SX450_.jpg", alt: "realme GT 7" },
    { id: "phone7", name: "iPhone 15 Pro Max", price: "₹1,34,900", originalPrice: "₹1,59,900", discount: "16% off", url: "https://www.amazon.in/Apple-iPhone-15-Pro-Max/dp/B0CHX5D6DD", src: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_SX450_.jpg", alt: "iPhone 15 Pro Max" },
    { id: "phone8", name: "Samsung Galaxy S23 FE", price: "₹49,999", originalPrice: "₹59,999", discount: "17% off", url: "https://www.amazon.in/Samsung-Galaxy-S23-FE-128GB/dp/B0CKQP8GV7", src: "https://m.media-amazon.com/images/I/71gK8hXc99L._AC_SX450_.jpg", alt: "Galaxy S23 FE" },
    { id: "phone9", name: "Nothing Phone (2a)", price: "₹23,999", originalPrice: "₹25,999", discount: "8% off", url: "https://www.amazon.in/Nothing-Phone-2a-128GB-Black/dp/B0CY8H9WXQ", src: "https://m.media-amazon.com/images/I/61+oFOkF9tL._AC_SX450_.jpg", alt: "Nothing Phone 2a" },
    { id: "phone10", name: "Google Pixel 8a", price: "₹52,999", originalPrice: "₹54,999", discount: "4% off", url: "https://www.amazon.in/Google-Pixel-8a-128GB-Obsidian/dp/B0D1YMG4HT", src: "https://m.media-amazon.com/images/I/71fVoqxFwxL._AC_SX450_.jpg", alt: "Google Pixel 8a" },
    { id: "phone11", name: "Vivo V30e 5G", price: "₹27,999", originalPrice: "₹28,999", discount: "3% off", url: "https://www.amazon.in/Vivo-V30e-5G-128GB-Silk/dp/B0D4MQVR7P", src: "https://m.media-amazon.com/images/I/71rT5HJ6sYL._AC_SX450_.jpg", alt: "Vivo V30e" },
    { id: "phone12", name: "OPPO Reno12 5G", price: "₹32,999", originalPrice: "₹36,999", discount: "11% off", url: "https://www.amazon.in/OPPO-Reno12-5G-256GB-Silver/dp/B0D6K7WQBZ", src: "https://m.media-amazon.com/images/I/71+FGj9PQXL._AC_SX450_.jpg", alt: "OPPO Reno12" },
    { id: "phone13", name: "Motorola Edge 50 Fusion", price: "₹22,999", originalPrice: "₹27,999", discount: "18% off", url: "https://www.amazon.in/Motorola-Edge-50-Fusion-128GB/dp/B0D3JBQ8VR", src: "https://m.media-amazon.com/images/I/71B+9xJ3vOL._AC_SX450_.jpg", alt: "Motorola Edge 50" },
    { id: "phone14", name: "Realme 12 Pro+ 5G", price: "₹29,999", originalPrice: "₹33,999", discount: "12% off", url: "https://www.amazon.in/Realme-12-Pro-Plus-256GB/dp/B0CXKG7R8N", src: "https://m.media-amazon.com/images/I/61ZmvV8aq3L._AC_SX450_.jpg", alt: "Realme 12 Pro+" },
    { id: "phone15", name: "Honor 200 5G", price: "₹34,999", originalPrice: "₹39,999", discount: "13% off", url: "https://www.amazon.in/Honor-200-5G-256GB-Emerald/dp/B0D7NZ9PCK", src: "https://m.media-amazon.com/images/I/61UQfmWK7WL._AC_SX450_.jpg", alt: "Honor 200 5G" }
]

// Accessories Data (15 items)
const accessories = [
    { id: "acc1", name: "Apple Watch Milanese Loop", price: "₹4,900", originalPrice: "₹6,900", discount: "29% off", url: "https://www.amazon.in/Apple-Watch-Milanese-Loop-Band/dp/B0C8FGH9X7", src: "https://m.media-amazon.com/images/I/61IQZW6yqXL._AC_SX450_.jpg", alt: "Apple Watch Band" },
    { id: "acc2", name: "AirPods Max Silver", price: "₹47,900", originalPrice: "₹59,900", discount: "20% off", url: "https://www.amazon.in/Apple-AirPods-Max-Silver/dp/B08PZHYWJS", src: "https://m.media-amazon.com/images/I/61fYqodcq4L._AC_SX450_.jpg", alt: "AirPods Max" },
    { id: "acc3", name: "Wide Angle Lens Kit", price: "₹1,299", originalPrice: "₹2,499", discount: "48% off", url: "https://www.amazon.in/Wide-Angle-Macro-Lens-Kit/dp/B08CJFP9H7", src: "https://m.media-amazon.com/images/I/71xHG7dFBUL._AC_SX450_.jpg", alt: "Lens Kit" },
    { id: "acc4", name: "USB-C to Lightning Cable", price: "₹899", originalPrice: "₹1,900", discount: "53% off", url: "https://www.amazon.in/USB-C-Lightning-Cable-Apple-Certified/dp/B08YQF5HGF", src: "https://m.media-amazon.com/images/I/611T7sxZqpL._AC_SX450_.jpg", alt: "Lightning Cable" },
    { id: "acc5", name: "Anker PowerCore 10000", price: "₹2,499", originalPrice: "₹3,999", discount: "38% off", url: "https://www.amazon.in/Anker-PowerCore-10000-Portable-Charger/dp/B072BD98CM", src: "https://m.media-amazon.com/images/I/61k9T+XGNSL._AC_SX450_.jpg", alt: "Anker PowerBank" },
    { id: "acc6", name: "Sony WH-1000XM5", price: "₹29,990", originalPrice: "₹34,990", discount: "14% off", url: "https://www.amazon.in/Sony-WH-1000XM5-Cancelling-Headphones-Bluetooth/dp/B09XS7JWHH", src: "https://m.media-amazon.com/images/I/51K+hFPBCNL._AC_SX450_.jpg", alt: "Sony Headphones" },
    { id: "acc7", name: "Logitech MX Master 3S", price: "₹8,995", originalPrice: "₹10,995", discount: "18% off", url: "https://www.amazon.in/Logitech-MX-Master-3S-Mouse/dp/B09HM94VDS", src: "https://m.media-amazon.com/images/I/61ni3t1ryqL._AC_SX450_.jpg", alt: "Logitech Mouse" },
    { id: "acc8", name: "Apple MagSafe Charger", price: "₹4,500", originalPrice: "₹4,900", discount: "8% off", url: "https://www.amazon.in/Apple-MagSafe-Charger-iPhone-12/dp/B08L5M9BTJ", src: "https://m.media-amazon.com/images/I/61uQQnUqKyL._AC_SX450_.jpg", alt: "MagSafe Charger" },
    { id: "acc9", name: "Belkin 3-in-1 Wireless Charger", price: "₹12,999", originalPrice: "₹16,999", discount: "24% off", url: "https://www.amazon.in/Belkin-3-in-1-Wireless-Charger-Stand/dp/B08JYQY1LZ", src: "https://m.media-amazon.com/images/I/61GYPr1PBVL._AC_SX450_.jpg", alt: "Belkin Charger" },
    { id: "acc10", name: "Samsung 45W Fast Charger", price: "₹3,499", originalPrice: "₹4,499", discount: "22% off", url: "https://www.amazon.in/Samsung-45W-USB-C-Fast-Charger/dp/B07VDQP1NY", src: "https://m.media-amazon.com/images/I/61VzQ7Z+7YL._AC_SX450_.jpg", alt: "Samsung Charger" },
    { id: "acc11", name: "Spigen Tough Armor Case", price: "₹1,999", originalPrice: "₹2,999", discount: "33% off", url: "https://www.amazon.in/Spigen-Tough-Armor-iPhone-Case/dp/B08L8JRN5H", src: "https://m.media-amazon.com/images/I/71S8J8l-uZL._AC_SX450_.jpg", alt: "Spigen Case" },
    { id: "acc12", name: "JBL Charge 5 Speaker", price: "₹12,999", originalPrice: "₹15,999", discount: "19% off", url: "https://www.amazon.in/JBL-Charge-5-Bluetooth-Speaker/dp/B08XQSNFZB", src: "https://m.media-amazon.com/images/I/81qj6F3DK+L._AC_SX450_.jpg", alt: "JBL Speaker" },
    { id: "acc13", name: "Razer DeathAdder V3", price: "₹5,990", originalPrice: "₹7,990", discount: "25% off", url: "https://www.amazon.in/Razer-DeathAdder-V3-Gaming-Mouse/dp/B0B4PSL5TN", src: "https://m.media-amazon.com/images/I/61yAGWGJQ3L._AC_SX450_.jpg", alt: "Razer Mouse" },
    { id: "acc14", name: "SteelSeries Arctis 7P", price: "₹18,990", originalPrice: "₹24,990", discount: "24% off", url: "https://www.amazon.in/SteelSeries-Arctis-7P-Wireless-Headset/dp/B08H4W9MQL", src: "https://m.media-amazon.com/images/I/71hZqPKiTQL._AC_SX450_.jpg", alt: "SteelSeries Headset" },
    { id: "acc15", name: "UGREEN 65W GaN Charger", price: "₹3,599", originalPrice: "₹4,999", discount: "28% off", url: "https://www.amazon.in/UGREEN-65W-GaN-USB-C-Charger/dp/B08P2SZ7SH", src: "https://m.media-amazon.com/images/I/61FHQJ+9NfL._AC_SX450_.jpg", alt: "UGREEN Charger" }
]

// LEDs & Smart TVs Data (15 items)
const ledsAndTVs = [
    { id: "tv1", name: "VW 32\" Android TV", price: "₹8,999", originalPrice: "₹12,999", discount: "31% off", url: "https://www.amazon.in/VW-32-inch-Android-Smart-TV/dp/B09VBQ3XYZ", src: "https://m.media-amazon.com/images/I/81aZy-rylFL._AC_SX450_.jpg", alt: "VW Android TV" },
    { id: "tv2", name: "Samsung 32\" HD Smart TV", price: "₹12,490", originalPrice: "₹16,990", discount: "26% off", url: "https://www.amazon.in/Samsung-32-inch-HD-Smart-TV/dp/B0C7YBF3LM", src: "https://m.media-amazon.com/images/I/81T75wbDCkL._AC_SX450_.jpg", alt: "Samsung Smart TV" },
    { id: "tv3", name: "Redmi 4K Fire TV", price: "₹25,999", originalPrice: "₹32,999", discount: "21% off", url: "https://www.amazon.in/Redmi-43-inch-4K-Fire-TV/dp/B0CGMP7Q8F", src: "https://m.media-amazon.com/images/I/81yEb4d5RcL._AC_SX450_.jpg", alt: "Redmi Fire TV" },
    { id: "tv4", name: "Philips 32\" Ambilight", price: "₹18,999", originalPrice: "₹24,999", discount: "24% off", url: "https://www.amazon.in/Philips-32-inch-Ambilight-Smart-TV/dp/B0B7H6Q8YW", src: "https://m.media-amazon.com/images/I/81n8Cy5h8vL._AC_SX450_.jpg", alt: "Philips Ambilight" },
    { id: "tv5", name: "California VIBE 43\"", price: "₹21,999", originalPrice: "₹29,999", discount: "27% off", url: "https://www.amazon.in/California-VIBE-43-inch-4K-TV/dp/B0CHZG7M9P", src: "https://m.media-amazon.com/images/I/71CqQFR5wXL._AC_SX450_.jpg", alt: "California VIBE TV" },
    { id: "tv6", name: "LG 43\" 4K UHD Smart TV", price: "₹32,990", originalPrice: "₹42,990", discount: "23% off", url: "https://www.amazon.in/LG-43-inch-4K-UHD-Smart-TV/dp/B08W2NP4TM", src: "https://m.media-amazon.com/images/I/81fVyLV5TcL._AC_SX450_.jpg", alt: "LG Smart TV" },
    { id: "tv7", name: "Sony Bravia 55\" 4K TV", price: "₹64,990", originalPrice: "₹84,990", discount: "24% off", url: "https://www.amazon.in/Sony-Bravia-55-inch-4K-Android-TV/dp/B08F5B7DPZ", src: "https://m.media-amazon.com/images/I/81K9dH1NRUL._AC_SX450_.jpg", alt: "Sony Bravia TV" },
    { id: "tv8", name: "TCL 50\" QLED 4K TV", price: "₹41,990", originalPrice: "₹54,990", discount: "24% off", url: "https://www.amazon.in/TCL-50-inch-QLED-4K-TV/dp/B09P1Y7Z2R", src: "https://m.media-amazon.com/images/I/81b8VxT7JRL._AC_SX450_.jpg", alt: "TCL QLED TV" },
    { id: "tv9", name: "OnePlus Y1S Edge 32\"", price: "₹13,999", originalPrice: "₹17,999", discount: "22% off", url: "https://www.amazon.in/OnePlus-Y1S-Edge-32-inch-Android/dp/B08G83D8KL", src: "https://m.media-amazon.com/images/I/71pF8kkrLiL._AC_SX450_.jpg", alt: "OnePlus TV" },
    { id: "tv10", name: "Hisense 55\" ULED 4K TV", price: "₹49,990", originalPrice: "₹64,990", discount: "23% off", url: "https://www.amazon.in/Hisense-55-inch-ULED-4K-TV/dp/B09T25VF2P", src: "https://m.media-amazon.com/images/I/81YJdVN9vhL._AC_SX450_.jpg", alt: "Hisense ULED TV" },
    { id: "tv11", name: "Mi 4A Horizon 40\"", price: "₹21,999", originalPrice: "₹27,999", discount: "21% off", url: "https://www.amazon.in/Mi-4A-Horizon-40-inch-Android/dp/B08TV5Y5DW", src: "https://m.media-amazon.com/images/I/81Q8JbH8g8L._AC_SX450_.jpg", alt: "Mi Horizon TV" },
    { id: "tv12", name: "Kodak 50\" 4K Ultra HD TV", price: "₹29,999", originalPrice: "₹39,999", discount: "25% off", url: "https://www.amazon.in/Kodak-50-inch-4K-Ultra-HD-TV/dp/B08P8HXQSJ", src: "https://m.media-amazon.com/images/I/81mNJRd+VhL._AC_SX450_.jpg", alt: "Kodak 4K TV" },
    { id: "tv13", name: "Acer 32\" HD Ready Smart TV", price: "₹11,999", originalPrice: "₹15,999", discount: "25% off", url: "https://www.amazon.in/Acer-32-inch-HD-Ready-Smart-TV/dp/B09B2HQXGS", src: "https://m.media-amazon.com/images/I/81-bF1WR8sL._AC_SX450_.jpg", alt: "Acer Smart TV" },
    { id: "tv14", name: "Toshiba 43\" 4K UHD TV", price: "₹26,990", originalPrice: "₹34,990", discount: "23% off", url: "https://www.amazon.in/Toshiba-43-inch-4K-UHD-TV/dp/B08H4XBP2G", src: "https://m.media-amazon.com/images/I/81xQ4YrWL9L._AC_SX450_.jpg", alt: "Toshiba 4K TV" },
    { id: "tv15", name: "Panasonic 32\" HD Smart TV", price: "₹15,990", originalPrice: "₹19,990", discount: "20% off", url: "https://www.amazon.in/Panasonic-32-inch-HD-Smart-TV/dp/B08Z4W8KJG", src: "https://m.media-amazon.com/images/I/81T8hm-DNZL._AC_SX450_.jpg", alt: "Panasonic Smart TV" }
]

export { images, laptops1, laptops2, laptops3, gadgets, mobilePhones, accessories, ledsAndTVs };