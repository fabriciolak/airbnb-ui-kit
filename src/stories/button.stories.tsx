import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Add content for button",
      type: "string",
    },
    variant: {
      control: "radio",
      options: ["default", "secondary", "tertiary"],
      description: "Change button variant",
    },
    fullWidth: {
      control: "boolean",
      description: "Change button to a block level element",
      defaultValue: false,
      type: "boolean",
    },
  },
};

export const Default: Story = {
  args: {
    children: "Hello",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Hello",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Hello",
    variant: "tertiary",
  },
};

export default meta;
