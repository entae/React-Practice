export default function TabButton({ children, onClick, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onClick}> {children} </button>
        </li>
    );
}

// OR (Component Composition)
// export default function TabButton( {children} ) {
//     return <li><button>{children}</button></li>;
// }