import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import RoundedIcon from "../components/RoundedIcon";
import { FaUser } from "react-icons/fa";
import { MdOutlineAddAPhoto } from "react-icons/md";
import InputWithIcon from "../components/InputWithIcon";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/Button";
import SettingsButton from "../components/SettingsButton";
import { useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";

export default function InitialPage() {
  const navigate = useNavigate();
  function uploadPhoto() {}

  return (
    <Page>
      <header className="mt-16">
        <EduquizLogo />
      </header>

      <main className="flex flex-col items-center justify-center h-full gap-y-16">
        <div className="relative mx-auto">
          <div className="rounded-[48px] p-8 bg-white inline-flex">
            <FaUser className="text-sky-600" size={96} />
          </div>

          <RoundedIcon
            Icon={MdOutlineAddAPhoto}
            size={24}
            className="bg-white absolute -left-4 -bottom-4 border-2 border-sky-500"
            onClick={uploadPhoto}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-y-4 w-full ">
          <InputWithIcon
            Icon={FaRegUser}
            name="nickname"
            placeholder="Nickname"
          />
          <InputWithIcon
            Icon={RiLockPasswordLine}
            name="password"
            placeholder="Password"
          />
        </div>
      </main>

      <footer className="flex items-center justify-between ">
        <SettingsButton />

        <Button text="Entrar" onClick={() => navigate("/PinEntryScreen")} />

        <RoundedIcon Icon={GiOpenBook} size={36} />
      </footer>
    </Page>
  );
}
