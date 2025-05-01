import { NavLink, ServicesCards } from "@/types/types";
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
      { key: "service2", href: "/ads" },
      { key: "service3", href: "/marketing" },
      { key: "service4", href: "/tech" },
      { key: "service5", href: "/student" },
      { key: "service6", href: "/electronic" },
      { key: "service7", href: "/screens" },
      { key: "service8", href: "/gifts" },
      { key: "service9", href: "/eng" },
    ],
  },
];

// Services In Main Page
export const services = [
  { key: "serve1", img: "/trans.svg", href: "/translate" },
  { key: "serve2", img: "/student.svg", href: "/student" },
  { key: "serve3", img: "/ad.svg", href: "/ads" },
  { key: "serve4", img: "/marketing.svg", href: "/marketing" },
  { key: "serve7", img: "/gifts.svg", href: "/gifts" },
  { key: "serve9", img: "/engg.svg", href: "/eng" },
  { key: "serve6", img: "/tech.svg", href: "/tech" },
  { key: "serve5", img: "/elec.svg", href: "/electronic" },
  { key: "serve8", img: "/screen.svg", href: "/screens" },
];

// ServicesSection
export const servicesCards: ServicesCards[] = [
  { key: "trans", img: "/serv1.png", href: "/translate" },
  { key: "ad", img: "/serv2.png", href: "/ads" },
  { key: "tech", img: "/serv4.png", href: "/tech" },
  { key: "marketing", img: "/serv5.png", href: "/marketing" },
  { key: "student", img: "/serv6.png", href: "/student" },
  { key: "elec", img: "/serv7.png", href: "/electronic" },
  { key: "screen", img: "/screen.svg", href: "/screens" },
  { key: "gifts", img: "/serv9.png", href: "/gifts" },
  { key: "business", img: "/engg.svg", href: "/eng" },
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
  { ar: "العربية", en: "Arabic" },
  { ar: "الإنجليزية", en: "English" },
  { ar: "الفرنسية", en: "French" },
  { ar: "الإيطالية", en: "Italian" },
  { ar: "الإسبانية", en: "Spanish" },
  { ar: "البرتغالية", en: "Portuguese" },
  { ar: "الألمانية", en: "German" },
  { ar: "الروسية", en: "Russian" },
  { ar: "الصينية", en: "Chinese" },
  { ar: "اليابانية", en: "Japanese" },
  { ar: "الكورية", en: "Korean" },
  { ar: "الهندية", en: "Hindi" },
  { ar: "التركية", en: "Turkish" },
  { ar: "الهولندية", en: "Dutch" },
  { ar: "السويدية", en: "Swedish" },
  { ar: "النرويجية", en: "Norwegian" },
  { ar: "الدنماركية", en: "Danish" },
  { ar: "البولندية", en: "Polish" },
  { ar: "التشيكية", en: "Czech" },
  { ar: "الفنلندية", en: "Finnish" },
  { ar: "اليونانية", en: "Greek" },
  { ar: "الرومانية", en: "Romanian" },
  { ar: "المجرية", en: "Hungarian" },
  { ar: "التايلاندية", en: "Thai" },
  { ar: "الفيتنامية", en: "Vietnamese" },
  { ar: "الإندونيسية", en: "Indonesian" },
  { ar: "الماليزية", en: "Malay" },
  { ar: "الأوكرانية", en: "Ukrainian" },
  { ar: "العبرية", en: "Hebrew" },
  { ar: "البنغالية", en: "Bengali" },
  { ar: "السواحلية", en: "Swahili" },
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

// E-Marketing
export const markets = [
  {
    title: "cards.social",
    description: "cards.socialdes",
    image: "/social.png",
  },
  {
    title: "cards.ads",
    description: "cards.addes",
    image: "/adss.png",
  },
  {
    title: "cards.content",
    description: "cards.contentdes",
    image: "/cw.png",
  },
  {
    title: "cards.seo",
    description: "cards.seodes",
    image: "/seo.png",
  },
];

// Ads
export const ads = [
  { title: "service1", description: "service1des", image: "/outscreen.png" },
  { title: "service2", description: "service2des", image: "/posters.png" },
  { title: "service3", description: "service3des", image: "/video.png" },
  { title: "service4", description: "service4des", image: "/cards.png" },
  { title: "service5", description: "service5des", image: "/gifts1.png" },
  { title: "service6", description: "service6des", image: "/brouch.png" },
  { title: "service7", description: "service7des", image: "/baner.png" },
  {
    title: "service8",
    description: "service8des",
    image: "/sticker.png",
  },
];

// Student
export const students = [
  {
    title: "service1",
    description: "service1des",
    image: "/print.png",
    href: true,
  },
  { title: "service2", description: "service2des", image: "/reserch.png" },
  { title: "service3", description: "service3des", image: "/prisnts.png" },
  { title: "service4", description: "service4des", image: "/stats.png" },
];

// Electronics Services
export const electronics = [
  { title: "service3", description: "service3des", image: "/gov.png" },
  { title: "service2", description: "service2des", image: "/booking.png" },
  { title: "service4", description: "service3des", image: "/eforms.png" },
  { title: "service1", description: "service1des", image: "/ecommerce.png" },
];

// Gifts Services
export const gifts = [
  { title: "service1", description: "service1des", image: "/gifts1.png" },
  { title: "service2", description: "service2des", image: "/gifts2.png" },
  { title: "service3", description: "service3des", image: "/gifts3.png" },
];
