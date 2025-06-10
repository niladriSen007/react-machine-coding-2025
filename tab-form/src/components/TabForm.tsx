import { lazy, Suspense, useState } from "react";
import type { errObjType, errorDetailsType, formDataValueType, tabType } from "../types";
import "./TabForm.scss";
const Settings = lazy(() => import("./Settings"));
const Profile = lazy(() => import("./Profile"));
const Interest = lazy(() => import("./Interest"));
const PROFILE = "Profile"
const INTEREST = "Interest"
const SETTINGS = "Settings"

const TabForm = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [formDataValue, setformDataValue] = useState<formDataValueType>({
    name: "",
    age: 0,
    email: "",
    hobbies: [],
    theme: ""
  })
  const [errorData, setErrorData] = useState<errorDetailsType>({
    name: "",
    age: "",
    email: "",
    hobbies: "",
    theme: ""
  })

  const ErrorObj = (condition: string): string => {
    const mapping: { [key: string]: string } = {
      "nameRequired": "Name is required",
      "nameValMustBeTwo": "Name length must be at leans two characters",
      "ageRequired": "Age is reqired",
      "ageNotNegative": "Age value must be a positive integer",
      "emailRequired": "Email is required",
      "hobbiesRequired": "Hobbies is required",
      "themeRequired": "Theme is required",
    }
    return mapping[condition]
  }

  const nameValidation = (errObj: errObjType): errObjType => {
    if (!formDataValue?.name) {
      errObj.name = ErrorObj("nameRequired")
    }
    else if (formDataValue?.name?.length < 2) {
      errObj.name = ErrorObj("nameValMustBeTwo")
    }

    return errObj
  }
  const ageValidation = (errObj: errObjType): errObjType => {
    if (!formDataValue?.age) {
      errObj.age = ErrorObj("ageRequired")
    }
    else if (formDataValue?.age < 0) {
      errObj.age = ErrorObj("ageNotNegative")
    }

    return errObj
  }
  const emailValidation = (errObj: errObjType): errObjType => {
    if (!formDataValue?.email) {
      errObj.email = ErrorObj("emailRequired")
    }

    return errObj
  }

  const hobbiesValidation = (errObj: errObjType) => {
    if (!formDataValue?.hobbies?.length) {
      errObj.hobbies = ErrorObj("hobbiesRequired")
    }

    return errObj
  }

  const themeValidation = (errObj: errObjType) => {
    if (!formDataValue?.theme) {
      errObj.theme = ErrorObj("themeRequired")
    }
    return errObj
  }

  const tabConfig: tabType[] = [
    {
      id: 1,
      name: PROFILE,
      component: Profile,
      validations: () => {
        const errObj: errObjType = {
          name: "",
          age: "",
          email: "",
          hobbies: "",
          theme: ""
        }
        let obj: errObjType = {}
        obj = nameValidation(errObj)
        obj = ageValidation(errObj)
        obj = emailValidation(errObj)
        setErrorData(prev => ({
          ...prev,
          ...obj
        }))
        return (errObj?.name || errObj?.age || errObj?.email) ? false : true
      }
    },
    {
      id: 2,
      name: INTEREST,
      component: Interest,
      validations() {
        const errObj: errObjType = {
          name: "",
          age: "",
          email: "",
          hobbies: "",
          theme: ""
        }
        let obj: errObjType = {}
        obj = hobbiesValidation(errObj)
        setErrorData(prev => ({
          ...prev,
          ...obj
        }))

        return obj?.hobbies ? false : true
      },
    },
    {
      id: 3,
      name: SETTINGS,
      component: Settings,
      validations() {
        const errObj: errObjType = {
          name: "",
          age: "",
          email: "",
          hobbies: "",
          theme: ""
        }
        let obj: errObjType = {}
        obj = themeValidation(errObj)
        setErrorData(prev => ({
          ...prev,
          ...obj
        }))

        return obj?.theme ? false : true

      },
    }
  ]
  const ActiveTabComponent = tabConfig[selectedTab]?.component

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="tabForm-container">
          <div className="tabForm-container__wrapper">
            <div className="tabForm-container__header">
              {
                tabConfig?.map((tab: tabType) => (
                  <button key={tab.id} className={`tabForm-container__header__tab ${selectedTab + 1 === tab?.id ? "tabForm-container__header__tab--active" : ""}`}
                    onClick={() => setSelectedTab(tab?.id - 1)}>
                    {tab?.name ?? `Tab-${tab?.id}`}
                  </button>
                ))
              }
            </div>
            <div className="tabForm-container__content">
              <ActiveTabComponent {...{ formDataValue, setformDataValue, errorData, setErrorData }} />
            </div>
            <div className="tabForm-container__navigation">
              {!(selectedTab === 0) && <button onClick={() => {
                setSelectedTab(prev => prev - 1)
              }}>Prev</button>}
              {!(selectedTab === tabConfig?.length - 1) && <button onClick={() => {
                if (tabConfig[selectedTab]?.validations())
                  setSelectedTab(prev => prev + 1)
              }}>Next</button>}
            </div>
          </div>
        </div>
      </Suspense>
    </>)
}

export default TabForm;