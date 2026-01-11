import profileThumbnail from "./assets/profile-thumbnail.png";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-gray-50 to-[#d2d6db] min-h-screen flex justify-center">
        <div className="w-[340px] h-fit flex flex-col gap-4 bg-white p-6 rounded-lg mt-[200px] shadow">
          <div className="flex items-center gap-4 self-stretch">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={profileThumbnail}
            />
            <div className="flex flex-col gap-px grow">
              <span className="font-semibold text-lg text-justify text-neutral-900">
                Sarah Dole
              </span>
              <span className="font-normal text-sm text-neutral-600">
                @sarahdole
              </span>
            </div>
          </div>
          <span className="font-normal text-base text-neutral-600">
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </span>
        </div>
      </div>
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/projects/u/username"
          target="_blank"
        >
          Tim Lin
        </a>
        .
      </div>
    </>
  );
}

export default App;
