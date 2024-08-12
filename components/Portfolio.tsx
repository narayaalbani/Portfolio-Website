import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PortfolioPost } from "@/@types/schema";
import { FunctionComponent } from "react";
import dayjs from "dayjs";

type PortfolioPostProps = {
  portfolio: PortfolioPost;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Portfolio: FunctionComponent<PortfolioPostProps> = ({ portfolio }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={portfolio.cover} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {portfolio.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {portfolio.description}
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Portfolio;

// export const getStaticProps: GetStaticProps = async () => {
//   const portfolio = await new NotionServices().getPublishedPortfolio();
//   return {
//     props: {
//       portfolio,
//     },
//   };
// };

// interface type {
//   title: string;
// }

// export function CardPortfolio({ title }: type) {
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <Image
//           width={512}
//           height={287}
//           className="rounded-t-lg"
//           src="/portfolio.png"
//           alt=""
//         />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//         <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Read more
//         </div>
//       </div>
//     </div>
//   );
// }

// const Portfolio: NextPage = ({
//   portfolio,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   console.log(portfolio);
//   return (
//     <Swiper
//       modules={[Pagination]}
//       spaceBetween={20}
//       slidesPerView={3}
//       pagination={{ clickable: true }}
//     >
//       {portfolio.map((item: PortfolioPost) => (
//         <SwiperSlide>
//           <CardPortfolio title={item.title} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Portfolio;
