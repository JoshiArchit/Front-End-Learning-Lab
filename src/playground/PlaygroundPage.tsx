import ToggleSwitch from "../components/ui/ToggleSwitch/ToggleSwitch";

export function PlaygroundPage() {
  return (
    <div className="playground-page-container flex flex-col">
      PAGE CONTAINER
      <div className="flex">Components</div>
      <ToggleSwitch darkTheme={true} />
    </div>
  );
}
