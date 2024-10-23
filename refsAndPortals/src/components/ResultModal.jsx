import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";

// forwardRef must be used to pass on ref as a prop to a custom component
// the entire function will be wrapped in the forwardRef function and then exported as a constant variable
// the ref value is passed on as a second argument outside the component's props

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
