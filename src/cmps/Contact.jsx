import { Form } from "./Form";
import contactJPG from "./../../public/images/contact.jpg"
import { Title } from "./Title";

export function Contact() {
  return (
    <section className="contact">
            <Title title="Contact Me" subtitle="" />
      <div className="contact-container">
        <Form />
        <div className="contact-img">
          <img src={contactJPG} alt="contact" />
        </div>
      </div>
    </section>
  );
}

