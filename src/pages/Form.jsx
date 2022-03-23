import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (name == "" || email == "") {
      console.log("fill form correctly");
    } else console.log("Form Submited");
  };

  return (
    <div>
      <h2>NewsLetter Subsscribe</h2>

      <form>
        <label htmlFor="name">Name - </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="name">Email - </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
        />

        <button onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
