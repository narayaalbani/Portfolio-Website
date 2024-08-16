import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-no-repeat bg-cover bg-bottom min-h-[110vh] bg-[url('/gradation.png')]">
      <Navbar />
      <div className="px-4 mx-auto max-w-screen-xl text-center h-[80vh] flex flex-col justify-center">
        <div className="mb-4 text-2xl font-semibold tracking-tight leading-none md:text-3xl lg:text-4xl">
          <h1>Hey!👋👋</h1>
          <h1>
            I'm Naraya Albani, a{" "}
            <span className="text-yellow underline">Programmer</span>
          </h1>
        </div>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          I develop and design experience that make user’s life easier
        </p>
        <a href="#overview" className="size-fit mt-10 mx-auto">
          <Image
            src="/downArrow.svg"
            alt="For More"
            className="animate-bounce"
            width={40}
            height={40}
          />
        </a>
      </div>
    </section>
  );
}
