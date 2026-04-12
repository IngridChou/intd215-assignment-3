import Image from "next/image";
import Link from "next/link";
import NavBarPearl from "@/app/_components/NavBarPearl";

import { ViewTransition } from 'react'

export default function Project1() {
    return (
        <>
            <NavBarPearl />
            <ViewTransition
                default="none"
                enter="auto"
                exit="auto"
            >
                <div className="flex flex-wrap sm:flex-row gap-10 sm:gap-6 px-6 sm:px-24 py-14 items-start bg-pearl text-blue">
                    {/* image */}
                    <div className="flex flex-col w-full sm:max-w-1/2 gap-10">
                        <Image
                            src="/daonosiji.jpg"
                            alt="image 1"
                            width={973}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonosiji2.jpg"
                            alt="image 2"
                            width={973}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonosiji3.jpg"
                            alt="image 3"
                            width={973}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonosiji4.jpg"
                            alt="image 4"
                            width={973}
                            height={1385}
                            className="object-cover"
                        />
                    </div>

                    {/* text */}
                    <div className="sticky top-34 max-w-150">
                        <div className="flex flex-col justify-between gap-30">
                            <div>
                                <h2 className="text-4xl font-semibold">新村水産「島の四季」</h2>
                                <div className="flex flex-col gap-6 text-2xl mt-8">
                                    <p>
                                        浮島の地図の周りに、島で穫れる魚の名前を配置した作品です。季節のよって穫れる魚の種類や漁獲高が違うのが分かると思います。
                                    </p>
                                    <p>
                                        This work places the names of fish caught on the island around a map of Ukishima. It shows how the types of fish and the catch amounts vary depending on the season.
                                    </p>
                                    <div>
                                        <p>
                                            Art Director : Norito Shinmura
                                        </p>
                                        <p>
                                            Copywriter : Kazutaka Sato
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="flex gap-4 text-xl font-semibold">
                                    <Link href="/Projects/Project2" className="hover:opacity-60 transition">
                                        Prev
                                    </Link>
                                    <span>|</span>
                                    <Link href="/Projects/Project4" className="hover:opacity-60 transition">
                                        Next
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ViewTransition>
        </>
    );
}