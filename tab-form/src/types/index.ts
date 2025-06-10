
import type { ComponentType, Dispatch, SetStateAction } from "react";

export interface FormType {
  formDataValue: formDataValueType,
  setformDataValue: Dispatch<SetStateAction<formDataValueType>>
  errorData: errorDetailsType
  setErrorData: Dispatch<React.SetStateAction<errorDetailsType>>
}

export interface tabType {
  id: number,
  name: string,
  component: ComponentType<FormType>
  validations: () => boolean
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

export interface errorDetailsType {
/*   name: string,
  age: string;
  email: string;
  hobbies: string,
  theme: string; */
  [key: string]: string
}

export interface errObjType {
  name?: string;
  age?: string;
  email?: string;
  hobbies?: string;
  theme?: string
}