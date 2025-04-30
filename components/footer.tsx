import Link from "next/link"
export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            UnderwaterVision
          </Link>
          <p className="text-sm text-gray-500">Advanced underwater image enhancement and object detection</p>
        </div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} UnderwaterVision</div>
      </div>
    </footer>
  )
}
