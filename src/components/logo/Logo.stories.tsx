import { Meta, StoryFn } from "@storybook/react";
import { LogoProps } from "./types";
import logo from "@/assets/svgs/grosvenor_logo.svg";
import Logo from "./Logo.component";
import { colors } from "@/constants/colors";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    logoBgColor: { control: "color" },
    className: { control: "text" },
    logoImage: { control: "text" },
  },
} as Meta;

const Template: StoryFn<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImage: logo,
  logoBgColor: colors.richBlack,
};
