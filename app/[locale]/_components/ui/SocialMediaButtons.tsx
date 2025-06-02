"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    src: "/snap.svg",
    alt: "Snapchat",
    url: "https://www.snapchat.com/add/transia_tech?share_id=v1x2PmWnQxQ&locale=ar-EG",
  },
  {
    src: "/x.svg",
    alt: "X (Twitter)",
    url: "https://x.com/Transia_Tech",
  },
  {
    src: "/linkedin.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/transiia/?viewAsMember=true",
  },
  {
    src: "/tiktok.svg",
    alt: "Tiktok",
    url: "https://www.tiktok.com/@transia10?_t=ZS-8wgjfiwRroF&_r=1",
  },
  {
    src: "/insta.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/transia.ksa/",
  },
  {
    src: "/face.svg",
    alt: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61575923832487",
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
      duration: 0.5,
      ease: "easeOut",
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
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function SocialMediaButtons() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-2"
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
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          title={alt}
          className="flex items-center justify-center p-2 rounded-full bg-white/80 shadow-md
           hover:shadow-lg transition-all duration-300"
        >
          <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.a>
      ))}
    </motion.div>
  );
}
