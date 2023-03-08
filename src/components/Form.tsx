import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    classes?: string;
};

const inputs: InputProps[] = [{
    type: "email",
    placeholder: "abc@gmail.com",
    label: "Email",
    minLength: 3,
    maxLength: 30,
    required: true,
}, {
    type: "text",
    placeholder: "Walder Smith",
    label: "Name",
    minLength: 5,
    maxLength: 30,
    required: true,
}];

export default function UserForm() {
    const route = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        route("/success");
        return;
    };

    return (
        <main id="reg-from" className="py-6 row gap-6 justify-evenly">
            <article className="ml-3 md:ml-0 text text-start">
                <h2 className="text-4xl">Register For A Session</h2>
                <span>Drop Your Email & Name Here!, We'll Send You the Email for Registration!</span>
            </article>
            <form onSubmit={handleSubmit} className="col center gap-2" >
                {inputs.reverse().map((field) => (
                    <Input key={field.placeholder} {...field} />
                ))}
                <button className="btn-hover py-2 px-4 text-sm bg-emerald-300 hover:bg-emerald-400 text-black" type="submit" >Submit</button>
            </form>
        </main>
    );
};
