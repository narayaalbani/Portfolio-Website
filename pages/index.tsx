import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import NotionServices from "@/services/notion-services";
import { PortfolioPost } from "@/@types/schema";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import CardPortfolio from "@/components/CardPortfolio";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Navbar from "@/components/Navbar";

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await new NotionServices().getPublishedPortfolio();
  return {
    props: {
      portfolio,
    },
  };
};

const Home: NextPage = ({
  portfolio,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Naraya Albani</title>
      </Head>
      <Navbar />
      <Hero />
      <Overview />
      {portfolio.map((item: PortfolioPost) => (
        <CardPortfolio key={item.id} portfolio={item} />
      ))}
      {/* <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {portfolio.map((item: PortfolioPost) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center"
          >
            <CardPortfolio portfolio={item} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};

export default Home;
