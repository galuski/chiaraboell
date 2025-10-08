import { ServicesList } from "./ServicesList";
import { Title } from "./Title";

export function Services() {
    return (
        <section className="services">
            <Title title="Services" subtitle="What do I offer" />
            <ServicesList />
        </section>
    )
}