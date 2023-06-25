import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    const phoneNumber = "+6281284550545";
    const message = `Halo, saya ingin mengirim pesan kepada Anda! Nama: ${formData.name}, Email: ${formData.email}, Subjek: ${formData.subject}, Pesan: ${formData.message}`;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    window.location.href = whatsappURL;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
    // Lakukan tindakan lain setelah mengirim pesan WhatsApp
    // Misalnya, mengatur state atau mengosongkan formulir
  };

  return (
    <motion.form
      action=""
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
          style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
          style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
          style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
          style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn" type="submit" style={{ width: "100%" }}>
          {/* {success ? "Message Sent" : "Send Message"} */}
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
