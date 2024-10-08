import reactImg from '../../assets/react-core-concepts.png';
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

{/* 
    Components are essentially functions in React
    - Name must start with an Uppercase character 
    - return a value that can be rendered by React (ie. JSX)
    - can use these components like custom HTML elements
*/}
export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}