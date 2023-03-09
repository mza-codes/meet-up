import { ScrollToFrom } from "../utils";

export default function Home() {
    return (
        <section className="min-h-screen relative pb-6 flex justify-between items-center flex-wrap">
            <img
                className="object-cover w-full lg:w-1/2 h-full max-h-screen aspect-auto"
                src={"/hero.svg"}
                alt="hero_image"
            />

            <article className="w-full lg:w-1/2">
                <div className="px-2 flex flex-col gap-6 flex-wrap text-start justify-center">
                    <h1 className="text-5xl font-righteous leading-tight text-gray-800">
                        Need Help In Your Profession?
                    </h1>
                    <span className="text-2xl font-normal font-kanit leading-tight max-w-lg">
                        We help you by providing an opportunity to learn & adapt from the most experienced professionals
                        in various fields.
                    </span>
                    <button
                        type="button"
                        onClick={ScrollToFrom}
                        className="hero-btn bg-green-600 hover:bg-green-700 text-white max-w-fit">
                        Book a 30 Minute Free Session
                    </button>
                    <span className="text-lg">
                        Meet Up Helps people from various professions to seek help from the professionals. <br />
                        Meet Up has a community of 2500+ Members. <br />
                        What's Stopping You ? Let's SignUp!
                    </span>
                </div>
            </article>
        </section>
    );
}
