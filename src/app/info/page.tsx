import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const info = () => {
  const team = [
    {
      key: 1,
      name: "DaWoony",
      role: "Dev-Ops",
      github: "HanDaWoon",
      blog: "blog.dawoony.com",
      email: "han@dawoony.com",
    },
    {
      key: 2,
      name: "HanJun Choi",
      role: "ML Developer",
      github: "gkswns3708",
      blog: "dobby-hj.tistory.com",
      email: "gkswns1290@gmail.com",
    },
    {
      key: 3,
      name: "Yurim",
      role: "Fullstack Developer",
      github: "Jyurim",
      blog: "",
      email: "dorosi150@gmail.com",
    },
    {
      key: 4,
      name: "Choijake",
      role: "Fullstack Developer",
      github: "Choijake",
      blog: "",
      email: "shameless8@naver.com",
    },
  ];

  return (
    <section className="min-h-3/4">
      <div className="container mt-40 flex flex-col justify-center px-4 py-5 md:container md:mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="my-4 py-2 text-xl">
            이번 캡스톤 디자인 프로젝트를 진행한 팀원을 소개합니다.
          </p>
        </div>

        <div className="container grid grid-flow-col grid-rows-2 justify-items-center gap-6">
          {team.map(member => (
            <div
              className="w-full max-w-lg rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
              key={member.key}
            >
              <div className="flex flex-col items-center py-6">
                <Image
                  className="mb-4 w-32 rounded-full shadow-lg"
                  width={128}
                  height={128}
                  src={`https://github.com/${member.github}.png`}
                  alt={`${member.name} github image`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">{member.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{member.role}</span>
                <div className="mt-4 flex space-x-3 md:mt-6">
                  <a
                    href={`https://github.com/${member.github}`}
                    target={"_blank"}
                    rel="noreferrer"
                    className="mr-2"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                  </a>
                  {member.blog ? (
                    <a
                      href={`https://${member.blog}`}
                      target={"_blank"}
                      rel="noreferrer"
                      className="mr-2"
                    >
                      <FontAwesomeIcon icon={faBlog} size="2xl" />
                    </a>
                  ) : null}

                  <a href={`mailto:${member.email}`} target={"_blank"} rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default info;
