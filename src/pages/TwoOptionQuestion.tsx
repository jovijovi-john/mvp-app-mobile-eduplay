import AnswerButton from "../components/AnswerButton";
import EduquizLogo from "../components/EduquizLogo";
import Page from "../components/Page";
import SettingsButton from "../components/SettingsButton";
import TimeComponent from "../components/TimeComponent";

// TODO: componentize Answer Buttons

export default function TwoOptionQuestion() {
  return (
    <Page>
      <header>
        <div className="flex justify-between">
          <div className="bg-white rounded-full p-4 text-sky-600 text-2xl font-bold">
            1/?
          </div>

          <SettingsButton />
        </div>

        <EduquizLogo />
      </header>

      <main className="px-8 py-12 bg-white mt-12  w-full flex flex-col gap-y-8 rounded-3xl">
        <div className="grid grid-cols-2 gap-2 place-items-center h-full w-full  justify-center ">
          {/* Option 1 */}
          <AnswerButton className="h-96 w-40 flex justify-center  items-center bg-red-700 flex-1 rounded-3xl cursor-pointer hover:bg-red-800">
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </AnswerButton>

          {/* Option 2 */}
          <AnswerButton className="h-96 w-40 flex justify-center  items-center gap-x-4 bg-green-700 flex-1 rounded-3xl cursor-pointer hover:bg-green-800">
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </AnswerButton>
        </div>

        <TimeComponent />
      </main>
    </Page>
  );
}
