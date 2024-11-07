import React from "react";
import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  function handlePreviousScreen() {
    navigate(-1);
  }

  return (
    <Page containerClassname="justify-between">
      <header className="mt-16">
        <EduquizLogo />
      </header>

      <main className="bg-white border-4 border-sky-700 rounded-3xl mx-12 p-6 text-2xl mb-24">
        <p className="text-sky-600 font-medium text-center">
          Bem-vindo ao EduQuiz! <br />
          uma plataforma interativa de quizzes e aprendizado gamificado que
          torna o processo de ensino mais divertido e permite que o professor
          acompanhem o progresso de forma interativa.
        </p>
      </main>

      <footer className="flex items-center justify-center">
        <Button text="voltar" onClick={() => handlePreviousScreen()} />
      </footer>
    </Page>
  );
}
