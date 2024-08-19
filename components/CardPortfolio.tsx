import { PortfolioPost } from "@/@types/schema";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

type PortfolioPostProps = {
  portfolio: PortfolioPost;
};

dayjs.extend(require("dayjs/plugin/localizedFormat"));

const CardPortfolio: FunctionComponent<PortfolioPostProps> = ({
  portfolio,
}) => {
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       className="rounded-t-lg w-full h-48 object-cover"
    //       src={portfolio.cover}
    //       alt=""
    //     />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {portfolio.title}
    //       </h5>
    //     </a>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {dayjs(portfolio.date).format("LL")}
    //     </p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {portfolio.description}
    //     </p>
    //     {portfolio.tags.map((tag) => (
    //       <div
    //         key={tag.id}
    //         className={
    //           "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-" +
    //           tag.color +
    //           " rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         }
    //       >
    //         {tag.name}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={portfolio.title}
            className="w-full object-cover h-[140px]"
            src={portfolio.cover}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{portfolio.title}</b>
          {portfolio.tags.map((item) => (
            <p key={item.id} className="text-default-500">
              {item.name}
            </p>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPortfolio;
