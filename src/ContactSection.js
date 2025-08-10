import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection({ lang = "fr" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({ message: "", color: "" });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      "service_owye3f5",
      "template_cdg900q",
      templateParams,
      "uQTwWcjgcNbqPIN5D"
    )
      .then(() => {
        setStatus({
          message:
            lang === "ar"
              ? "تم الإرسال بنجاح!"
              : lang === "fr"
              ? "Message envoyé avec succès !"
              : lang === "en"
              ? "Message sent successfully!"
              : lang === "de"
              ? "Nachricht erfolgreich gesendet!"
              : "Message envoyé avec succès !",
          color: "green"
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          message:
            lang === "ar"
              ? "حدث خطأ أثناء الإرسال. حاول مرة أخرى."
              : lang === "fr"
              ? "Erreur lors de l'envoi. Veuillez réessayer."
              : lang === "en"
              ? "An error occurred during sending. Please try again."
              : lang === "de"
              ? "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut."
              : "Erreur lors de l'envoi. Veuillez réessayer.",
          color: "red"
        });
      });
  };
  return (
    <section id="contact" className="active px-4 py-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center mb-6">
        {lang === "ar" ? "📬 تواصل معنا" : "📬 Contact"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={
            lang === "ar"
              ? "الاسم"
              : lang === "fr"
              ? "Nom"
              : lang === "en"
              ? "Name"
              : lang === "de"
              ? "Name"
              : "Nom"
          }
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          name="email"
          type="email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={
            lang === "ar"
              ? "البريد الإلكتروني"
              : lang === "fr"
              ? "Email"
              : lang === "en"
              ? "Email address"
              : lang === "de"
              ? "E-Mail-Adresse"
              : "Email"
          }
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={
            lang === "ar"
              ? "الرسالة"
              : lang === "fr"
              ? "Message"
              : lang === "en"
              ? "Your message"
              : lang === "de"
              ? "Nachricht"
              : "Message"
          }
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {lang === "ar"
            ? "إرسال"
            : lang === "fr"
            ? "Envoyer"
            : lang === "en"
            ? "Send"
            : lang === "de"
            ? "Senden"
            : "Envoyer"}
        </button>

        {status.message && (
          <p className={`text-center text-sm mt-2 text-${status.color}-600`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
