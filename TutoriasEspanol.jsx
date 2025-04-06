import { useState } from "react";

export default function TutoriasEspanol() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaré pronto.");
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <section style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Tutorías de Español, Traducciones y Doblaje
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Mejora tu español conversando conmigo, recibe traducciones precisas y doblajes profesionales.
        </p>
      </section>

      <section style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Tutorías de Español</h2>
          <p>Sesiones personalizadas para mejorar tu conversación, gramática y comprensión del idioma.</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Traducción de Textos</h2>
          <p>Traducciones profesionales del inglés al español y viceversa, adaptadas al contexto y propósito.</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Doblaje y Voz en Off</h2>
          <p>Doblaje en español para vídeos, presentaciones, audiolibros y más, con calidad profesional.</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contáctame</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
          <input name="email" placeholder="Tu correo electrónico" type="email" value={form.email} onChange={handleChange} required />
          <textarea name="mensaje" placeholder="¿En qué puedo ayudarte?" value={form.mensaje} onChange={handleChange} required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}
