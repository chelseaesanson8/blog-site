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
                    <li className="text-slate-800 font-heading text-xl font-black hover:text-orange-400">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="text-slate-800 font-heading text-xl font-black hover:text-orange-400">
                        <Link href="/">BLOG</Link>
                    </li>
                    <li className="text-slate-800 font-heading text-xl font-black hover:text-orange-400">
                        <Link href="/">CASE STUDIES</Link>
                    </li>
                    <li className="text-slate-800 font-heading text-xl font-black hover:text-orange-400">
                            <Link href="/">NEWSLETTER</Link>
                    </li>
                    <li className="text-slate-800 font-heading text-xl font-black hover:text-orange-400">
                        <Link href="/">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}