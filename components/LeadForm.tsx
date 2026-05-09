"use client";

import { useState } from "react";

const inputClasses =
  "w-full px-[18px] py-3.5 bg-white/[0.06] border border-cyan-300/20 rounded-[10px] text-white text-[0.95rem] outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-300 focus:bg-cyan-300/[0.06] focus:ring-[3px] focus:ring-cyan-300/15";

const labelClasses =
  "block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  revenue: string;
  taxRegime: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  revenue: "",
  taxRegime: "",
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const LeadForm = () => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: "Diagnóstico Tributário Gratuito",
          pinned_note: true,
          custom_fields: {
            _faturamento_mensal: form.revenue,
            _regime_tributario: form.taxRegime,
          },
        }),
      });
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
    }

    setStatus("success");
    setForm(emptyForm);
  };

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div className="relative overflow-hidden rounded-[20px] border border-cyan-300/20 bg-white/[0.04] p-8 backdrop-blur-[30px] md:p-11">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan-300 to-transparent"
        />

        <h3 className="font-display text-[1.35rem] font-bold tracking-tight text-white">
          Solicite seu diagnóstico
        </h3>
        <p className="mt-1.5 mb-8 text-[0.88rem] text-white/55">
          Preencha os dados e descubra quanto sua empresa pode economizar.
        </p>

        {status === "success" ? (
          <div className="py-10 text-center">
            <p className="mb-2 text-[1.2rem] font-bold text-cyan-300">
              Dados enviados com sucesso!
            </p>
            <p className="text-[0.9rem] text-white/55">
              Em breve nossa equipe entrará em contato.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-[0.85rem] text-cyan-300/70 underline transition-colors hover:text-cyan-300"
            >
              Enviar outro diagnóstico
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClasses}>Nome completo</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Como podemos te chamar?"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Empresa</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>E-mail corporativo</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@empresa.com.br"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Telefone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Faturamento mensal</label>
              <input
                type="text"
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                placeholder="Ex.: R$ 500 mil"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Regime tributário</label>
              <input
                type="text"
                name="taxRegime"
                value={form.taxRegime}
                onChange={handleChange}
                placeholder="Ex.: Simples Nacional"
                required
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full cursor-pointer rounded-[10px] bg-cyan-300 py-4 text-[0.95rem] font-bold tracking-wide text-[#012e43] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(119,228,255,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Enviando..."
                : "Quero meu diagnóstico gratuito →"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-white/35">
          Seus dados estão protegidos. Não compartilhamos informações com
          terceiros.
        </p>
      </div>
    </div>
  );
};

export default LeadForm;
