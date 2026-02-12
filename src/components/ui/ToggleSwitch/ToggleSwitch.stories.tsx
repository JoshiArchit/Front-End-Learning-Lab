import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentProps } from "react";
import { fn } from "storybook/test";
import ToggleSwitch from "./ToggleSwitch";

type StoryProps = ComponentProps<typeof ToggleSwitch>;

const meta: Meta<StoryProps> = {
  component: ToggleSwitch,
  args: {
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ToggleSwitchStory: Story = {
  args: {},
};
