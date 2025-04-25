"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/app/menu-items";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function NavigationButtons() {
    const pathname = usePathname();
    const currentIndex = menuItems.findIndex(item => item.href === pathname);
    
    const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null;
    const nextItem = currentIndex < menuItems.length - 1 ? menuItems[currentIndex + 1] : null;

    return (
        <div className="flex justify-between mt-8">
            {prevItem && (
                <Link
                    href={prevItem.href}
                    className="flex border rounded-lg py-4 px-8 border-zinc-900 gap-4"
                >
                    <ChevronLeftIcon className="size-6" />
                    Previous: {prevItem.label}
                </Link>
            )}
            {nextItem && (
                <Link
                    href={nextItem.href}
                    className="flex border rounded-lg py-4 px-8 border-zinc-900 gap-4"
                >
                    Next up: {nextItem.label}
                    <ChevronRightIcon className="size-6" />
                </Link>
            )}
        </div>
    );
}