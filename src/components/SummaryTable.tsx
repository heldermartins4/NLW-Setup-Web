/** Functions */
import { genDay } from "../utils/days"

/** Components */
import { Habits } from "./Habits"

const weekDays = ['D','S','T','Q','Q','S','S']

const summaryDates = genDay() // Get all days since first day of year

// fillSummaryDates
const minSumDates = 18 * 7 // 126
const amountOfDaysToFill = minSumDates - summaryDates.length
// console.log(amountOfDaysToFill)

export const SummaryTable = () => {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {/* WeekDays */}
                {weekDays.map(((weekDay, key) => {
                    return (
                        <div 
                            key={key}
                            className="w-10 h-10 flex items-center justify-center text-zinc-400 text-xl font-bold"
                        >
                            {weekDay}
                        </div>
                    )
                }))}
            </div>
            {/* HabitsDay */}
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {/** PastDays  */}
                {summaryDates.map((dates, key) => {
                    return <Habits key={key} />
                })}
                {/** DaysToFillSummary */}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_,key) => {
                    return <div 
                                key={key} 
                                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" 
                            />
                })}
            </div>
        </div>
    )
}