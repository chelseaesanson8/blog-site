import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function Header() {
  return (
      <header>
          <div className="flex items-center justify-center p-10">
            <div className="mr-20">
                  <Avatar>
                      <AvatarImage src="/avatars/nav-avatar.JPG" />
                        <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
            </div>
            <div>
                <ul className="flex items-center space-x-10">
                    <li className="text-slate-700 font-sans text-lg hover:text-orange-400">
                        <Link href="/">home</Link>
                    </li>
                    <li className="text-slate-700 font-sans text-lg hover:text-orange-400">
                        <Link href="/">blog</Link>
                    </li>
                    <li className="text-slate-700 font-sans text-lg hover:text-orange-400">
                        <Link href="/">case studies</Link>
                    </li>
                    <li className="text-slate-700 font-sans text-lg hover:text-orange-400">
                            <Link href="/">newsletter</Link>
                    </li>
                    <li className="text-slate-700 font-sans text-lg hover:text-orange-400">
                        <Link href="/">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}