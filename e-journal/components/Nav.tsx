"use client"
import NavItem from './ui/NavItem'
import { useRouter } from 'next/navigation'


export default function Nav() {

    const router = useRouter()

    return (
        <>
            <nav className="px-5">
                <div className="w-fit mb-12 space-y-2">
                    <h1 className='text-lg font-bold'>
                        Educational Tour E-journal
                    </h1>
                    <p className='text-sm font-semibold text-neutral-400'>
                        Ralph Kris Enrique · 2025
                    </p>
                </div>
                <ul className="flex flex-col w-fit space-y-4">
                    <NavItem 
                    onClick= {() => router.push('/introduction') } label="Introduction" />
                    <NavItem 
                    onClick= {() => router.push('/organizers') }
                    label="Organizers" />
                    <NavItem label="Itinerary" />
                    <NavItem label="Companies" />
                    <NavItem label="Reflection" />
                    <NavItem label="Gallery" />
                    <NavItem label="Conclusion" />
                </ul>
            </nav>
        </>
    )
}
