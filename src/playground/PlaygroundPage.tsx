import ComponentCard from "../components/common/ComponentCard/ComponentCard";
import ProfileCard from "../components/ui/ProfileCard/ProfileCard";
import ToggleSwitch from "../components/ui/ToggleSwitch/ToggleSwitch";

export function PlaygroundPage() {
  return (
    <div className="flex min-h-max gap-3">
      <ComponentCard title="Toggle Switch">
        <ToggleSwitch />
      </ComponentCard>

      <ComponentCard title="Profile Card">
        <ProfileCard />
      </ComponentCard>
    </div>
  );
}
