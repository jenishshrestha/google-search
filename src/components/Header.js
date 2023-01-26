import User from "@/components/User";
import Link from "next/link";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

export default function Header() {
  const router = useRouter();

  const link = "cursor-pointer link hover:underline";
  return (
    <header className="flex justify-end p-5 space-x-4 text-sm text-gray-700">
      <div className="flex items-center space-x-4">
        <Link href="https://mail.google.com" className={link}>
          Gmail
        </Link>

        <a
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className={link}
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
