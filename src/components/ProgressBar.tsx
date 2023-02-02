import * as Progress from "@radix-ui/react-progress"

interface ProgressProps {
    progress: number
}

export const ProgressBar = (props: ProgressProps) => (
    <Progress.Root className="w-full rounded-lg bg-zinc-700 mt-4 overflow-hidden">
        <Progress.Indicator 
            className="h-3 rounded-xl bg-violet-600"
            style={{ transform: `translateX(-${100 - props.progress}%)` }}
        />
    </Progress.Root>
)