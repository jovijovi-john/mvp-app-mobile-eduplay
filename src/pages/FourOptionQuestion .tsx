import { useEffect } from "react";
import AnswerButton from "../components/AnswerButton";
import EduquizLogo from "../components/EduquizLogo";
import Page from "../components/Page";
import SettingsButton from "../components/SettingsButton";
import TimeComponent from "../components/TimeComponent";
import { setLocalStorage } from "../services/localstorage-controller";
import { socket } from "../services/socket";
import { useLocation, useNavigate } from "react-router-dom";

// TODO: componentize Answer Buttons

export default function FourOptionQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { question } = location.state.data;
  const level = "elementarySchool";

  function handleAnswer(answerNumber: 1 | 2 | 3 | 4) {
    if (answerNumber == question[level].correctAnswer) {
      navigate("/ResultQuestion", {
        state: {
          data: {
            status: "correct",
          },
        },
      });
    } else {
      navigate("/ResultQuestion", {
        state: {
          data: {
            status: "wrong",
          },
        },
      });
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
            1/10
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

        <TimeComponent time={20} />
      </main>
    </Page>
  );
}
