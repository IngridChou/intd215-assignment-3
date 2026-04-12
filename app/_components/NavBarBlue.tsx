import Link from "next/link";
import Image from "next/image";

export default function NavBarBlue() {

    return (
        <>
            <nav className="sticky top-0 z-[999] flex sm:flex-row w-full h-20 justify-between items-center px-6 sm:px-24 bg-blue font-semibold text-2xl text-white" >
                <Link href="/"
                    className="cursor-pointer hover:opacity-60 transition"
                >
                    NORITO SHINMURA
                </Link>

                <div className="hidden sm:flex flex-row gap-0 sm:gap-10">
                    <Link href="/#projects" className="cursor-pointer hover:opacity-60 transition">
                        PROJECTS
                    </Link>
                    <Link href="/#about" className="cursor-pointer hover:opacity-60 transition">
                        ABOUT
                    </Link>
                    <Link href="/#contact" className="cursor-pointer hover:opacity-60 transition">
                        CONTACT
                    </Link>
                </div>

                {/* hamburger */}
                <Image
                    src="/menu-pearl.svg"
                    alt="menu"
                    width={979}
                    height={1385}
                    className="w-8 h-auto object-cover visible sm:hidden"
                />
            </nav>
        </>
    );
};