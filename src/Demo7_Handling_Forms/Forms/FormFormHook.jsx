import React from "react";
import { useForm } from "react-hook-form";

const FormFormHook = () => {
  const { register, handleSubmit, formState } = useForm();
  const errorType = formState.errors.name?.type;
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errorType === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errorType === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormFormHook;
