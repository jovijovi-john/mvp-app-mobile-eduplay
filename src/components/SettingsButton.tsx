import { IoMdSettings } from "react-icons/io";
import RoundedIcon from "./RoundedIcon";
import { useNavigate } from "react-router-dom";

export default function SettingsButton() {
  const navigate = useNavigate();

  function navigateToWelcomeScreen() {
    navigate("/welcomeScreen");
  }
  return (
    <RoundedIcon
      Icon={IoMdSettings}
      size={36}
      onClick={navigateToWelcomeScreen}
    />
  );
}
