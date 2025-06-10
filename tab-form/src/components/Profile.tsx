import type { ChangeEvent } from "react";
import type { formFieldType, FormType } from "../types";

const Profile = ({ formDataValue, setformDataValue, errorData, setErrorData }: FormType) => {

  const { name, age, email } = formDataValue;

  const formDataVal = [
    {
      id: 1,
      label: "Name",
      name: "name",
      value: name,
      type: "text"
    },
    {
      id: 2,
      label: "Age",
      name: "age",
      value: age,
      type: "number"
    },
    {
      id: 3,
      label: "Email",
      name: "email",
      value: email,
      type: "email"
    }
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformDataValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="profileTab-container">
      <span>Profile Tab</span>
      <form action="" className="profileTab-form">
        {
          formDataVal?.map((formField: formFieldType) => (
            <div className="profileTab-form__inputBox">
              <label htmlFor={formField?.name}>{formField?.label}</label>
              <div className="profileTab-form__input">
                <input type={formField?.type} name={formField?.name} value={formField?.value} onChange={handleChange} />
                {errorData[formField?.name] && <span style={{
                  color: "red"
                }}> {errorData[formField?.name]} </span>}
              </div>
            </div>
          ))
        }
      </form>
    </div>)
}

export default Profile;