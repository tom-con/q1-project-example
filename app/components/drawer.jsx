import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'

export default function Drawer({ title, children }) {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
						<span className="text-2xl">{title}</span>
						<ChevronUpIcon
							className={`${open ? 'rotate-180 transform' : ''
								} h-8 w-8 text-blue-500`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel>
						<div className="bg-blue-100 rounded-md p-2">
							{children}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
