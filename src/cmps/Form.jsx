import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastAlert } from "../cmps/ToastAlert";

export function Form() {
  const form = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  // ✅ Regex for validation
  const phoneRegex = /^\+?[1-9]\d{7,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Validate form fields
  const validateForm = () => {
    const formData = new FormData(form.current);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    let newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!message) newErrors.message = "Message is required";

    if (email && !emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Invalid phone number (use international format)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Check daily limit (max 10 messages per day per email)
  const checkDailyLimit = (email) => {
    const today = new Date().toISOString().split("T")[0];
    const storageKey = `formSubmissions_${email}_${today}`;
    let count = parseInt(localStorage.getItem(storageKey)) || 0;

    if (count >= 10) {
      return false;
    }
    localStorage.setItem(storageKey, count + 1);
    return true;
  };

  // ✅ Send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData(form.current);
    const email = formData.get("email");

    if (!checkDailyLimit(email)) {
      setErrors({ email: "You have reached the daily limit of 10 messages" });
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          setAlert({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
          setErrors({});
        },
        () => {
          setAlert({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <>
      {alert && <ToastAlert type={alert.type} message={alert.message} />}

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="flex">
          <label>
            <input
              name="firstName"
              required
              placeholder=""
              type="text"
              className="input"
            />
            <span>first name</span>
            {errors.firstName && <p className="message">{errors.firstName}</p>}
          </label>

          <label>
            <input
              name="lastName"
              required
              placeholder=""
              type="text"
              className="input"
            />
            <span>last name</span>
            {errors.lastName && <p className="message">{errors.lastName}</p>}
          </label>
        </div>

        <label>
          <input
            name="email"
            required
            placeholder=""
            type="email"
            className="input"
          />
          <span>email</span>
          {errors.email && <p className="message">{errors.email}</p>}
        </label>

        <label>
          <input
            name="phone"
            required
            type="tel"
            placeholder=""
            className="input"
          />
          <span>contact number</span>
          {errors.phone && <p className="message">{errors.phone}</p>}
        </label>

        <label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder=""
            className="input01"
          ></textarea>
          <span>message</span>
          {errors.message && <p className="message">{errors.message}</p>}
        </label>

        <button type="submit" className="fancy">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </>
  );
}