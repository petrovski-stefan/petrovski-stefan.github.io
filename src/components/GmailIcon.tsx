import { Mail } from 'lucide-react';

export function GmailIcon() {
  return (
    <div className="w-7 h-7 hover:scale-110">
      <a href="mailto:stefanpetrovski345@gmail.com">
        <Mail
          height="28px"
          width="28px"
        />
      </a>
    </div>
  );
}
