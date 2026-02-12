import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProfileCard from "./ProfileCard";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof ProfileCard>;

const meta: Meta<StoryProps> = {
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ProfileCardStory: Story = {
  args: {},
};
