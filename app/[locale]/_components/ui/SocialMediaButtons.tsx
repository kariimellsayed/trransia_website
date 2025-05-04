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
      transition: { duration: 0.2, ease: "easeOut" },
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function SocialMediaButtons() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col rounded-xl backdrop-blur-md shadow-md
     transition-all duration-300 hover:shadow-xl bg-white/80 space-y-2 border-2 border-primary"
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
          whileHover={{ scale: 1.1 }}
          title={alt}
          className="w-12 h-12 flex items-center justify-center"
        >
          <Image src={src} alt={alt} width={30} height={30} />
        </motion.a>
      ))}
    </motion.div>
  );
}
