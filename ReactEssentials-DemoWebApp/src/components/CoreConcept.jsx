{/* 
    Receives props as the first parameter 
    Using object destructuring, breaks down the object to use the attributes directly
    Curly Braces {} are used to output dynamic content and this content can be output between tags or as attribute values
*/}
export default function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}