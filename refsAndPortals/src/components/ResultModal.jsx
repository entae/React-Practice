import { useRef, forwardRef, useImperativeHandle } from "react";

// forwardRef must be used to pass on ref as a prop to a custom component
// the entire function will be wrapped in the forwardRef function and then exported as a constant variable
// the ref value is passed on as a second argument outside the component's props

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100  )// score between 1-100

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong>.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
