import type { Meta, StoryObj } from "@storybook/react";
import ComponentCard from "./ComponentCard";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";

const meta: Meta<typeof ComponentCard> = {
  component: ComponentCard,
  args: {
    title: "Toggle Switch",
  },
};

export default meta;

type Story = StoryObj<typeof ComponentCard>;

export const WithToggleSwitch: Story = {
  render: (args) => (
    <ComponentCard {...args}>
      <ToggleSwitch />
    </ComponentCard>
  ),
};
