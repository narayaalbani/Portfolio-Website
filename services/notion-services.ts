import { PortfolioPost } from "./../@types/schema";
import { Client } from "@notionhq/client";

export default class NotionServices {
  private client: Client;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_SECRET });
  }

  async getPublishedPortfolio(): Promise<PortfolioPost[]> {
    const response = await this.client.databases.query({
      database_id: process.env.NOTION_DATABASE_ID ?? "",
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    return response.results.map((res) => {
      return NotionServices.pageToPostTransformer(res);
    });
  }

  private static pageToPostTransformer(page: any): PortfolioPost {
    let cover = page.cover;

    switch (cover.type) {
      case "file":
        cover = page.cover.file;
        break;
      case "external":
        cover = page.cover.external.url;
        break;
      default:
        cover = "";
    }

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Name.title[0].plain_text,
      date: page.properties.Created.created_time,
      description: page.properties.Description.rich_text[0].plain_text,
      tags: page.properties.Tags.multi_select,
    };
  }
}
