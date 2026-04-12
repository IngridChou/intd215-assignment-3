import Image from "next/image";
import Link from "next/link";
import NavBarBlue from "@/app/_components/NavBarBlue";

import { ViewTransition } from 'react'

export default function Project1() {
    return (
        <>
            <NavBarBlue />
            <ViewTransition
                default="none"
                enter="auto"
                exit="auto"
            >
                <div className="flex flex-wrap sm:flex-row gap-10 sm:gap-6 px-6 sm:px-24 py-14 items-start bg-blue text-white">
                    {/* image */}
                    <div className="flex flex-col w-full sm:max-w-1/2 gap-10">
                        <Image
                            src="/papernet.jpg"
                            alt="image 1"
                            width={979}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/papernet2.jpg"
                            alt="image 2"
                            width={979}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/papernet3.jpg"
                            alt="image 3"
                            width={979}
                            height={1385}
                            className="object-cover"
                        />
                    </div>

                    {/* text */}
                    <div className="sticky top-34 max-w-150">
                        <div className="flex flex-col justify-between gap-30">
                            <div>
                                <h2 className="text-4xl font-semibold">PAPER NET</h2>
                                <div className="flex flex-col gap-6 text-2xl mt-8">
                                    <p>
                                        2022年に展覧会を開催した時のポスターです。以前新村水産のポスターで制作した網のaiデータを、立体にするために、レーザーカットしました。
                                    </p>
                                    <p>
                                        This is a poster for an exhibition held in 2022. I laser-cut the net design, which was originally created as AI data for a previous Shinmura Fisheries poster, to turn it into a three-dimensional piece.
                                    </p>
                                    <p>
                                        https://www.rokka-p.co.jp/
                                    </p>
                                    <div>
                                        <p>
                                            Art Director : Norito Shinmura
                                        </p>
                                        <p>
                                            Designer : Kosuke Niwano
                                        </p>
                                        <p>
                                            Designer : Kosuke Mizoguchi
                                        </p>
                                        <p>
                                            Photographer : Shinichi Kaneko
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="flex gap-4 text-xl font-semibold">
                                    <Link href="/Projects/Project3" className="hover:opacity-60 transition">
                                        Prev
                                    </Link>
                                    <span>|</span>
                                    <p className="opacity-60 pointer-events-none">
                                        Next
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ViewTransition>
        </>
    );
}