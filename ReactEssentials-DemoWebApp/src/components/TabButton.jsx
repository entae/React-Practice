{/* 
    'children' prop is a special React prop that gives you access to content that is being passed to the component between the component's opening and closing tags:
        <tag>{children}</tag>
*/}
{/*
    special "onXYZ" props allow the app to listen to events

    Here, the TabButton component has the 'onSelect' prop, which is used as a value for the onClick prop on the built-in button.
    We can use this onSelect prop to point at the function that should be executed when the button inside of the TabButton is clicked.
*/}
export default function TabButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}> {children} </button>
        </li>
    );
}

// OR (Component Composition)
// export default function TabButton( {children} ) {
//     return <li><button>{children}</button></li>;
// }