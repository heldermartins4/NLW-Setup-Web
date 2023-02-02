import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

interface HabitsProps {
    completed: number
    amount: number
}

export const Habits = ({completed, amount}: HabitsProps) => {
    
    const completedPercentage = Math.round((completed / amount) * 100)

    return (
        <Popover.Root>
            {/* Items-Days */}
            <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                'bg-zinc-900 border-2 border-zinc-800' : completedPercentage === 0,
                'bg-violet-900 border-violet-800' : completedPercentage > 0 && completedPercentage < 20,
                'bg-violet-800 border-violet-700' : completedPercentage >= 20 && completedPercentage < 40,
                'bg-violet-700 border-violet-600' : completedPercentage >= 40 && completedPercentage < 60,
                'bg-violet-600 border-violet-500' : completedPercentage >= 60 && completedPercentage < 80,
                'bg-violet-500 border-violet-400' : completedPercentage >= 80
            })} />
            {/* Popover */}
            <Popover.Portal>
                <Popover.Content className="flex flex-col min-w-[320px] p-6 rounded-2xl bg-zinc-900">
                    <span className="font-semibold text-zinc-400">Quarta-feira</span>
                    <span className="text-3xl leading-tight font-extrabold mt-1">01/02</span>
                    {/* PregressOfHabitsCompleted */}
                    <ProgressBar progress={completedPercentage}/>

                    <Popover.Arrow width={20} height={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}