"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

const Header = () => {
    const path = usePathname();

    return (
        <header className="border-b-2 flex justify-between py-3 px-5">
            <Link href="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Dev
                </span>
                Blog
            </Link>

            <form>
                <div className="flex items-center relative">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className=" w-100"

                    />
                    <Button className="w-12 h-10 absolute end-0" variant="ghost">
                        <Search />
                    </Button>
                </div>
            </form>

            <div className="flex gap-2 md:order-2">
                <SignedOut>
                    <Link href="/sign-in">
                        <Button>
                            <SignInButton />
                        </Button>
                    </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>

                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header