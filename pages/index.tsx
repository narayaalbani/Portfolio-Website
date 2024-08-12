import Head from "next/head";
import Navbar from "@/components/Navbar";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import NotionServices from "@/services/notion-services";
import { PortfolioPost } from "@/@types/schema";
import Portfolio from "@/components/Portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Naraya Albani</title>
//       </Head>
//       <Navbar />
//       <Portfolio />
//     </>
//   );
// }

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
  console.log(portfolio);
  return (
    <>
      <Head>
        <title>Naraya Albani</title>
      </Head>
      <Navbar />
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {portfolio.map((item: PortfolioPost) => (
          <SwiperSlide key={item.id}>
            <Portfolio portfolio={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;

// export default function Home({ page }) {
//   return <pre>{JSON.stringify(page, null, 2)}</pre>;
// }

{
  /* <Portfolio /> */
}
{
  /* <pre>{JSON.stringify(page, null, 2)}</pre> */
}

// export const getStaticProps = async () => {
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const page = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID ?? "",
//   });

//   return {
//     props: {
//       page,
//     },
//   };
// };
