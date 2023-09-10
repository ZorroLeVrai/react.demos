export default function CounterStep({ step, handleStepChange }) {
  const handleChange = (e) => {
    handleStepChange(Number(e.target.value));
  };

  return (
    <>
      <p>
        <label htmlFor="inputStep">Step: </label>
        <input
          id="inputStep"
          type="number"
          value={step}
          onChange={handleChange}
        ></input>
      </p>
    </>
  );
}
