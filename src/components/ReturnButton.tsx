import { useNavigate } from "react-router-dom";
import RoundedIcon from "./RoundedIcon";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function ReturnButton() {
  const navigate = useNavigate();

  function navigatePreviousScreen() {
    navigate(-1);
  }

  return (
    <RoundedIcon
      Icon={RiArrowGoBackLine}
      size={36}
      onClick={navigatePreviousScreen}
    />
  );
}
