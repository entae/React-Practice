// creating the prop buttonsContainer allows the developer using the Component to set which element they'll like the code to be wrapped by
// When coding in the container Tabs, they can set the props:
//  <Tabs buttonsContainer="menu" buttons={} />
// or if you wanted to use custom components instead:
//  <tabs buttonsContainer={Section} buttons{} />

export default function Tabs({ children, buttons, buttonsContainer }) {
  // you have to pass the value from the prop into the variable that starts with a Capital case character
  // This allows for the variable to be used as a custom component if needed
  // you could've also just created a prop that starts with an Uppercase character to avoid creating another variable
    const ButtonsContainer = buttonsContainer

    return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
