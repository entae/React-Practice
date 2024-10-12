import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  {
    /*
        useState is a hook used to register some data
        data from useState is always the current data, and a function used to update that data
        When the value is updated, it causes the component function that is using the state to execute + render again -> updates the UI
      */
  }
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // seletedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  {
    /*
        Conditional way of outputting content
        initially asks user to select a topic,
        and then only displays the content related to the selected tab
    
        A ternary expression could also have been used { data ? a : b },
        or also a logical && operator as a shortcut.
      */
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
    {/* 
        Working with multiple JSX Slots

        Remember that JSX elements are just regular values
        So we can take all the TabButtons and assign them to the prop "buttons"

        Just ensure that it is wrapped into one element within "<></>"
    */}
      <Tabs
        buttons={
          <>
            {/* props are used to configure components*/}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
