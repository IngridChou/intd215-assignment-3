'use client';
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
                            src="/daonoyushi.jpg"
                            alt="image 1"
                            width={980}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonoyushi2.jpg"
                            alt="image 2"
                            width={980}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonoyushi3.jpg"
                            alt="image 3"
                            width={980}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/daonoyushi4.jpg"
                            alt="image 4"
                            width={980}
                            height={1385}
                            className="object-cover"
                        />
                    </div>

                    {/* text */}
                    <div className="sticky top-34 max-w-150">
                        <div className="flex flex-col justify-between gap-22">
                            <div>
                                <h2 className="text-4xl font-semibold">新村水産「島の漁師」</h2>
                                <div className="flex flex-col gap-6 text-2xl mt-8">
                                    <p>
                                        モデルは私の兄や親戚の人です。泳ぐ魚と漁師を同時に撮影したくて、アクリルの水槽を用意しました。元気な魚を撮るために船に撮影セットを用意し、釣っている現場に行って撮影しました。
                                    </p>
                                    <p>
                                        The models are my brother and some of my relatives. I wanted to photograph both the swimming fish and the fisherman at the same time, so I prepared an acrylic tank. To capture lively fish, I set up a shooting setup on a boat and went to the actual fishing site to take the photos.
                                    </p>
                                    <div>
                                        <p>
                                            Art Director : Norito Shinmura
                                        </p>
                                        <p>
                                            Photographer : Ko Hosokawa
                                        </p>
                                        <p>
                                            Copywriter : Kazutaka Sato
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="flex gap-4 text-xl font-semibold">
                                    <Link href="/Projects/Project1" className="hover:opacity-60 transition">
                                        Prev
                                    </Link>
                                    <span>|</span>
                                    <Link href="/Projects/Project3" className="hover:opacity-60 transition">
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