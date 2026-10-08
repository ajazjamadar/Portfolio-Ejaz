import { useState } from "react";
import FadeUp from "../components/FadeUp";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuArrowUpRight,
  LuSend,
  LuCheck,
  LuLoaderCircle,
} from "react-icons/lu";

/* ---- Edit your details here ---- */
const EMAIL = "mdejazuddinjamadar@gmail.com";
const PHONE = "+91 7829745001";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const contactItems = [
  { label: "Email me", value: EMAIL, href: `mailto:${EMAIL}`, icon: LuMail },
  { label: "Call me", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, icon: LuPhone },
  { label: "Location", value: "Bengaluru, Karnataka, India", href: null, icon: LuMapPin },
];

// text-base on mobile avoids iOS Safari zooming into focused inputs
const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-base text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-[#e5af3a]/60 focus:bg-black/60 focus:ring-1 focus:ring-[#e5af3a]/40 sm:py-3.5 sm:text-sm";

const InfoCard = ({ item }) => {
  const Icon = item.icon;

  const body = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-[#e5af3a] sm:h-11 sm:w-11">
        <Icon size={18} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-medium uppercase tracking-wider text-neutral-400">{item.label}</span>
        {/* break-all lets the long email wrap on narrow screens instead of being cut off */}
        <span className="mt-0.5 block break-all text-sm font-medium leading-5 text-white">
          {item.value}
        </span>
      </span>

      {item.href && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-300 transition-all duration-300 group-hover:border-[#e5af3a] group-hover:bg-[#e5af3a] group-hover:text-black">
          <LuArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
        </span>
      )}
    </>
  );

  const base =
    "group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5 shadow-sm backdrop-blur-xl transition-all duration-300 sm:gap-4 sm:p-4";

  return item.href ? (
    <a
      href={item.href}
      className={`${base} hover:border-white/[0.18] hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e5af3a]`}
    >
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setStatus("idle");
    setErrorMessage("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Web3Forms access key is missing. Please check your .env file.");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    // Email subject
    formData.append("subject", `Portfolio message from ${form.name}`);

    // Sender's email will be used as reply-to
    formData.append("replyto", form.email);

    // Optional spam protection
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your internet connection and try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen overflow-x-hidden bg-[#060709] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-6"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e14] sm:rounded-[28px] 2xl:max-w-[1600px]">
        {/* Soft amber illumination from the top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 45% at 50% 0%, rgba(229,175,58,0.06), transparent 70%)",
          }}
        />

        {/* Subtle architectural watermark */}
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-3 select-none text-center font-editorial italic text-[16vw] font-normal leading-none tracking-tight text-white/[0.03] sm:top-4 xl:text-[200px]"
        >
          CONTACT
        </p>

        {/* Top padding matched to editorial layout */}
        <div className="relative grid gap-8 px-5 pb-10 pt-24 min-[400px]:px-7 sm:gap-10 sm:px-10 sm:pb-14 sm:pt-32 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:pb-20 lg:pt-40 xl:pt-48">
          {/* Left: intro + contact info */}
          <div className="min-w-0">
            <FadeUp>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Get in Touch
                </span>
              </div>

              <h2 className="mt-4 font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
                Let's discuss
                <br />
                <span className="font-normal italic text-neutral-400">your next build</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-[15px] sm:leading-7">
                Have an opportunity, a project to collaborate on, or an infrastructure
                challenge to tackle? Send a note and I'll get back to you promptly.
              </p>
            </FadeUp>

            <div className="mt-6 space-y-3 sm:mt-8">
              {contactItems.map((item, i) => (
                <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                  <InfoCard item={item} />
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="min-w-0">
            <FadeUp delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 shadow-xl backdrop-blur-xl sm:p-6"
              >
                <div className="space-y-3.5">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    aria-label="Name"
                    autoComplete="name"
                    required
                    disabled={status === "sending"}
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    aria-label="Email"
                    autoComplete="email"
                    required
                    disabled={status === "sending"}
                    className={inputClass}
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role..."
                    aria-label="Message"
                    rows={6}
                    required
                    disabled={status === "sending"}
                    className={`${inputClass} min-h-[150px] resize-none sm:min-h-[190px]`}
                  />

                  {status === "success" && (
                    <div className="flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                      <LuCheck size={16} className="mt-0.5 shrink-0" />
                      <span>Message sent successfully! I'll get back to you shortly.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="break-words rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e5af3a] py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#f3c256] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5af3a]"
                  >
                    {status === "sending" ? (
                      <>
                        <LuLoaderCircle size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <LuCheck size={16} />
                        <span>Message Sent</span>
                      </>
                    ) : (
                      <>
                        <LuSend size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;