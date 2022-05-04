import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ArrowLeftIcon, CheckCircleIcon, } from '@heroicons/react/solid'

const mailingLists = [
  { id: 1, title: 'under 40'  },
  { id: 2, title: '40-49' },
  { id: 3, title: '50-59'},
  { id: 4, title: '60-69'},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Oe() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
  
  return (
  <div className="h-screen flex flex-col max-w-lg w-full mx-auto">
    <div className="p-6 flex items-center text-gray-500 ">
    <ArrowLeftIcon className="w-5 h-5 mr-3"/>
      <span className="font-bold">
        Refraction
      </span>
    </div>
    <div className="grow px-6">
      <h1 className="text-3xl font-bold">Personalize</h1>
      <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <div className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-3">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-transparent',
                active ? 'border-blue-500 ring-2 ring-blue-500 text-blue-500' : '',
                'relative text-gray-500 bg-gray-100 border border-transparent rounded-lg px-3 py-6 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex justify-center font-bold ">
                  {mailingList.title}
                </div>
                
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-blue-500 text-blue-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
    </div>
    <div className="p-6">
      <span className='w-full block rounded-sm p-3 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold'>
        Next
      </span>
    </div>
  </div>
  )
}
