import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import GroupSelect from './_components/GroupSelect'
import SideBar from './_components/SideBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh">
      <nav className="flex w-60 flex-col p-2 pt-8 text-sm font-medium">
        <GroupSelect />
        <Separator className="my-4 transition" />
        <SideBar />
        <Link
          href="/"
          className="mt-auto rounded px-4 py-2 text-slate-600 transition hover:bg-slate-100"
        >
          <FaArrowRightFromBracket className="mr-2 inline-block" />
          Quit
        </Link>
      </nav>
      <Separator orientation="vertical" />
      {children}
    </div>
  )
}
