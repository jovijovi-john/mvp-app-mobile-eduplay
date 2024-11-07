import EduquizLogo from "../components/EduquizLogo";
import Page from "../components/Page";
import SettingsButton from "../components/SettingsButton";
import TimeComponent from "../components/TimeComponent";

export default function FourOptionQuestion() {
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
        <div className="grid grid-cols-2 place-items-center gap-4 h-full w-full  justify-center ">
          {/* Option 1 */}
          <div className="h-40 w-40 flex justify-center  items-center bg-red-700 flex-1 rounded-3xl cursor-pointer">
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </div>

          {/* Option 2 */}
          <div className="h-40 w-40 flex justify-center  items-center gap-x-4 bg-green-700 flex-1 rounded-3xl cursor-pointer">
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </div>

          {/* Option 3 */}
          <div className="h-40 w-40 flex flex-col justify-center gap-4 items-center bg-yellow-500 flex-1 rounded-3xl cursor-pointer">
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="flex gap-4">
              <div className="h-12 w-12 bg-white rounded-full"></div>
              <div className="h-12 w-12 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Option 4 */}
          <div className="h-40 w-40 grid grid-cols-2 p-4 place-items-center justify-center  items-center bg-blue-800 flex-1 rounded-3xl cursor-pointer">
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
            <div className="h-12 w-12 bg-white rounded-full"></div>
          </div>
        </div>

        <TimeComponent />
      </main>
    </Page>
  );
}
