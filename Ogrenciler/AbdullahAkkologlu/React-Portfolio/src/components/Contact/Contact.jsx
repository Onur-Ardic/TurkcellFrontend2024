import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Heading, PaddingY, RowBetween } from "../../styles";
import Socials from "./Socials";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState("Send");

  const validate = () => {
    const errors = {};
    if (!formData.from_name) errors.from_name = "Name is required";
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email address is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const newErrors = { ...errors };
    if (value.trim() !== "") {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending("Sending...");
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fill in the required fields!");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ from_name: "", user_email: "", message: "" });
          setErrors({});
          setSending("Successfully sent!");
          setTimeout(() => {
            setSending("Send");
          }, 3000);
        },
        (error) => {
          toast.error("Message failed to send! ", error.text);
          setSending("Error!");
          setTimeout(() => {
            setSending("Send");
          }, 3000);
        }
      );
  };
  return (
    <>
      <Heading id="contactHeading">— Contact —</Heading>
      <PaddingY>
        <RowBetween className="row">
          <form ref={form} onSubmit={sendEmail} className="col-lg-5">
            <div className="mb-3">
              <label htmlFor="from_name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                className="form-control"
                value={formData.from_name}
                onChange={handleChange}
              />
              {errors.from_name && (
                <p className="text-danger">{errors.from_name}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                value={formData.user_email}
                onChange={handleChange}
              />
              {errors.user_email && (
                <p className="text-danger">{errors.user_email}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-danger">{errors.message}</p>
              )}
            </div>
            <button
              className="w-100 bg-black text-white rounded-3 border-0 py-2"
              type="submit"
              value="Send"
            >
              {sending}
            </button>
          </form>
          <div className="col-lg-6">
            <Socials />
          </div>
        </RowBetween>
      </PaddingY>
    </>
  );
};

export default Contact;
