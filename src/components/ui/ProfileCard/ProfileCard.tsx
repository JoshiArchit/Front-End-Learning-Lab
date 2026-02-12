import { useTheme } from "../../../context/ThemeContext";

export default function ProfileCard() {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div className="profile-card-container flex flex-col grow gap-2 border-2 border-solid border-slate-600 rounded-md p-4">
      <div className="card-header flex flex-col gap-2 items-center justify-between">
        <div className="w-16 h-16">
          <img
            src="/profile_photo.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="info">Archit Joshi</div>
      </div>

      <hr></hr>

      <div className="card-body"></div>

      <div className="card-footer"></div>
    </div>
  );
}
