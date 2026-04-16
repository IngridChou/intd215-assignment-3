import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview() {
    return (
        <>
            <div className="flex flex-col max-w-full justify-between px-6 sm:px-24 font-semibold text-2xl gap-6 mt-12">

                {/* upper row - with link */}
                <div className="flex flex-wrap gap-3 items-end justify-center">

                    <Link href="/Projects/Project1">
                        <div className="flex flex-col gap-2">
                            <div className="relative max-w-80 overflow-hidden group">
                                <Image
                                    src="/bowen.jpg"
                                    alt="Project Preview 1"
                                    width={979}
                                    height={1385}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <p className="text-white text-4xl font-normal">「波紋」</p>
                                </div>
                            </div>
                            <p>Ripple</p>
                        </div>
                    </Link>

                    <Link href="/Projects/Project2">
                        <div className="flex flex-col gap-2">
                            <div className="relative max-w-80 overflow-hidden group">
                                <Image
                                    src="/daonoyushi.jpg"
                                    alt="Project Preview 2"
                                    width={980}
                                    height={1385}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <p className="text-white text-4xl font-normal">「島の漁師」</p>
                                </div>
                            </div>
                            <p>Island Fisherman</p>
                        </div>
                    </Link>

                    <Link href="/Projects/Project3">
                        <div className="flex flex-col gap-2">
                            <div className="relative max-w-80 overflow-hidden group">
                                <Image
                                    src="/daonosiji.jpg"
                                    alt="Project Preview 3"
                                    width={973}
                                    height={1385}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <p className="text-white text-4xl font-normal">「島の四季」</p>
                                </div>
                            </div>
                            <p>Four Seasons of the Island</p>
                        </div>
                    </Link>

                    <Link href="/Projects/Project4">
                        <div className="flex flex-col gap-2">
                            <div className="relative max-w-80 overflow-hidden group">
                                <Image
                                    src="/papernet.jpg"
                                    alt="Project Preview 4"
                                    width={979}
                                    height={1385}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <p className="text-white text-4xl font-normal">PAPER NET</p>
                                </div>
                            </div>
                            <p>PAPER NET</p>
                        </div>
                    </Link>
                </div>

                {/* bottom row */}
                <div className="flex flex-wrap gap-3 items-end justify-center">
                    <div className="flex flex-col gap-2">
                        <div className="relative max-w-80 overflow-hidden group">
                            <Image
                                src="/shuidi.jpg"
                                alt="Project Preview 5"
                                width={982}
                                height={1385}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white text-4xl font-normal">「水滴」</p>
                            </div>
                        </div>
                        <p>Water Drop</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="relative max-w-80 overflow-hidden group">
                            <Image
                                src="/dayunowu.jpg"
                                alt="Project Preview 6"
                                width={982}
                                height={1385}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white text-4xl font-normal">「大漁の舞」</p>
                            </div>
                        </div>
                        <p>Dance of the Big Catch</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="relative max-w-80 overflow-hidden group">
                            <Image
                                src="/wang.jpg"
                                alt="Project Preview 7"
                                width={985}
                                height={1385}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white text-4xl font-normal">「網」</p>
                            </div>
                        </div>
                         <p>Net</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="relative max-w-80 overflow-hidden group">
                            <Image
                                src="/tagu.jpg"
                                alt="Project Preview 8"
                                width={980}
                                height={1385}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white text-4xl font-normal">タグ」</p>
                            </div>
                        </div>
                        <p>Tag</p>
                    </div>
                </div>
            </div>
        </>
    );
}