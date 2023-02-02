/** Icons */
import { Check } from "phosphor-react";

export const NewHabitForm = () => ( 
    <form className="flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
            Qual o seu comprometimento?
        </label>

        <input 
            type="text" 
            id="title"
            placeholder="ex: Treinar, Estudar, Dieta..."
            className="bg-zinc-800 rounded-lg text-white placeholder:text-zinc-400 my-4 p-4"
            autoFocus 
        />

        <label htmlFor="" className="font-semibold leading-tight">
            Qual a recorrência?
        </label>

        <button type="submit" className="flex items-center justify-center gap-3 p-4 mt-6 font-semibold rounded-lg bg-green-600 hover:bg-green-500">
            <Check size={24} weight="bold" />
            Confirmar
        </button>
    </form>
)