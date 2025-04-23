import { NavLink } from "@/types/types";
// it services
import { Code, Smartphone, LayoutTemplate, Database } from "lucide-react";

// NavItems
export const navLinks: NavLink[] = [
  { key: "home", href: "/home" },
  { key: "about", href: "/about" },
  { key: "customer", href: "/contact" },
  {
    key: "services",
    dropdown: true,
    children: [
      { key: "service1", href: "/translate" },
      { key: "service2", href: "/service2" },
      { key: "service3", href: "/marketing" },
      { key: "service4", href: "/tech" },
      { key: "service5", href: "/student" },
      { key: "service6", href: "/service6" },
      { key: "service7", href: "/service7" },
      { key: "service8", href: "/service8" },
      { key: "service9", href: "/service9" },
    ],
  },
];

// Services
export const services = [
  { key: "serve1", img: "/trans.svg" },
  { key: "serve2", img: "/student.svg" },
  { key: "serve3", img: "/ad.svg" },
  { key: "serve4", img: "/marketing.svg" },
  { key: "serve5", img: "/elec.svg" },
  { key: "serve6", img: "/tech.svg" },
  { key: "serve7", img: "/gifts.svg" },
  { key: "serve8", img: "/print.svg" },
  { key: "serve9", img: "/business.svg" },
];

// ServicesSection
export const servicesCards = [
  { key: "trans", img: "/serv1.png" },
  { key: "ad", img: "/serv2.png" },
  { key: "business", img: "/serv3.png" },
  { key: "tech", img: "/serv4.png" },
  { key: "marketing", img: "/serv5.png" },
  { key: "student", img: "/serv6.png" },
  { key: "elec", img: "/serv7.png" },
  { key: "print", img: "/serv8.png" },
  { key: "gifts", img: "/serv9.png" },
];

// Banners
export const banners = [
  { id: 1, img: "/banner1.png" },
  { id: 2, img: "/banner2.png" },
  { id: 3, img: "/banner3.png" },
  { id: 4, img: "/banner4.png" },
  { id: 5, img: "/banner5.png" },
  { id: 6, img: "/banner6.png" },
  { id: 7, img: "/banner7.png" },
  { id: 8, img: "/banner8.png" },
  { id: 9, img: "/banner9.png" },
  { id: 10, img: "/banner10.png" },
  { id: 11, img: "/banner11.png" },
  { id: 12, img: "/banner12.png" },
];

// media
export const media = [
  {
    icon: "/contact-email.svg",
    title: "email",
    des: "info@transia.com.sa",
  },
  {
    id: 3,
    icon: "/contact-phone.svg",
    title: "phone",
    des: "00966544214748",
  },
  {
    icon: "/contact-location.svg",
    title: "location",
    address: "address",
  },
];

// Branches
export const branches = [
  { id: 1, title: "first", num: "+96 654 421 4748", ad: "ad1" },
  { id: 2, title: "second", num: "+96 654 106 2442", ad: "ad2" },
  { id: 3, title: "third", num: "+96 657 066 8355", ad: "ad3" },
  { id: 4, title: "fourth", num: "+96 653 415 5887" },
  { id: 5, title: "five", num: "+96 650 892 6162" },
  { id: 6, title: "six", num: "+96 656 936 6161" },
];

// AboutTitles
export const aboutTitles = [
  { ab: "ab1" },
  { ab: "ab2" },
  { ab: "ab3" },
  { ab: "ab4" },
  { ab: "ab5" },
  { ab: "ab6" },
  { ab: "ab7" },
  { ab: "ab8" },
  { ab: "ab9" },
];

// Translate Page
// لستة اللغات المتوفرة
export const availableLanguages = [
  "الأذربيجانية",
  "الأرمينية",
  "الأردية",
  "الأوكرانية",
  "الألبانية",
  "الألمانية",
  "الإنجليزية",
  "الإيطالية",
  "الإندونيسية",
  "الإسبانية",
  "الاستونية",
  "الإيسلندية",
  "الباشتو",
  "البرتغالية",
  "البلغارية",
  "البنغالية",
  "البولندية",
  "البوسنية",
  "التايلاندية",
  "التركية",
  "التشيكية",
  "الصينية",
  "الدانماركية",
  "الرومانية",
  "الروسية",
  "السويدية",
  "السنهالية",
  "السلوفاكية",
  "السلوفينية",
  "الصربية",
  "الصومالية",
  "العربية",
  "العبرية",
  "الفارسية",
  "الفلبينية",
  "الفنلندية",
  "الفرنسية",
  "الكردية",
  "الكرواتية",
  "الكورية",
  "اللاتينية",
  "الماليزية",
  "المجرية",
  "المقدونية",
  "المنغولية",
  "النرويجية",
  "الهولندية",
  "الهندية",
  "اليابانية",
  "اليونانية",
];

// Tech Page

// It services
export const itServices = [
  {
    key: "it.app",
    description: "it.appdes",
    icon: Smartphone,
  },
  {
    key: "it.web",
    description: "it.webdes",
    icon: Code,
  },
  {
    key: "it.uiux",
    description: "it.uiuxdes",
    icon: LayoutTemplate,
  },
  {
    key: "it.data",
    description: "it.datades",
    icon: Database,
  },
];
