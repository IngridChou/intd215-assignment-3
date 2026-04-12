import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-0 px-6 sm:px-24 mt-32 sm:flex-row sm:gap-44">

                {/* image */}
                <div className="max-w-[503px]">
                    <div className="sticky top-20">
                        <Image
                            src="/designer.webp"
                            alt="Norito Shinmura"
                            width={872}
                            height={872}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* text */}
                <div className="flex-1 mt-12 sm:mt-72">
                    <h2 className="text-4xl font-semibold">新村 則人</h2>
                    <h1 className="text-5xl">NORITO SHINMURA</h1>
                    <div className="flex flex-col gap-6 text-2xl mt-8">
                    <p>Born in 1960 on Ukashima Island, Yamaguchi Prefecture, the last of 8 siblings in a fisherman’s family. During elementary school, became attracted to poster art under the influence of his 4th grade teacher and decided to become a designer. After graduating from Osaka Designers’ College, worked in Osaka until 1984, when he fulfilled a long desire to work in Tokyo under Shin Matsunaga, joining Shin Matsunaga Design Inc. Subsequently worked for Taki Corporation and I&S BBDO before establishing Shinmura Design Office in 1995. Major clients include Shiseido（Elixir, INOUI ID, ZEN）, Ryohin Keikaku（MUJI Campground, BGM）, Tokyo Olympics Candidature File, Sapporo Breweries, McDonald’s Japan, SSP Co., Kadokawa Shoten Publishing, Shinmura Fisheries, etc.</p>
                    <p>Major exhibitions to date include “Norito Shinmura”（1997, Hanae Mori Building Open Gallery）, “JAGDA New Designer Awards Exhibition”（2000, Creation Gallery G8）, “Graphic Wave 2002”（2002, Ginza Graphic Gallery）, “Norito Shinmura”（2007, Guanshayue Art Museum, Hangzhou, China）, “Seas and Mountains and Norito Shinmura”（2010, Ginza Graphic Gallery）, Norito Shinmura Environmental Poster Exhibition (2017, Yamaguchi Prefectural Art Museum), Norito Shinmura Poster Exhibition (2022, ZHIYE Art Museum).</p>
                    <p>Awards received include Mainichi Advertising Design Award（Grand Prix）, Environmental Advertising Contest Award（Grand Prize）, Tokyo Type Directors Club Award（Bronze Prize）, Good Design Award, New York Art Directors Club Awards （Silver and Bronze Prizes）, New York Type Directors Club Award, JAGDA New Designer Award, International Biennale of Graphic Design in Brno Award（Gold Prize）, China International Poster Biennial Award（Second Prize）, International Poster Triennial in Toyama Award（Bronze Prize）, Warsaw International Poster Biennale Award（Silver Prize), Taiwan International Poster Design Award（Silver Prize）, Ningbo International Poster Biennial（Gold and Bronze Prizes）, Tokyo Art Directors Club Award, etc. Member of JAGDA and Tokyo ADC.</p>
                    </div>
                </div>

            </div>
        </>
    );
};