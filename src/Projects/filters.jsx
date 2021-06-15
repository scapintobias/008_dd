import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const filters = [
	{ type: 'All', to: '/work/' },
	{ type: 'UX/UI', to: '/work/ux' },
	{ type: 'Photography', to: '/work/photography' },
	{ type: 'Wayfinding', to: '/work/wayfinding' },
	{ type: 'Corporate Branding', to: '/work/corporate' },
	{ type: 'Print', to: '/work/print' },
	{ type: 'Posters', to: '/work/poster' },
	{ type: 'Video', to: '/work/video' },
	{ type: 'Exhibit', to: '/work/exhibit' },
];

export function ProjectFilters() {
	const [selected, setSelected] = useState(filters[0]);

	return (
		<div className='w-72'>
			<Listbox value={selected} onChange={setSelected}>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
						<span className='block truncate'>{selected.type}</span>
						<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
							<SelectorIcon
								className='w-5 h-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{filters.map((filter, filterIdx) => (
								<Listbox.Option
									key={filterIdx}
									className={({ active }) =>
										`${active ? 'text-ruby ' : 'text-charcoal-800'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
									}
									value={filter}
								>
									{({ selected, active }) => (
										<>
											<NavLink to={filter.to}>
												<span
													className={`${
														selected ? 'font-medium' : 'font-normal'
													} block truncate`}
												>
													{filter.type}
												</span>
												{selected ? (
													<span
														className={`${active ? 'text-ruby' : 'text-ruby'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
													>
														<CheckIcon className='w-5 h-5' aria-hidden='true' />
													</span>
												) : null}
											</NavLink>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
