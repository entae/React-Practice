import logo from "../assets/logo.png";
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* 
        In-line styling:
        after tagging style, it receives a dynamic field {}
        Within the dynamic field, take a JS object {}.
        In the object, you can state the CSS as key-value pairs
        Instead of dashes for the key name, refer to camel-case
      */}
      <p className={classes.paragraph}
        // style={{
        //   color: 'brown',
        //   fontFamily: 'Arial'
        // }}
        > A community of artists and art-lovers.
      </p>
    </header>
  );
}
