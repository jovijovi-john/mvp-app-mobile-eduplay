import EduquizLogo from "../components/EduquizLogo";
import Page from "../components/Page";
import { IconType } from "react-icons";

import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { RiHourglassFill } from "react-icons/ri";

import { socket } from "../services/socket";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setLocalStorage } from "../services/localstorage-controller";

type ScreenStatusType = {
  Icon: IconType;
  colorStatus: string;
  textStatus: string;
};

type StatusList = {
  [key: string]: ScreenStatusType;
};

export default function ResultQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status } = location.state.data;

  const statusList: StatusList = {
    loading: {
      colorStatus: "#0ea5e9",
      textStatus: "Aguarde a próxima pergunta",
      Icon: RiHourglassFill,
    },

    correct: {
      colorStatus: "#008F00",
      textStatus: "Parabéns! Resposta correta :)",
      Icon: FaCheck,
    },

    wrong: {
      colorStatus: "#8F0000",
      textStatus: "Que pena, resposta errada :(",
      Icon: IoMdClose,
    },
  };

  const [currentStatus, setCurrentStatus] =
    useState<keyof typeof statusList>(status);

  const StatusElement: IconType = statusList[currentStatus].Icon;

  useEffect(() => {
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

    const changeStatusTimeout = setTimeout(() => {
      setCurrentStatus("loading");
    }, 5000);

    return () => {
      clearTimeout(changeStatusTimeout);
      socket.off("current-question");
    };
  }, []);

  return (
    <Page>
      <header>
        <EduquizLogo />
      </header>

      <main className="bg-white max-h-[60%] my-auto flex-1 flex items-center justify-center rounded-lg flex-col gap-y-16  ">
        {
          <StatusElement
            size={144}
            color="text-white"
            className="rounded-full p-8"
            style={{ background: statusList[currentStatus].colorStatus }}
          />
        }
        <span
          className="text-3xl font-bold"
          style={{ color: statusList[currentStatus].colorStatus }}
        >
          {statusList[currentStatus].textStatus}
        </span>
      </main>
    </Page>
  );
}
