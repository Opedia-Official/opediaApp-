import * as React from "react";
import { List } from "react-native-paper";

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion title="Web & Software">
        <List.Item title="Web Design" />
        <List.Item title="SAAS (Software As A Service)" />
        <List.Item title="Dashboard Design" />
        <List.Item title="Payment Gateway" />
        <List.Item title="Web Develpoment" />
        <List.Item title="WordPress Develpoment" />
        <List.Item title="API Integration" />
        <List.Item title="Apps Develpoment" />
        <List.Item title="Multi-Language" />
        <List.Item title="MERN Service" />
        <List.Item title="React Application" />
      </List.Accordion>

      <List.Accordion
        title="Product Design"
        expanded={expanded}
        onPress={handlePress}                  
      >
        <List.Item title="UX Design" />
        <List.Item title="Web Application UI" />
        <List.Item title="Mobile Application UI" />
        <List.Item title="Product Redesign" />
        <List.Item title="UI Design" />
      </List.Accordion>
      <List.Accordion title="Ecommerce Solution">
        <List.Item title="Ecommerce Product" />
        <List.Item title="Ecommerce App Development" /> 
        <List.Item title="Ecommerce Marketing" />
        <List.Item title="B2C Marketing" />
        <List.Item title="Ecommerce Design" />
        <List.Item title="Ecommerce Development" />
      </List.Accordion>

      <List.Accordion title="Digital Marketing">
        <List.Item title="Content Marketing" />
        <List.Item title="Google Ad Campaign" />
        <List.Item title="PPC Advertisement" />
        <List.Item title="Affiliate Marketing" />
        <List.Item title="SMM Service" />
        <List.Item title="F-commerce Service" />
        <List.Item title="SEO Service" />
        <List.Item title="Email Marketing" />
        <List.Item title="Content writing" />
      </List.Accordion>
      <List.Accordion title="Multimedia & Printing">
        <List.Item title="3D Video Animation" />
        <List.Item title="Promotional Video Creation" />
        <List.Item title="Print Design Service" />
        <List.Item title="Video Editing Service" />
        <List.Item title="Corporate Brand Guideline" />
        <List.Item title="2D Video Animation" />
        <List.Item title="Corporate Printing Service" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
