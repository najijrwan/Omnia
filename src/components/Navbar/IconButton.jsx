export default function IconButton({ onClick, icon: Icon, className = "" }) {
    return (
        <button onClick={onClick} className={className}>
            <Icon className="text-base-1 w-6 h-6" />
        </button>
    );
}
