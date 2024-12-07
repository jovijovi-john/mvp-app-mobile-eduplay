import { useEffect } from "react";
import AnswerButton from "../components/AnswerButton";
import EduquizLogo from "../components/EduquizLogo";
import Page from "../components/Page";
import SettingsButton from "../components/SettingsButton";
import TimeComponent from "../components/TimeComponent";
import {
  getLocalStorage,
  setLocalStorage,
} from "../services/localstorage-controller";
import { socket } from "../services/socket";
import { useLocation, useNavigate } from "react-router-dom";

export default function FourOptionQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const pin = getLocalStorage("pin");
  const { question, currentQuestion } = location.state.data;
  console.log(location.state.data);

  type emitAnswerProps = {
    status: "correct" | "wrong";
    answerNumber: 1 | 2 | 3 | 4;
    correct: boolean;
  };

  function emitAnswer({ status, answerNumber, correct }: emitAnswerProps) {
    const mapAnswer = {
      1: "opcaoA",
      2: "opcaoB",
      3: "opcaoC",
      4: "opcaoD",
    };

    // Fazer requisição ao CCWS
    const url = `htttp://host/tv3/current-service/apps/100/nodes/${mapAnswer[answerNumber]}`;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        action: "select",
      }),
    });

    socket.emit("send-answer", {
      pin,
      answerNumber,
      correct,
    });

    navigate("/ResultQuestion", {
      state: {
        data: {
          status: status,
        },
      },
    });
  }

  function handleAnswer(answerNumber: 1 | 2 | 3 | 4) {
    // Se a resposta está certa
    if (answerNumber == question.correctAnswer) {
      emitAnswer({ answerNumber, status: "correct", correct: true });
    } else {
      // Se a resposta está errada
      emitAnswer({ answerNumber, status: "wrong", correct: false });
    }
  }

  useEffect(() => {
    socket.on("current-question", (data) => {
      setLocalStorage("current-question", data);

      // If the question has twp options, increase a if-else here
      navigate("/FourOptionQuestion", {
        state: {
          data,
        },
      });
    });

    return () => {
      socket.off("current-question");
    };
  }, []);

  return (
    <Page>
      <header>
        <div className="flex justify-between">
          <div className="bg-white rounded-full p-4 text-sky-600 text-2xl font-bold">
            {currentQuestion + 1}/6
          </div>

          <SettingsButton />
        </div>

        <EduquizLogo />
      </header>

      <main className="px-8 py-12 bg-white mt-12  w-full flex flex-col gap-y-8 rounded-3xl">
        <div className="grid grid-cols-2 place-items-center gap-4 h-full w-full  justify-center ">
          {/* Option 1 */}
          <AnswerButton
            onClick={() => handleAnswer(1)}
            className="h-40 w-40 flex justify-center  items-center flex-1 rounded-3xl cursor-pointer bg-red-700 hover:bg-red-800"
          >
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </AnswerButton>

          {/* Option 2 */}
          <AnswerButton
            onClick={() => handleAnswer(2)}
            className="h-40 w-40 flex justify-center  items-center gap-x-4 flex-1 rounded-3xl cursor-pointer bg-green-700 hover:bg-green-800"
          >
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </AnswerButton>

          {/* Option 3 */}
          <AnswerButton
            onClick={() => handleAnswer(3)}
            className="h-40 w-40 flex flex-col justify-center gap-4 items-center flex-1 rounded-3xl cursor-pointer bg-yellow-500 hover:bg-yellow-600"
          >
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="flex gap-4">
              <div className="h-12 w-12 bg-white rounded-full"></div>
              <div className="h-12 w-12 bg-white rounded-full"></div>
            </div>
          </AnswerButton>

          {/* Option 4 */}
          <AnswerButton
            onClick={() => handleAnswer(4)}
            className="h-40 w-40 grid grid-cols-2 p-4 place-items-center justify-center items-center flex-1 rounded-3xl cursor-pointer bg-blue-800 hover:bg-blue-900"
          >
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </AnswerButton>
        </div>

        <TimeComponent time={60} />
      </main>
    </Page>
  );
}
