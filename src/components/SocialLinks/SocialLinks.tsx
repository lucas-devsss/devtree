import LinkCard from "../LinkCard/LinkCard";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialLinks() {
  return (
    <nav>
      <ul className="p-7 flex items-center gap-2 flex-col">
        <LinkCard
          url="https://www.linkedin.com/in/lucas-devsss/"
          name="Linkedin"
          icon={AiFillLinkedin}
        />
        <LinkCard
          url="hhttps://github.com/lucas-devsss"
          name="Github"
          icon={AiFillGithub}
        />
      </ul>
    </nav>
  );
}
