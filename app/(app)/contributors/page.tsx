import { Header } from "@/components/header"
import type { Metadata } from "next"
import Resources from "./resources"
import { getAllContributorsMdxFiles  } from "@/utils/contributors";

export const metadata: Metadata = {
  title: "Portfolio",
}

export interface MdxData {
  author: string;
  role: [];
  twitter: string;
  site: string;
  stack: string[];
  github: string;
  image: string;
  fileName: string;
}

export default async function Page() {
  const allMdxData = await getAllContributorsMdxFiles();

  return (
    <div className="py-6">
      <Header
        title="Contributors"
        description="Have any questions or need assistance? Feel free to reach out to us anytime. We’re here to help you with anything you need."
      />
      <Resources allMdxData={allMdxData} />
    </div>
  )
}
