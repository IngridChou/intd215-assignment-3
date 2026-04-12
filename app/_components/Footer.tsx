import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="w-full h-150 sm:h-200 flex flex-wrap justify-between px-6 sm:px-24 py-12 sm:py-48 mt-72 bg-blue text-white">
                <div className="flex flex-col text-4xl mt-8">
                    <h3 className="text-2xl font-semibold">Mail</h3>
                    <p>ns@shinmura-d.co.jp</p>
                    <br />
                    <h3 className="text-2xl font-semibold">Website</h3>
                    <Link href="https://www.garden-d.co.jp/" target="_blank">www.garden-d.co.jp</Link>
                </div>
                <div className="flex flex-row items-end justify-start gap-5">
                    <Link href="https://www.facebook.com/shinmura.norito/" target="_blank">
                        <Image
                            className="w-20 h-auto"
                            src="/fb.svg"
                            alt="Project Preview 1"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/shinmuranorito/" target="_blank">
                    <Image
                        className="w-20 h-auto"
                        src="/ig.svg"
                        alt="Project Preview 1"
                        width={83}
                        height={83}
                    />
                    </Link>
                    <Link href="https://x.com/NoritoShinmura" target="_blank">
                    <Image
                        className="w-20 h-auto"
                        src="/x.svg"
                        alt="Project Preview 1"
                        width={83}
                        height={83}
                    />
                    </Link>
                    <Link href="https://www.linkedin.com/in/%E5%89%87%E4%BA%BA-%E6%96%B0%E6%9D%91-99489546/" target="_blank">
                    <Image
                        className="w-20 h-auto mt-2"
                        src="/in.svg"
                        alt="Project Preview 1"
                        width={95}
                        height={92}
                    />
                    </Link>
                </div>
            </div>
        </>
    );
};