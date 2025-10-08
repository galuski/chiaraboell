import ClientSlider from "./ClientSlider";
import { Title } from "./Title";

export function Clients() {
    return (
        <section className="clients">
            <Title title="Client Testimonials" subtitle="what do they say?" />
            <div>
                <ClientSlider />
            </div>
        </section>
    )
}