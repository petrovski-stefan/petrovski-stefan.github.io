import { About } from './About';
import { GithubIcon } from './GithubIcon';
import { GmailIcon } from './GmailIcon';
import { LinkedinIcon } from './LinkedinIcon';

export function Content() {
  return (
    <div className="w-1/2 h-2/3 flex flex-col justify-around">
      <div className="flex justify-center text-3xl">Stefan Petrovski</div>
      <div className="flex justify-evenly">
        <LinkedinIcon />
        <GithubIcon />
        <GmailIcon />
      </div>
      <About />
    </div>
  );
}
