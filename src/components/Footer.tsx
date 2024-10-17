"use client";

import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import FacebookIcon from "@/svg/FaceBookIcon";
import TelegramIcon from "@/svg/TelegramIcon";
import { MailMinus } from "lucide-react";
import { Phone } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
    const { theme } = useTheme();

    const color = theme === "light" ? "black" : "#A7D4EE";
   
    return (
        <footer className="padding-container max-container flex flex-col md:flex-row justify-between gap-4 items-center py-10 border-t border-zinc-900">
            
            <div className="flex gap-4 items-center justify-center">
                <Link href="https://github.com/codewarriorninja" target="_blank">
                    <GithubIcon color={color} />
                </Link>
                <Link href="https://www.linkedin.com/in/henok-aragaw-717726319/" target="_blank">
                    <LinkedInIcon color={color} />
                </Link>
                <Link href="https://x.com/Henok_Aragaw1" target="_blank">
                    <TwitterIcon color={color} />
                </Link>
                <Link href="https://www.instagram.com/henik_junior_/" target="_blank">
                    <InstagramIcon color={color} />
                </Link>
                <Link href="https://t.me/Little_bit84" target="_blank">
                    <TelegramIcon color={color} />
                </Link>
                <Link href="https://web.facebook.com/profile.php?id=100076672144211" target="_blank">
                    <FacebookIcon color={color} />
                </Link>
            </div>
            <Link href="mailto:henokaragaw70@gmail.com" className="dark:text-[#A7D4EE] text-black flex gap-4"><MailMinus />henokaragaw70@gmail.com</Link>
            <Link href="/" className="dark:text-[#A7D4EE] text-black flex gap-4"><Phone />0949452012</Link>
        </footer>
    )
}

export default Footer;