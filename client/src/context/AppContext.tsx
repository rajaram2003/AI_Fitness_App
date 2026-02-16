import { createContext, useContext, useState } from "react";
import { initialState, type ActivityEntry, type Credentials, type FoodEntry, type User } from "../types";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(initialState)

export const AppProvider = ({children} : {children: React.ReactNode})=>{

  const navigate = useNavigate()
  const [user, setUser] = useState<User>(null)
  const [isUserFetched, setIsUserFetched] = useState(false)
  const [onboardingCompleted, setOnboardingCompleted] = useState(false)
  const [allFoodLogs, setAllFoodLogs] = useState<FoodEntry[]>([])
  const [allActivityLogs, setAllActivityLogs] = useState<ActivityEntry[]>([])

  const signup = async (Credentials: Credentials)=>{

  }

  const value = {}

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useAppContext = ()=> useContext(AppContext)