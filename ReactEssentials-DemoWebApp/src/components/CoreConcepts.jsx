import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* 
            Dynamically generates components for the number of items in array
            ...props automatically spreads out the entire object as key-value pairs 

            When using .map(), the "key=..." attribute is necessary for react to update the list efficiently without error
      */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
