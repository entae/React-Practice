import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation ...
    onAdd({
        title: enteredTitle,
        description: enteredDesc,
        dueDate: enteredDueDate
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input textarea ref={descRef} label="Description" />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
}