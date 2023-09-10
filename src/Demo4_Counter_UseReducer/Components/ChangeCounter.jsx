import { COUNTER_ACTION } from "../Demo4";

export default function ChangeCounter({ dispatch }) {
  return (
    <div>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}
        >
          Increment
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}
        >
          Decrement
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => dispatch({ type: COUNTER_ACTION.INIT })}
        >
          Init
        </button>
      </span>
    </div>
  );
}
