import { IconBrandGithubFilled,IconBrandGithub,IconBrandLinkedinFilled, IconMail, IconMailFilled, IconBrandLinkedin } from "@tabler/icons-react"
import { github_url,linkedIn_url,email_url } from "@/lib/constants";
const hoverClass="hidden text-blue-700 group-hover:scale-125 group-hover:inline  transition-transform group-hover"


export default function MyFooter() {
  return (
    <footer className="row-start-3 flex gap-[24px] p-8 flex-wrap items-center justify-center">
          <a className="group flex items-center gap-2 "href={email_url}
            target="_blank" rel="noopener noreferrer">
              <IconMailFilled className="group-hover:hidden"/>
              <IconMail stroke={1.75} className={hoverClass}/>

          </a>
          <a className="group flex items-center gap-2 "href={linkedIn_url}
            target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedinFilled className="group-hover:hidden"/>
              <IconBrandLinkedin stroke={1.75} className={hoverClass}/>
          </a>
          <a className="group flex items-center gap-2 "href={github_url}
            target="_blank" rel="noopener noreferrer">
              <IconBrandGithubFilled  className="group-hover:hidden"/>
              <IconBrandGithub stroke={1.75} className={hoverClass}/>

              
          </a>
        </footer>
  );
}