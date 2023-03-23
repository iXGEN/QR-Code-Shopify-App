import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page
      title="Product selector"
      primaryAction={{
        content: "Select products",
        onAction: () => console.log("clicked"),
      }}
    />
  );
}
