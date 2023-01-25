interface HabitsProps {
    count: number;
    setCount: () => void;
}

export const Habits = ({count, setCount}: HabitsProps) => {
    return (
        <button onClick={setCount}>O valor está mudando: {count}</button>
    )
}