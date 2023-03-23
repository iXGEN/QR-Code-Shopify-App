import React from "react";
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class HomePage extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page
        title="Product selector"
        primaryAction={{
          content: "Select products",
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker resourceType="Product" open={this.state.open} />
      </Page>
    );
  }
}

export default HomePage;
