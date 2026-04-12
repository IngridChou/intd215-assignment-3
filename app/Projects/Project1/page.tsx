import Image from "next/image";
import Link from "next/link";
import NavBarBlue from "@/app/_components/NavBarBlue";

import { ViewTransition } from "react";

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
                            src="/bowen.jpg"
                            alt="image 1"
                            width={979}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/bowen2.jpg"
                            alt="image 2"
                            width={979}
                            height={1385}
                            className="object-cover"
                        />
                        <Image
                            src="/bowen3.jpg"
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
                                <h2 className="text-4xl font-semibold">新村水産「波紋 」</h2>
                                <div className="flex flex-col gap-6 text-2xl mt-8">
                                    <p>
                                        イラストレーターの山田博之さんに、「波紋と魚影」を描いて頂きました。山田さんの描くイラストは、リアルさだけではない生命力を感じます。私の大好きなイラストレーターの一人です。
                                    </p>
                                    <p>
                                        Illustrator Hiroyuki Yamada created the piece “Ripples and Fish Shadows” for us. His illustrations convey not only realism, but also a strong sense of life and vitality. He is one of my favorite illustrators.
                                    </p>
                                    <div>
                                        <p>
                                            Art Director : Norito Shinmura
                                        </p>
                                        <p>
                                            Illustrator : Hiroyuki Yamada
                                        </p>
                                        <p>
                                            Designer : Kosuke Niwano
                                        </p>
                                        <p>
                                            Copywriter : Kazutaka Sato
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="flex gap-4 text-xl font-semibold">
                                    <p className="opacity-60 pointer-events-none">
                                        Prev
                                    </p>
                                    <span>|</span>
                                    <Link href="/Projects/Project2" className="hover:opacity-60 transition">
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