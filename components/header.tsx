"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Header() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              UnderwaterVision
            </span>
          </Link>
        </div>
        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
              Documentation
            </Link>

            <Link href="/upload">
              <Button>Get Started</Button>
            </Link>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                  <Link
                    href="/documentation"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Documentation
                  </Link>
                  <Link href="/upload" onClick={() => setOpen(false)}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  )
}
