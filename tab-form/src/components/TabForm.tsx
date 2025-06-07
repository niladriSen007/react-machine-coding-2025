import { lazy, Suspense, useState } from "react";
import type { formDataValueType, tabType } from "../types";
import "./TabForm.scss";
const Settings = lazy(() => import("./Settings"));
const Profile = lazy(() => import("./Profile"));
const Interest = lazy(() => import("./Interest"));
const PROFILE = "Profile"
const INTEREST = "Interest"
const SETTINGS = "Settings"
const tabConfig: tabType[] = [
  {
    id: 1,
    name: PROFILE,
    component: Profile
  },
  {
    id: 2,
    name: INTEREST,
    component: Interest
  },
  {
    id: 3,
    name: SETTINGS,
    component: Settings
  }
]

const TabForm = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [formDataValue, setformDataValue] = useState<formDataValueType>({
    name: "",
    age: 0,
    email: "",
    hobbies: [],
    theme: ""
  })
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
              <ActiveTabComponent {...{ formDataValue, setformDataValue }} />
            </div>
          </div>
        </div>
      </Suspense>
    </>)
}

export default TabForm;