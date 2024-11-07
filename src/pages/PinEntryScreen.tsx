import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import RoundedIcon from "../components/RoundedIcon";
import InputWithIcon from "../components/InputWithIcon";
import Button from "../components/Button";
import SettingsButton from "../components/SettingsButton";
import { useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";
import { CiLock } from "react-icons/ci";

export default function PinEntryScreen() {
  const navigate = useNavigate();

  return (
    <Page>
      <header className="mt-16">
        <EduquizLogo />
      </header>

      <main className="flex flex-col items-center justify-center h-full gap-y-16">
        {/* Inputs */}
        <div className="flex flex-col gap-y-4 w-full mb-28 ">
          <InputWithIcon Icon={CiLock} name="pin" placeholder="PIN do jogo" />
        </div>
      </main>

      <footer className="flex items-center justify-between ">
        <SettingsButton />

        <Button text="Entrar" onClick={() => navigate("/loadingScreen")} />

        <RoundedIcon Icon={GiOpenBook} size={36} />
      </footer>
    </Page>
  );
}
