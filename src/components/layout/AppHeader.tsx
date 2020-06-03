import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Dropdown from '@components/Dropdown'
import routes from '@utils/routes'
import { FiMoreHorizontal } from 'react-icons/fi'

const ThemeSwitch = dynamic(() => import('@components/layout/ThemeSwitch'), {
  ssr: false,
})

export interface Props {
  className?: string | Record<string, unknown>
}

const AppHeader: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        'bg-white dark:bg-gray-800 py-2 px-3 flex items-center sticky top-0',
        className
      )}
    >
      <div className="mr-auto flex items-center">
        <Link {...routes.INDEX}>
          <a className="flex-grow text-xl font-black text-black dark:text-white dark:hover:text-black">
            My Project
          </a>
        </Link>
      </div>
      <div>
        <Dropdown buttonLabel={<FiMoreHorizontal />}>
          <ul className="w-40 space-y-4 py-2">
            <li>
              <Link {...routes.TYPOGRAPHY}>
                <a className="text-green-600 hover:underline">Typography</a>
              </Link>
            </li>
            <li>
              <hr className="dark:border-gray-700" />
            </li>
            <li className="flex items-center justify-between">
              <span className="mr-auto text-sm text-gray-600">Theme</span>
              <ThemeSwitch />
            </li>
          </ul>
        </Dropdown>
      </div>
    </header>
  )
}

export default AppHeader
