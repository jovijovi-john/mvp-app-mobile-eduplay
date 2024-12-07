import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import PlayerComponent from "../components/PlayerComponent";
import ReturnButton from "../components/ReturnButton";
import SettingsButton from "../components/SettingsButton";
import { socket } from "../services/socket";
import {
  getLocalStorage,
  setLocalStorage,
} from "../services/localstorage-controller";
import { RiHourglassFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type UserType = {
  nickname: string;
};

export default function LoadingScreen() {
  const [users, setUsers] = useState<UserType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pin = getLocalStorage("pin");

    if (pin) {
      socket.emit("get-users-room", {
        pin,
      });
    }

    socket.on("send-users-room", (data) => {
      const usersArray = Object.values(data.users) as UserType[];
      console.log(data);
      setUsers(usersArray);
    });

    socket.on("disconnection", (data) => {
      const usersArray = Object.values(data.users) as UserType[];
      setUsers(usersArray);
    });

    socket.on("current-question", (data) => {
      setLocalStorage("current-question", data);

      console.log(data);

      // If the question has twp options, increase a if-else here
      navigate("/FourOptionQuestion", {
        state: {
          data,
        },
      });
    });

    return () => {
      socket.off("send-users-room");
      socket.off("current-question");
      socket.off("disconnection");
    };
  }, []);

  return (
    <Page>
      <header>
        <div className="flex justify-between">
          <ReturnButton />
          <SettingsButton />
        </div>
        <EduquizLogo />
      </header>

      <main className="flex flex-col gap-y-4 items-center">
        <RiHourglassFill size={96} color="white" className="mx-auto" />
        <span className="text-2xl font-semibold text-white">
          Aguardando jogadores...
        </span>

        {users.map((user) => (
          <PlayerComponent
            key={user.nickname}
            playerName={user.nickname}
            className="w-full"
          />
        ))}
      </main>
    </Page>
  );
}
