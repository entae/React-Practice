// using "...xyz" after destructuring is a JS feature called "Rest Property"
// this syntax groups all remaining object properties into a new object
// in the below code, the new object's name is "props"

export default function Section({ title, children, ...props }) {
  return (
    // any props other than 'title' and 'children' which were previously unaccounted for will now be groups together in the component function and then spread out within the Section tag
    // this way any other attributes tagged on to <Section> would translate properly into the dom
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
