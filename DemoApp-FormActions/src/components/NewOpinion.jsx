import { useActionState, use } from "react";

import { isNotEmpty, hasMinLength } from "../util/validation";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";


export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  
  async function newOpinionAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");
  
    let errors = [];
  
    if (!isNotEmpty(userName.trim())) {
      errors.push("Please provide a user name.");
    }
  
    if (title.trim().length < 5) {
      errors.push("Title must be at least 5 characters long.");
    }
  
    if (body.trim().length < 10) {
      errors.push("Body must be at least 10 characters long.");
    }
  
    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }
  
    // submit to backend
    await addOpinion({ title, body, userName });
  
    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(newOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
