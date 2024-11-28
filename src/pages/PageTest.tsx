import React from "react";
import { socket } from "../services/socket";

export default function PageTest() {
  function startQuestion() {
    socket.emit("start-question", {
      questionNumber: "1",
      pin: "1234",
    });
  }

  function startQuiz() {
    socket.emit("start-quiz", {
      pin: "1234",
    });
  }
  return (
    <div className="bg-black h-full w-full flex-1 text-white flex items-center justify-center">
      <button
        className="p-4 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded text-white"
        onClick={startQuestion}
      >
        Start Question
      </button>

      <button
        className="p-4 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 rounded text-white"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}
