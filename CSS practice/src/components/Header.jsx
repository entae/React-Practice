import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="object-contain mb-8 w-44 h-44"/>
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      {/* 
        In-line styling:
        after tagging style, it receives a dynamic field {}
        Within the dynamic field, take a JS object {}.
        In the object, you can state the CSS as key-value pairs
        Instead of dashes for the key name, refer to camel-case
      */}
      <p 
        className="text-stone-500"
        // style={{
        //   color: 'brown',
        //   fontFamily: 'Arial'
        // }}
        > A community of artists and art-lovers.
      </p>
    </header>
  );
}
