import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import RoundedIcon from "../components/RoundedIcon";
import Button from "../components/Button";
import SettingsButton from "../components/SettingsButton";
import { useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getLocalStorage,
  setLocalStorage,
} from "../services/localstorage-controller";
import { socket } from "../services/socket";

const loginRoomSchema = z.object({
  pin: z.string().length(4),
});

type LoginRoomSchema = z.infer<typeof loginRoomSchema>;

export default function PinEntryScreen() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginRoomSchema>({
    resolver: zodResolver(loginRoomSchema),
  });

  function handLoginRoom(formData: LoginRoomSchema) {
    setLocalStorage("pin", formData.pin);
    const user = getLocalStorage("user");

    socket.emit("login", {
      pin: formData.pin,
      user,
    });

    navigate("/LoadingScreen");
  }

  return (
    <Page>
      <header className="mt-16">
        <EduquizLogo />
      </header>

      <form
        onSubmit={handleSubmit(handLoginRoom)}
        className="flex flex-col items-center justify-center h-full gap-y-16"
      >
        {/* Inputs */}
        <div className="flex flex-col gap-y-4 w-full mb-28 ">
          <div
            className={`bg-white rounded-3xl w-full py-6 px-4 flex gap-x-4 hover:cursor-pointer`}
          >
            <CiLock className="text-sky-500" size={32} />

            <input
              {...register("pin")}
              placeholder={"PIN do Jogo"}
              className="bg-transparent w-full text-sky-700 outline-none caret-sky-500 text-2xl placeholder-zinc-400"
            />
          </div>
        </div>

        <footer className="flex items-center justify-around w-full">
          <SettingsButton />

          <Button type="submit" text="Entrar" />

          <RoundedIcon Icon={GiOpenBook} size={36} />
        </footer>
      </form>
    </Page>
  );
}
