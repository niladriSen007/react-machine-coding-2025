import type { ChangeEvent } from "react";
import type { formFieldType, FormType } from "../types";

const Interest = ({ formDataValue, setformDataValue }: FormType) => {

  const { hobbies } = formDataValue

  const interestVal: formFieldType[] = [
    {
      id: 1,
      name: "cricket",
      label: "Cricket",
      value: "Cricket",
      type: "checkbox"
    },
    {
      id: 2,
      name: "football",
      label: "Football",
      value: "Football",
      type: "checkbox"
    }
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformDataValue(prev => ({
      ...prev,
      hobbies: hobbies?.includes(e.target?.value) ?
        hobbies?.filter(item => item?.toString() !== e.target.value) :
        [...hobbies, e.target.value]
    }))
  }
  return (
    <div className="interestTab-container">
      <form action="" className="interestTab-form">
        {
          interestVal?.map((interestItem: formFieldType) => (
            <label htmlFor={interestItem?.name}>
              <input type={interestItem?.type}
                name={interestItem?.name}
                checked={formDataValue?.hobbies?.includes(interestItem?.value as string)}
                onChange={handleChange}
                value={interestItem?.value}
              />
              {interestItem?.label}
            </label>
          ))
        }
      </form>
    </div>)
}

export default Interest;