import Navbar from "./Navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const SosmedItem = [
    { name: "X", href: "https://x.com/" },
    {
      name: "GitHub",
      href: "https://github.com/",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
    },
  ];

  return (
    <section className="bg-no-repeat bg-cover bg-bottom min-h-[100vh] bg-[url('/gradation.png')]">
      <div className="px-6 mx-auto max-w-screen-xl text-center h-[80vh] flex flex-col justify-center">
        <div className="mb-4 text-2xl font-semibold tracking-tight leading-none md:text-3xl lg:text-4xl">
          <h1>Hey!👋👋</h1>
          <h1>
            I'm Naraya Albani, a{" "}
            <span className="md:inline-block">
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-yellow underline">Programmer</span>',
                    '<span class="text-blue underline">Designer</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
        </div>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          I develop and design experience that make user’s life easier
        </p>
        <div className="flex gap-10 mx-auto">
          {SosmedItem.map((item) => (
            <a
              key={item.name}
              href={item.href + "narayaalbani"}
              target="_blank"
              className="size-fit"
            >
              <Image
                src={"/icon/" + item.name + ".svg"}
                alt={"Naraya Albani's " + item.name + " Account"}
                width={32}
                height={32}
                className="grayscale hover:grayscale-0 md:size-9 lg:size-10"
              />
            </a>
          ))}
        </div>
        <a href="#overview" className="size-fit mt-10 mx-auto">
          <Image
            src="/icon/downArrow.svg"
            alt="For More"
            className="animate-bounce md:size-9 lg:size-10"
            width={32}
            height={32}
          />
        </a>
      </div>
    </section>
  );
}
