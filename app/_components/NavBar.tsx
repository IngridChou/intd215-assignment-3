'use client';
import Image from "next/image";

export default function NavBar() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav className="sticky top-0 z-[999] flex sm:flex-row w-full h-20 justify-between items-center px-6 sm:px-24 bg-pearl font-semibold text-2xl text-black" >
                <button
                    onClick={() => scrollToSection("top")}
                    className="cursor-pointer hover:opacity-60 transition"
                >
                    NORITO SHINMURA
                </button>

                <div className="hidden sm:flex flex-row gap-0 sm:gap-10">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="cursor-pointer hover:opacity-60 transition"
                    >
                        PROJECTS
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="cursor-pointer hover:opacity-60 transition"
                    >
                        ABOUT
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="cursor-pointer hover:opacity-60 transition"
                    >
                        CONTACT
                    </button>
                </div>

                {/* hamburger */}
                <Image
                    src="/menu.svg"
                    alt="menu"
                    width={979}
                    height={1385}
                    className="w-8 h-auto object-cover visible sm:hidden"
                />
            </nav>
        </>
    );
};