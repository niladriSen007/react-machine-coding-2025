import type { ChangeEvent, FormEvent } from "react";
import type { formFieldType, FormType } from "../types";

const Settings = ({ formDataValue, setformDataValue, errorData, setErrorData }: FormType) => {

  const { theme } = formDataValue

  const settingsVal: formFieldType[] = [
    {
      id: 1,
      type: "radio",
      label: "Dark",
      name: "theme",
      value: "Dark"
    },
    {
      id: 2,
      type: "radio",
      label: "Light",
      name: "theme",
      value: "Light"
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformDataValue(prev => ({
      ...prev,
      theme: e?.target?.value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formDataValue)
  }

  return (
    <div className="settingsTab-container">
      <form action="" className="settingsTab-Form" onSubmit={handleSubmit}>
        {
          settingsVal?.map((settingItem: formFieldType) => (
            <label htmlFor={settingItem?.name}>
              <input type={settingItem?.type}
                name={settingItem?.name}
                value={settingItem?.value}
                key={settingItem?.id}
                onChange={handleChange}
                checked={theme === settingItem?.value}
              />
              {settingItem?.label}
            </label>
          ))
        }
        {errorData?.theme && <span style={{
          color: "red"
        }}> {errorData?.theme} </span>}
        <button type="submit">Submit</button>
      </form>
    </div>)
}

export default Settings;