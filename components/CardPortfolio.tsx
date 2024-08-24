import { PortfolioPost } from "@/types/postPortfolio";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import Image from "next/image";

type PortfolioPostProps = {
  portfolio: PortfolioPost;
};

dayjs.extend(require("dayjs/plugin/localizedFormat"));

const CardPortfolio: FunctionComponent<PortfolioPostProps> = ({
  portfolio,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-t-lg w-full h-48 object-cover"
          src={portfolio.cover}
          alt=""
          width={384}
          height={192}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {portfolio.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {dayjs(portfolio.date).format("LL")}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {portfolio.description}
        </p>
        {portfolio.tags.map((tag) => (
          <div
            key={tag.id}
            className={
              "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-" +
              tag.color +
              " rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPortfolio;
