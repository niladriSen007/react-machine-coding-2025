
import type { ComponentType, Dispatch, SetStateAction } from "react";

export interface FormType {
  formDataValue: formDataValueType,
  setformDataValue: Dispatch<SetStateAction<formDataValueType>>
}

export interface tabType {
  id: number,
  name: string,
  component: ComponentType<FormType>
}

export interface formDataValueType {
  name: string,
  age: number;
  email: string;
  hobbies: (string | number)[],
  theme: string
}

export interface formFieldType {
  id: number,
  label: string,
  name: string,
  value: string | number,
  type: string
}