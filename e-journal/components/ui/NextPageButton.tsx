"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/app/menu-items";
import { ChevronRightIcon } from '@heroicons/react/24/outline'
export default function NextPageButton() {
    const pathname = usePathname();
    const currentIndex = menuItems.findIndex(item => item.href === pathname);
    const nextItem =
        currentIndex !== -1 && currentIndex < menuItems.length - 1
            ? menuItems[currentIndex + 1]
            : null;

    if (!nextItem) return null;

    return (
        <div className="flex justify-end mt-8">
            <Link
                href={nextItem.href}
                className="flex border rounded-lg py-4 px-8 border-zinc-900 gap-4"
            >
                Next up: {nextItem.label}
                <ChevronRightIcon className="size-6" />
            </Link>
        </div>
    );
}