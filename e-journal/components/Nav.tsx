"use client"
import NavItem from './ui/NavItem'
import { usePathname, useRouter } from 'next/navigation'


export default function Nav({
    menuLinks,
}: {
    menuLinks: { href: string; label: string; }[]
}
) {
    const pathname = usePathname();

    const router = useRouter()

    return (
        <aside className={`sticky top-0 hidden h-screen w-48 py-20 md:block`}>
            <nav className="flex h-full w-full flex-col gap-12 overflow-visible"
                aria-label="Desktop navigation">
                <div className="flex w-full flex-col items-start gap-4 text-left">
                    <div>
                        <div className="text-lg font-medium">E-Journal</div>
                        <div>Educational Tour</div>
                    </div>
                </div>
                <ul className="flex list-none flex-col gap-4 space-y-0">
                    {menuLinks.map((item) => (
                        <li key={item.href}>
                            <NavItem
                                label={item.label}
                                onClick={() => router.push(item.href)}
                                active={
                                    item.href === "/"
                                        ? pathname === item.href
                                        : pathname.startsWith(item.href)
                                }
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
