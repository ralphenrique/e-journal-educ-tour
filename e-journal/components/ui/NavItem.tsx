interface NavItemProps {
    label: string;
    onClick?: () => void;
    active?: boolean;
}

export default function NavItem({ label, onClick, active }: NavItemProps) {
    return (
        <button 
        onClick={onClick}
        className={`font-bold text-1xl w-fit ${active ? 'text-high-contrast-text' : 'text-low-contrast-text '} hover:text-high-contrast-text transition-colors duration-100 ease-in-out cursor-pointer`}>
            {label}
        </button>
    )
}
