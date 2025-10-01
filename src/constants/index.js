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
    { id: "gadget1", name: "APES Bluetooth Speaker", price: "₹2,999", originalPrice: "₹4,999", discount: "40% off", url: "https://www.amazon.in/APES-Bluetooth-Speaker-Playtime-Dynamic/dp/B0DTYBGWT7/ref=sr_1_3?crid=1W5GMVLYYT6K3&dib=eyJ2IjoiMSJ9.l43Y3LsYLP3eraaM3J-NSWoPPrck3MYh5sgpMrsrtt6cgsaBp6UepcBNGegpcSNdIf-kbauxeg9VLU2X2N-0oaS54N0BXat-sDUxf91VfZctDLTMTdXp3AZHFxBTdDMQ7YQYvvZ-0IQy5iKXLNXt7rIg7RbIFCvolWuXdwdYYgiTat8Umy_aHdVGPOgmcLLkstQvf5TMU6TVhVvsoellL6SXdAFVnaMRaHaZbvaeOf4.9Qi6J82wmrbzXcqbhevhX4as55ESNabZaLvdFi0MMj8&dib_tag=se&keywords=apes+bluetooth+speaker&qid=1759328948&sprefix=apes+blutoo%2Caps%2C341&sr=8-3", src: "https://m.media-amazon.com/images/I/81hSMlYjgML._AC_UY218_.jpg", alt: "APES Bluetooth Speaker" },
    { id: "gadget2", name: "Samsung Galaxy Watch4", price: "₹14,999", originalPrice: "₹24,999", discount: "40% off", url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzQ5MTk0NDA0NzI2NzA0OjE3NTkzMjg5NzM6c3BfYXRmOjMwMDU0ODMwMzY2OTkzMjo6MDo6&url=%2FTitan-Stainless-Assistant-Measurement-Functional%2Fdp%2FB0F4KDD5BS%2Fref%3Dsr_1_2_sspa%3Fcrid%3DS3C80MZZAHJT%26dib%3DeyJ2IjoiMSJ9.t5BNNIcuB-5rh0UZpwrog9e7VfQ5ReG_cqcutBx6hL0L5jwaJa1pyqrGxFTvc4goVi3ssfscGoD90S_xIz4Cgj-EjWzb-NEZ5snSfmAZgf_2GRVruXyxHF9RIJuWaum8RnPGWKvPxz2HDN818_ETwC9KAFrUUZKXFSWcC5pNX9LiFlM_YJSUnvqqjOB5zkdRHqXbacmJqVC4DqwIMAULINEIZGDdNXCpM2x2yvI9HoA.8D6Vc-LLjYJs8dr765BNEuCFsHbXkq-tmU6JnfMhy6s%26dib_tag%3Dse%26keywords%3Dsamsung%2Bgalaxy%2Bwatch%2B4%26nsdOptOutParam%3Dtrue%26qid%3D1759328972%26sprefix%3Dsamsung%2Bgalaxy%2Bwatch%2B4%252Caps%252C284%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=Mx8Aq6Ma95&sp_cr=ZAZ", src: "https://m.media-amazon.com/images/I/81yDbbIiqBL._AC_UY218_.jpg", alt: "Samsung Galaxy Watch4" },
    { id: "gadget3", name: "Apple AirPods (3rd Gen)", price: "₹17,900", originalPrice: "₹20,900", discount: "14% off", url: "https://www.amazon.in/Meyaar-Keychain-Compatible-Transparent-Shockproof/dp/B0FNMCSN9B/ref=sr_1_3?crid=17C82GLMZJ6Q2&dib=eyJ2IjoiMSJ9.eczGamAcDa7y7SBW_VqzPJwYKYIFsArX3g01Cc1_WFTNbjjyyhKtq1_mM7QvoTMooGjMbXSQi9w4ZPyrSN5jtyyAvmttSfkGp3qRmsmK48PkBSXLkgi5byOxLj3nmmYe-mfquZjs-IwvAh-8dfhzwFK9avpR3IyLjc6UIRJ3lJhfvfeVdaWcSuFH8tXfCyu9XiOswlkqIeiTdDnJLyv4riVVoB2afWQyqouabaxgQDw.gAgm2ag5HU1k7hQCAA7RcEdOh3iJNsB_Bz6zTyOu-2o&dib_tag=se&keywords=apple+airpods+3+gen&nsdOptOutParam=true&qid=1759328903&sprefix=apple+airpods+3+gen%2Caps%2C277&sr=8-3", src: "https://m.media-amazon.com/images/I/5180OeaBcAL._AC_UY218_.jpg", alt: "Apple AirPods 3rd Gen" },
    { id: "gadget4", name: "Xiaomi Mi 11X 5G Camera Lens", price: "₹899", originalPrice: "₹1,999", discount: "55% off", url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTI4Mjk0OTA0MzIyNTQ0OjE3NTkzMjg5MDE6c3BfYXRmOjMwMDI2MDc0Njg3MjkzMjo6MDo6&url=%2FSKYVIK-SIGNI-20x-Macro-Lens%2Fdp%2FB07MPZJLJ3%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2WD28FU9459DH%26dib%3DeyJ2IjoiMSJ9.wIchdla2rzPVIngOFWPUVSNp3jFJZqEOn6s_eJoTuHXMFdRrvEoKhvF49KbWTaw-lw0CCcqAHAh_Ofsa7woV-ZbasSpFMljQMP_I6CJ3S2woqYHMhN6AQ50YhMGFc81hLyaY1SvCbYSOmVEjf3tZLaYseAVJwSpNaPOLICPEYQ_ow-9DpWnSJcdVNF_gJkKBK1L5a6ZeGCPVaNv2m5TbHxEUsOqxYatjEfp1fp4-xyQ.hyve1wM6fmd_eBrQycR8oQA5N7tq7KAC0mvm-R35EGY%26dib_tag%3Dse%26keywords%3Dxiaomi%2Bcamera%2Blens%26qid%3D1759328901%26sprefix%3Dxiami%2Bcamera%2Blens%252Caps%252C287%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=dDGe1RRUUV&sp_cr=ZAZ", src: "https://m.media-amazon.com/images/I/61rPk+c2rBL._AC_UY218_.jpg", alt: "Xiaomi Camera Lens" },
    { id: "gadget5", name: "Galaxy Z Fold4 5G", price: "₹89,999", originalPrice: "₹1,54,999", discount: "42% off", url: "https://www.amazon.in/Samsung-Galaxy-Fold5-256GB-Storage/dp/B0CB683TQB/ref=sr_1_1?crid=3VT7QYCN4LGAB&dib=eyJ2IjoiMSJ9.YqOB6xox309UgIaz_W4HanIhPJxnvCkyagDMmZm9zcQYuJxNPQLwZrp8xnG-aZPb-8otgI_Mj1361hDpt-kaDb9bOa4TdFZyJQR2bgBU19MYY44WVOVgV59wCcz6sSvqIPoFvEVabDpmhkJDmHg6m648il6XlPVmfqn1Yn0g0vmp8Hm-X5wJmgnJb_Z-tzuK8hq_mX9V_JST_9xPwbitTTYwQtImPOtclk5ulO0psIE.spkWZUM-hn0UANkIRkIl3BJGFRqqTo-zrtOqCTaa8gE&dib_tag=se&keywords=samsung+z+fold+4+phone+mobile&nsdOptOutParam=true&qid=1759328814&sprefix=samsung+z+fold+4+phone+mobi%2Caps%2C306&sr=8-1", src: "https://m.media-amazon.com/images/I/71XwXWxa6QL._AC_UY218_.jpg", alt: "Galaxy Z Fold4" },
    { id: "gadget6", name: "Shure AONIC 40 Wireless", price: "₹15,990", originalPrice: "₹24,900", discount: "36% off", url: "https://www.amazon.in/AONIC-40-Cancelling-Headphones-Studio-Quality/dp/B09QSRYVKT/ref=sr_1_1?crid=2W8CN8DRNQ3BT&dib=eyJ2IjoiMSJ9.0fU-P_XZbutNIuHy4ySDk9cXx8ZoaF_WhHuzTYanTdV9nD1tN732rcP8_uq-MgT73b1j93XhnhsuZkFhzyNlxMtgnkla5P2L_vZAav63-gjxnG9Zz_bOmSd4SJ51IrH9-SLWhLBQwGcb201ytD4rKq199CvgtqZWh0LHXqgbCeQOa8aXTmAInUhoAQJRKUWiPtscrwO9YWI255Pakcd6WpJ5RGaalect6R8G0ikR7UQ.VQsbaDCmEpywGS_m_DHh7hQUpF5UesS_lNHynnqpbHU&dib_tag=se&keywords=Shure+AONIC+40&nsdOptOutParam=true&qid=1759329081&sprefix=shure+aonic+40%2Caps%2C263&sr=8-1", src: "https://m.media-amazon.com/images/I/41dH162raPL._AC_UY218_.jpg", alt: "Shure AONIC 40" },
    { id: "gadget7", name: "Linear Wireless Earbuds", price: "₹1,299", originalPrice: "₹2,999", discount: "57% off", url: "https://www.amazon.in/Earphone-Super-Linear-Soundstage-Earphones-Silver-Plated/dp/B0DM58S9SL/ref=sr_1_2?crid=19ILGOVVA33XM&dib=eyJ2IjoiMSJ9.CAOxSRBNTXkC1MdG6tz5Thuk_leAnn8R8FKWyrdcOz-bhnhe0r8nHLzlYnOqNy9Zb1TgKOewGv-Gg36Etzh_5CtGQPP2yDKShlBDOr6zEO9AKkKiOGFBcwWBnj9yX3kKJDPsiruhZFnmwT2IkzY-J39NTo9dszJ6aNNg9Mc7Tq4Wr6m9ilF-ofrKWy6d5TlgOlRX_zeIG4Z4MgfSZtoTH3w1y2_qUnc3fr7XTQPQa3o.SGBSLBmvTkIv0f7GKNcmX7rJixs5ddMTKztQaNBuWwE&dib_tag=se&keywords=linear+earbuds&qid=1759329120&sprefix=linear+earbuds%2Caps%2C231&sr=8-2", src: "https://m.media-amazon.com/images/I/51p7LaLo4RL._AC_UY218_.jpg", alt: "Linear Earbuds" },
    { id: "gadget8", name: "Elgato 4K Capture Card", price: "₹18,999", originalPrice: "₹24,999", discount: "24% off", url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjAwNzU3Nzk5MjIxMzAzOjE3NTkzMjkxNzM6c3BfYXRmOjMwMDc0MzIyNTIyNDIzMjo6MDo6&url=%2Fdp%2FB0FQ3VHZ4W%2Fref%3Dsr_1_1_sspa%3Fcrid%3D36ZGQYE28SJBC%26dib%3DeyJ2IjoiMSJ9.H_NGO657lkBcPzK0UFAjY6jV7BiCRjda1s9VgncK0lmhZVbw35qVbYv1D5CiSgqS_R6ZXggFNuLhCUirQ4M7V9bqY5uIcjZqUBz9EadF1bcjx2QL_J8z6XpeDO0AcRhcWGIzhtlrCXVD20aKuUU5_OILfHMvm7US_lVmJXBR0VVm8PbNl7XOdtUo2wxhK6EXkhvK5DbsDBlyGlcOB7t1tA_z1GjROsEiaX459e5K3U4.P-FbbZsfw0-MDfxWfrd2irka3v_pjm1ez1ivL8iKVvg%26dib_tag%3Dse%26keywords%3Delgato%2Bcapture%2Bcard%26qid%3D1759329172%26sprefix%3Delgato%2Bcapture%2Bcard%252Caps%252C302%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=boMb4dJxIw&sp_cr=ZAZ", src: "https://m.media-amazon.com/images/I/51vUUV3cRFL._AC_UY218_.jpg", alt: "Elgato Capture Card" },
    { id: "gadget9", name: "Phone Stand Adjustable", price: "₹399", originalPrice: "₹999", discount: "60% off", url: "https://www.amazon.in/Portronics-Multifunctional-Universal-Adjustment-Compatible/dp/B0CMZWBCKB/ref=sr_1_8?crid=28TOUGZO3YPA5&dib=eyJ2IjoiMSJ9.hGvgAelseYR9g8xc1V9La5sCkmM7P01TYfiPJXQBWLxmyt2dO6kChPB2RBglzgAZGXg-412pUcy_l4nshkJFVtpSEzTzJNfpFDnIzDszNmleW09nV_t8NyWm1nlC59YXe_ac79WyDA_Qxl2_Pe31jZxu_AGtkLfQJVJcuyiZPkaHVb1Y7q7wF-vdabcjbzp2pQKT9NcDfaC4EHOjISfwFvE58U2dF6g9_fXqQ2eeMnA.eR_PJWTkUmqI8Z962Rn5GzdKFrnHlDh1NFBaRz8EZhQ&dib_tag=se&keywords=phone+stand&qid=1759329221&sprefix=phone+stan%2Caps%2C306&sr=8-8", src: "https://m.media-amazon.com/images/I/617dVwDF7XL._AC_UY218_.jpg", alt: "Phone Stand" },
    { id: "gadget10", name: "Xiaomi Earbuds Basic 3", price: "₹1,499", originalPrice: "₹2,299", discount: "35% off", url: "https://www.amazon.in/Xiaomi-Earbuds-Basic-Bluetooth-Earphones/dp/B0B7T2QKXG", src: "https://m.media-amazon.com/images/I/71QAJAs+oqL._AC_UY218_.jpg", alt: "Xiaomi Earbuds" },
    { id: "gadget11", name: "Projector 4K WiFi", price: "₹12,999", originalPrice: "₹19,999", discount: "35% off", url: "https://www.amazon.in/Projector-HAPPRUN-Bluetooth-Compatible-Smartphone/dp/B08T1G7XK6", src: "https://m.media-amazon.com/images/I/617lZziJniL._AC_UY218_.jpg", alt: "4K Projector" },
    { id: "gadget12", name: "Apes Speaker RGB", price: "₹2,399", originalPrice: "₹3,999", discount: "40% off", url: "https://www.amazon.in/AFERS-Bluetooth-Speaker-RGB-Gaming/dp/B0C8SGMP7R", src: "https://m.media-amazon.com/images/I/61VHjKQd43L._AC_UY218_.jpg", alt: "RGB Speaker" },
    { id: "gadget15", name: "FLAV Gaming Earbuds", price: "₹1,199", originalPrice: "₹2,999", discount: "60% off", url: "https://www.amazon.in/FLAV-Gaming-Earbuds-Wireless-Bluetooth/dp/B0CGZXF8NH", src: "https://m.media-amazon.com/images/I/31VRU5aXC7L._AC_UY218_.jpg", alt: "FLAV Earbuds" }
]

// Mobile Phones Data (15 items)
const mobilePhones = [
    { id: "phone1", name: "OnePlus 13R", price: "₹39,999", originalPrice: "₹49,999", discount: "20% off", url: "https://www.amazon.in/OnePlus-13R-5G-128GB-Blue/dp/B0C8QWXYZ7", src: "https://m.media-amazon.com/images/I/61muVCIy-uL._AC_UY218_.jpg", alt: "OnePlus 13R" },
    { id: "phone2", name: "Samsung Galaxy S24 Ultra 5G", price: "₹99,999", originalPrice: "₹1,29,999", discount: "23% off", url: "https://www.amazon.in/Samsung-Galaxy-S24-Ultra-5G/dp/B0C8QWXYZ7", src: "https://m.media-amazon.com/images/I/81M4zm2+0FL._AC_UY218_.jpg", alt: "Galaxy S24 Ultra" },
    { id: "phone3", name: "OnePlus 13s", price: "₹44,999", originalPrice: "₹54,999", discount: "18% off", url: "https://www.amazon.in/OnePlus-13s-5G-256GB-Green/dp/B0CHRF7X89", src: "https://m.media-amazon.com/images/I/61BTIyv+XdL._AC_UY218_.jpg", alt: "OnePlus 13s" },
    { id: "phone4", name: "iPhone 17", price: "₹79,900", originalPrice: "₹89,900", discount: "11% off", url: "https://www.amazon.in/Apple-iPhone-17-128GB-Blue/dp/B0DCKR8TYL", src: "https://m.media-amazon.com/images/I/61puP6Ae9mL._AC_UY218_.jpg", alt: "iPhone 17" },
    { id: "phone5", name: "Xiaomi 14 CIVI", price: "₹42,999", originalPrice: "₹49,999", discount: "14% off", url: "https://www.amazon.in/Xiaomi-14-CIVI-5G-128GB/dp/B0CHXV8NP6", src: "https://m.media-amazon.com/images/I/71x5XVC9UlL._AC_UY218_.jpg", alt: "Xiaomi 14 CIVI" },
    { id: "phone6", name: "realme GT 7", price: "₹32,999", originalPrice: "₹39,999", discount: "18% off", url: "https://www.amazon.in/realme-GT-7-5G-128GB/dp/B0CQHM9LX8", src: "https://m.media-amazon.com/images/I/712g+qxRj4L._AC_UY218_.jpg", alt: "realme GT 7" },
    { id: "phone7", name: "iPhone 15 Pro Max", price: "₹1,34,900", originalPrice: "₹1,59,900", discount: "16% off", url: "https://www.amazon.in/Apple-iPhone-15-Pro-Max/dp/B0CHX5D6DD", src: "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY218_.jpg", alt: "iPhone 15 Pro Max" },
    { id: "phone8", name: "Samsung Galaxy S23 FE", price: "₹49,999", originalPrice: "₹59,999", discount: "17% off", url: "https://www.amazon.in/Samsung-Galaxy-S23-FE-128GB/dp/B0CKQP8GV7", src: "https://m.media-amazon.com/images/I/71tK+6kbxGL._AC_UY218_.jpg", alt: "Galaxy S23 FE" },
    { id: "phone9", name: "Nothing Phone (2a)", price: "₹23,999", originalPrice: "₹25,999", discount: "8% off", url: "https://www.amazon.in/Nothing-Phone-2a-128GB-Black/dp/B0CY8H9WXQ", src: "https://m.media-amazon.com/images/I/51wSkG0K3vL._AC_UY218_.jpg", alt: "Nothing Phone 2a" },
    { id: "phone10", name: "Google Pixel 8a", price: "₹52,999", originalPrice: "₹54,999", discount: "4% off", url: "https://www.amazon.in/Google-Pixel-8a-128GB-Obsidian/dp/B0D1YMG4HT", src: "https://m.media-amazon.com/images/I/61BjRrw68HL._AC_UY218_.jpg", alt: "Google Pixel 8a" }
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
    { id: "acc10", name: "Samsung 45W Fast Charger", price: "₹3,499", originalPrice: "₹4,499", discount: "22% off", url: "https://www.amazon.in/Samsung-45W-USB-C-Fast-Charger/dp/B07VDQP1NY", src: "https://m.media-amazon.com/images/I/61VzQ7Z+7YL._AC_SX450_.jpg", alt: "Samsung Charger" }
]

// LEDs & Smart TVs Data (15 items)
const ledsAndTVs = [
    { id: "tv1", name: "VW 32\" Android TV", price: "₹8,999", originalPrice: "₹12,999", discount: "31% off", url: "https://www.amazon.in/VW-32-inch-Android-Smart-TV/dp/B09VBQ3XYZ", src: "https://m.media-amazon.com/images/I/81gqvGIGoYL._AC_UY218_.jpg", alt: "VW Android TV" },
    { id: "tv2", name: "Samsung 32\" HD Smart TV", price: "₹12,490", originalPrice: "₹16,990", discount: "26% off", url: "https://www.amazon.in/Samsung-32-inch-HD-Smart-TV/dp/B0C7YBF3LM", src: "https://m.media-amazon.com/images/I/81wZifILqQL._AC_UY218_.jpg", alt: "Samsung Smart TV" },
    { id: "tv3", name: "Redmi 4K Fire TV", price: "₹25,999", originalPrice: "₹32,999", discount: "21% off", url: "https://www.amazon.in/Redmi-43-inch-4K-Fire-TV/dp/B0CGMP7Q8F", src: "https://m.media-amazon.com/images/I/71kjAokz-yL._AC_UY218_.jpg", alt: "Redmi Fire TV" },
    { id: "tv4", name: "Philips 32\" Ambilight", price: "₹18,999", originalPrice: "₹24,999", discount: "24% off", url: "https://www.amazon.in/Philips-32-inch-Ambilight-Smart-TV/dp/B0B7H6Q8YW", src: "https://m.media-amazon.com/images/I/61Ak-CW5T-L._AC_UY218_.jpg", alt: "Philips Ambilight" },
    { id: "tv5", name: "California VIBE 43\"", price: "₹21,999", originalPrice: "₹29,999", discount: "27% off", url: "https://www.amazon.in/California-VIBE-43-inch-4K-TV/dp/B0CHZG7M9P", src: "https://m.media-amazon.com/images/I/81knarlqqaL._AC_UY218_.jpg", alt: "California VIBE TV" },
    { id: "tv6", name: "LG 43\" 4K UHD Smart TV", price: "₹32,990", originalPrice: "₹42,990", discount: "23% off", url: "https://www.amazon.in/LG-43-inch-4K-UHD-Smart-TV/dp/B08W2NP4TM", src: "https://m.media-amazon.com/images/I/819WjOiTxdL._AC_UY218_.jpg", alt: "LG Smart TV" },
    { id: "tv7", name: "Sony Bravia 55\" 4K TV", price: "₹64,990", originalPrice: "₹84,990", discount: "24% off", url: "https://www.amazon.in/Sony-Bravia-55-inch-4K-Android-TV/dp/B08F5B7DPZ", src: "https://m.media-amazon.com/images/I/81x8FOwI+6L._AC_UY218_.jpg", alt: "Sony Bravia TV" }
]

const Get_to_Know_Us =[
    { id: "info1", title: "About Us", content: "Learn more about our mission and values." },
    { id: "info2", title: "Careers", content: "Join our team and help us shape the future." },
    { id: "info3", title: "Blog", content: "Read our latest news and insights." },
    { id: "info4", title: "Contact Us", content: "Get in touch with our support team." }
]

const Connect_with_Us =[
    { id: "info5", title: "Facebook", content: "Follow us on Facebook." },
    { id: "info6", title: "Twitter", content: "Follow us on Twitter." },
    { id: "info7", title: "Instagram", content: "Follow us on Instagram." },
    { id: "info8", title: "LinkedIn", content: "Connect with us on LinkedIn." }
]

const Make_Money_with_Us =[
    { id: "info9", title: "Sell on Amazon", content: "Earn money by promoting our products." },
    { id: "info10", title: "Sell under Amazon Accelerator", content: "Join our marketplace and reach millions of customers." },
    { id: "info11", title: "Protect and Build Your Brand", content: "Promote your brand with our advertising solutions." },
    { id: "info12", title: "Amazon Global Selling", content: "Collaborate with us for mutual growth." },
    { id: "info9", title: "Affiliate Program", content: "Earn money by promoting our products." },
    { id: "info10", title: "Become a Seller", content: "Join our marketplace and reach millions of customers." },
    { id: "info11", title: "Fulfilment by Amazon", content: "Promote your brand with our advertising solutions." },
    { id: "info12", title: "Advertise Your Products", content: "Collaborate with us for mutual growth." }
]

const Let_us_Help_You = [
    { id: "info13", title: "Your Account", content: "Manage your account settings." },
    { id: "info14", title: "Returns Centre", content: "Initiate a return or track your return status." },
    { id: "info15", title: "100% Purchase Protection", content: "Get help with our purchase protection program." },
    { id: "info16", title: "Amazon App Download", content: "Download our mobile app for easy shopping." },
    { id: "info17", title: "Help", content: "Visit our help centre for assistance." }
]

const small_business_offers = [
    { id: "small1", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/Img2025/SMB/Jupiter/Gateway/Phase1/Desktop_QC_Decor_1x._SY116_CB800857293_.jpg" , alt: "Small Business 1" },
    { id: "small2", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/Img2025/SMB/Jupiter/Gateway/Phase1/Desktop_QC_Clothing_1x._SY116_CB800857293_.jpg" , alt: "Small Business 2" },
    { id: "small3", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/Img2025/SMB/Jupiter/Gateway/Phase1/Desktop_QC_Furniture_1x._SY116_CB800857293_.jpg" , alt: "Small Business 3" },
    { id: "small4", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/Img2025/SMB/Jupiter/Gateway/Phase1/Desktop_QC_Beauty_1x._SY116_CB800857293_.jpg" , alt: "Small Business 4" }
];

const essentials = [
    { id: "essential1", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/ALP/Jupiter25/P1/HF_PC_QC_1x._SY116_CB799315807_.jpg" , alt: "Essential 1" },
    { id: "essential2", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/ALP/Jupiter25/P1/FR_PC_QC_1x._SY116_CB799315807_.jpg" , alt: "Essential 2" },
    { id: "essential3", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/ALP/Jupiter25/P1/SO_PC_QC_1x._SY116_CB799315807_.jpg" , alt: "Essential 3" },
    { id: "essential4", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/ALP/Jupiter25/P1/KD_PC_QC_1x._SY116_CB799315807_.jpg" , alt: "Essential 4" }
];

const articians = [
    { id: "artician1", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SMB/karigar/PC_QC_372x232_Life-Style_1_2x._SY116_CB800905412_.jpg" , alt: "Artician 1" },
    { id: "artician2", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SMB/karigar/PC_QC_372x232_Life-Style_2_2x._SY116_CB800905412_.jpg" , alt: "Artician 2" },
    { id: "artician3", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SMB/karigar/PC_QC_372x232_Life-Style_3_2x._SY116_CB800905412_.jpg" , alt: "Artician 3" },
    { id: "artician4", a : "#", src: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SMB/karigar/PC_QC_372x232_Life-Style_4_2x._SY116_CB800905412_.jpg" , alt: "Artician 4" }
];

const categories = [
    { id: "cat1", name: "Fashion", url: "#" },
    { id: "cat2", name: "Mobiles", url: "#" },
    { id: "cat3", name: "Skills", url: "#" },
    { id: "cat4", name: "Electronics", url: "#" },
    { id: "cat5", name: "Home", url: "#" },
    { id: "cat6", name: "Appliances", url: "#" },
    { id: "cat7", name: "Beauty", url: "#" },
    { id: "cat8", name: "Toys", url: "#" }
];


export { images, laptops1, laptops2, laptops3, gadgets, mobilePhones, accessories, ledsAndTVs, info };
export { small_business_offers, essentials, articians };
export { Get_to_Know_Us, Connect_with_Us, Make_Money_with_Us, Let_us_Help_You };
export { categories };
export default info;