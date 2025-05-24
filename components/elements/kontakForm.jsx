"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, User, MessageCircle } from "lucide-react";

const KontakForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Isi waktu otomatis
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = new Date().toLocaleString("id-ID");
    form.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_msqsgot",          // ✅ Service ID kamu
        "template_5rltbm4",         // ✅ Template ID kamu
        form.current,
        "d-FpK0kCMOy-g-Tdw"         // ✅ Public Key (biarkan jika sudah benar)
      )
      .then(
        () => {
          alert("✅ Pesan berhasil dikirim!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Terjadi kesalahan saat mengirim pesan.");
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
        Contact US
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="name" // 🔄 Disesuaikan dengan {{name}} di template
            placeholder="Nama Anda"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="user_email"
            placeholder="Alamat Email"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        <div className="relative">
          <MessageCircle className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message" // ✅ Sudah cocok dengan {{message}} di template
            placeholder="Pesan Anda..."
            rows="5"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default KontakForm;
