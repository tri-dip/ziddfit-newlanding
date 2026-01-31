"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-950 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Ready to handle the heavy lifting? Send us a message to join the ZiddFit ecosystem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Name</label>
              <input 
                name="name"
                type="text" 
                required
                placeholder="your name" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Email</label>
              <input 
                name="email"
                type="email" 
                required
                placeholder="your email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Message</label>
            <textarea 
              name="message"
              rows={5} 
              required
              placeholder="Tell us the purpose of your inquiry..." 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-slate-950 disabled:bg-slate-400 transition-colors uppercase tracking-[0.2em]"
          >
            {status === "loading" ? "Processing..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center font-bold text-green-600 animate-bounce">
               Message send to ZiddFit!
            </p>
          )}
          {status === "error" && (
            <p className="text-center font-bold text-red-600">
               Failed to send. Please check your connection.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}