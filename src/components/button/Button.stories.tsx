import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from './Button.component';

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<{ children: React.ReactNode; className?: string }> = (
  args
) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Bet Now",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  children: "Custom Class Button",
  className: "bg-blue-600 hover:bg-blue-500",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  className: "bg-primaryGray hover:bg-secondaryGray"
};

Disabled.parameters = {
  controls: {
    disabled: true,
  },
};
