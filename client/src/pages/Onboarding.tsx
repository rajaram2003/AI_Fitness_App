import { PersonStanding } from "lucide-react"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const Onboarding = () => {

  const [step, setStep] = useState(1)
  return (
    <>
    <Toaster/>
    <div className="onboarding-container">

      {/* Header */}

      <div className="p-6 pt-12 onboarding-wrapper">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <PersonStanding className="w-6 h-6 text-white"/>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">FitTrack</h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-4">Let's personalize your experience</p>
      </div>

      {/* Progress Indicator */}

      <div className="px-6 mb-8 onboarding-wrapper">
        <div className="flex gap-2 max-w-2xl">
          {[1,2,3].map((s)=>(
            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${s <= step}`}/>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Onboarding