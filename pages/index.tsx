import Head from "next/head";
import Navbar from "@/components/Navbar";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import NotionServices from "@/services/notion-services";
import { PortfolioPost } from "@/@types/schema";
import Portfolio from "@/components/Portfolio";

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
      {portfolio.map((item: PortfolioPost) => (
        <Portfolio key={item.id} portfolio={item} />
      ))}
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
