import type { Metadata } from "next";
import DirectoryPage from "@/views/DirectoryPage";

export const metadata: Metadata = {
  title: "Services Directory | Fort-Knox Industrial",
  description:
    "A comprehensive technical overview of Fort-Knox's operational excellence in heavy industrial energy sectors.",
};

export default function Page() {
  return <DirectoryPage />;
}
