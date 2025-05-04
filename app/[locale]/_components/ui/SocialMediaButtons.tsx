"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    src: "/snap.svg",
    alt: "Snapchat",
    url: "https://snapchat.com/add/yourpage",
  },
  {
    src: "/x.svg",
    alt: "X (Twitter)",
    url: "https://twitter.com/yourpage",
  },
  {
    src: "/insta.svg",
    alt: "Instagram",
    url: "https://instagram.com/yourpage",
  },
  {
    src: "/face.svg",
    alt: "Facebook",
    url: "https://facebook.com/yourpage",
  },
  {
    src: "/linkedin.svg",
    alt: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
  },
];

// Animation variants
const containerVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export default function SocialMediaButtons() {
  return (
    <motion.div
      className="fixed bottom-6 left-4 z-50 flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ src, alt, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          title={alt}
          className="w-10 h-10 flex items-center justify-center transition-transform duration-300"
        >
          <Image src={src} alt={alt} width={28} height={28} />
        </motion.a>
      ))}
    </motion.div>
  );
}
