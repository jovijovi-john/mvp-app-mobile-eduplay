import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import RoundedIcon from "../components/RoundedIcon";
import { FaUser } from "react-icons/fa";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/Button";
import SettingsButton from "../components/SettingsButton";
import { useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setLocalStorage } from "../services/localstorage-controller";

const loginSchema = z.object({
  nickname: z.string().min(2).max(16),
  password: z.string().min(6).max(8),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function InitialPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginSchema) {
    // So entra nessa função se passar pela validação do handleSubmit com os resolvers
    setLocalStorage("user", data);
    navigate("/PinEntryScreen");
  }

  function uploadPhoto() {}

  return (
    <Page>
      <header className="mt-16">
        <EduquizLogo />
      </header>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col items-center justify-center h-full gap-y-16"
      >
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
          {errors.nickname?.type === "too_small" && (
            <span className="flex p-1 text-sm border-2 border-red-700 bg-red-200 text-red-700 font-bold">
              O nickname deve ter no mínimo 2 caracteres
            </span>
          )}

          {errors.nickname?.type === "too_big" && (
            <span className="flex p-1 text-sm border-2 border-red-700 bg-red-200 text-red-700 font-bold">
              O nickname deve ter no máximo 16 caracteres
            </span>
          )}
          <div
            className={`bg-white rounded-3xl w-full py-6 px-4 flex gap-x-4 hover:cursor-pointer`}
          >
            <FaRegUser className="text-sky-500" size={32} />

            <input
              {...register("nickname")}
              placeholder={"Nickname"}
              type="text"
              className="bg-transparent w-full text-sky-700 outline-none caret-sky-500 text-2xl placeholder-zinc-400"
            />
          </div>

          {errors.password?.type === "too_small" && (
            <span className="flex p-1 text-sm border-2 border-red-700 bg-red-200 text-red-700 font-bold">
              A senha deve ter no mínimo 6 caracteres
            </span>
          )}

          {errors.password?.type === "too_big" && (
            <span className="flex p-1 text-sm border-2 border-red-700 bg-red-200 text-red-700 font-bold">
              A senha deve ter no máximo 8 caracteres
            </span>
          )}

          <div
            className={`bg-white rounded-3xl w-full py-6 px-4 flex gap-x-4 hover:cursor-pointer`}
          >
            <RiLockPasswordLine className="text-sky-500" size={32} />

            <input
              {...register("password")}
              placeholder={"Password"}
              type="password"
              className="bg-transparent w-full text-sky-700 outline-none caret-sky-500 text-2xl placeholder-zinc-400"
            />
          </div>
        </div>

        <footer className="flex items-center justify-between w-full ">
          <SettingsButton />

          <Button type="submit" text="Entrar" />

          <RoundedIcon Icon={GiOpenBook} size={36} />
        </footer>
      </form>
    </Page>
  );
}
