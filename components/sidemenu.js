import { MenuIcon, BadgeCheckIcon, CodeIcon, ReplyIcon, FolderIcon, ShareIcon, SparklesIcon, EyeIcon, ArchiveIcon, MenuAlt2Icon, UsersIcon, MapIcon, EmojiHappyIcon, ClipboardCheckIcon, CollectionIcon, RefreshIcon} from '@heroicons/react/outline'
import { ChevronDownIcon} from '@heroicons/react/solid'

import { Disclosure } from '@headlessui/react'

export function Sidemenu() {
    return (
    <nav className='flex text-sm flex-col bg-gray-100 w-64 min-h-0 border-r border-gray-200 pt-2'>
        <Project title="SomeOrg/Coolproduct"/>
        <div className='p-2 pb-1'>
          <input className='p-2 w-full rounded bg-transparent border focus:bg-white border-gray-300'placeholder="Search"/>
        </div>
        <div className='p-2'>
            <MenuItem label="My Work" icon={<BadgeCheckIcon className='w-5 h-5'/>}/>
            <MenuItem label="Watching" icon={<EyeIcon className='w-5 h-5'/>}/>
        </div>
        <div className='p-2'>
          <MenuGroup label="Team">
            <MenuItem label="Mission & Milestones" icon={<SparklesIcon className='w-5 h-5'/>}/>
            <MenuItem label="People involved" icon={<UsersIcon className='w-5 h-5'/>}/>
            <MenuItem label="How we work" icon={<ClipboardCheckIcon className='w-5 h-5'/>}/>
            <MenuItem label="Feedback" icon={<EmojiHappyIcon className='w-5 h-5'/>}/>
            <MenuItem label="Ressources" icon={<CollectionIcon className='w-5 h-5'/>}/>
          </MenuGroup>
        </div>
        <div className='p-2'>
          <MenuGroup label="Work">
            <MenuItem label="Current" icon={<RefreshIcon className='w-5 h-5'/>}/>
            <MenuItem label="Backlog" icon={<MenuAlt2Icon className='w-5 h-5'/>}/>
            <MenuItem label="Roadmap" icon={<MapIcon className='w-5 h-5'/>}/>
            <MenuItem label="Completed" icon={<ArchiveIcon className='w-5 h-5'/>}/>
          </MenuGroup>
        </div>
        <div className='p-2'>
          <MenuGroup label="Code">
            <MenuItem label="Repositories" icon={<FolderIcon className='w-5 h-5'/>}/>
            <MenuItem label="Reviews" icon={<ShareIcon className='w-5 h-5'/>}/>
            <MenuItem label="Pipelines" icon={<ReplyIcon className='w-5 h-5'/>}/>
            <MenuItem label="Snippets" icon={<CodeIcon className='w-5 h-5'/>}/>
          </MenuGroup>
        </div>
      </nav>
    );
}

export function Project({title}) {
    return (
        <div className="px-2 pt-1.5">
            <div className="p-2 w-full rounded flex items-center justify-between hover:bg-gray-200">
            <span className='truncate font-bold w-full'>{title}</span>
            <MenuIcon className='grow h-5 w-5 ml-2 text-right text-gray-500'/>
            </div>
        </div>
    );

}

export function MenuItem({label, icon}) {
    return(
    <div className='flex items-center px-2 py-1.5 mb-0.5 rounded hover:bg-gray-200 text-gray-600 hover:text-black'>
        <div className='w-6 mr-2 -ml-0.5'>
            {icon}
        </div>
        <div className='truncate'>
            {label}
        </div>
    </div>
    );
}

export function MenuGroup({children, label}) {
    return(
        <Disclosure defaultOpen={true}>
        {({ open }) => (<>
            <Disclosure.Button className="px-2 py-1.5 flex items-center font-bold -ml-1">
                <span className={`${open ? "transform rotate-180" : ""}`}>
                    <ChevronDownIcon className='w-6 h-5'/>
                </span>
                <span className='ml-2'>
                    {label}
                </span>
            </Disclosure.Button>
            <Disclosure.Panel className="">
                    {children}                       
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    );
}