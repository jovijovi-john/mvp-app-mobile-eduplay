import React from "react";
import Page from "../components/Page";
import EduquizLogo from "../components/EduquizLogo";
import PlayerComponent from "../components/PlayerComponent";
import ReturnButton from "../components/ReturnButton";
import SettingsButton from "../components/SettingsButton";

export default function LoadingScreen() {
  return (
    <Page>
      <header>
        <div className="flex justify-between">
          <ReturnButton />
          <SettingsButton />
        </div>
        <EduquizLogo />
      </header>

      <main className="flex flex-col gap-y-4">
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
        <PlayerComponent playerName="Player 1" />
      </main>
    </Page>
  );
}
