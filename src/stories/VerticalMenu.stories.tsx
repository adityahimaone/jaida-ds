import React from "react";
import "@/index.css";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Link } from "react-router-dom";
import { House, Compass, Cloud, ChatCircle } from "@phosphor-icons/react";

import VerticalMenu from "../components/VerticalMenu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: "Components/VerticalMenu",
  component: VerticalMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
      routeParams: {},
    },
  },
} satisfies Meta<typeof VerticalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: any = () => {
  return (
    <div>
      <VerticalMenu
        className="gap-y-6"
        lists={[
          {
            id: "home",
            link: <Link to="/">Home</Link>,
            slug: "/",
            icon: <House size={22} weight="duotone" />,
          },
          {
            id: "locations",
            link: <Link to="/locations">Locations</Link>,
            slug: "/locations",
            icon: <Compass size={22} weight="duotone" />,
          },
          {
            id: "cloud-storage",
            link: <Link to="/cloud">Cloud Storage</Link>,
            slug: "/cloud",
            icon: <Cloud size={22} weight="duotone" />,
          },
          {
            id: "messages",
            link: <Link to="/messages">Messages</Link>,
            slug: "/messages",
            hasNotification: true,
            badge: {
              label: "10",
              state: "success",
            },
            icon: <ChatCircle size={22} weight="duotone" />,
          },
        ]}
      />
    </div>
  );
};
