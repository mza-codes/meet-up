
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
}

export default function Input({ label, ...props }: InputProps) {

    return (
        <div className="relative col" >
            <label>{label}</label>
            <input className={`py-2 px-4 min-w-[280px] w-max rounded-md focus:border-green-500 outline-none border-2`} {...props} />
            <p className="err-msg"></p>
        </div>
    )
}
