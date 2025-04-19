interface NavItemProps {
    label: string;
    onClick?: () => void;
}

export default function NavItem({ label, onClick }: NavItemProps) {
    return (
            <button 
            onClick={onClick}
            className="font-bold text-1xl w-fit text-neutral-400 hover:text-white transition-colors duration-100 ease-in-out cursor-pointer">
                {label}
            </button>
    )
}
