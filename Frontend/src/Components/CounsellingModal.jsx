import { useState } from "react";

function CounsellingModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        topic: "",
        date: "",
        timeSlot: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const handleClose = () => {
        setSubmitted(false);
        setFormData({ fullName: "", email: "", phone: "", topic: "", date: "", timeSlot: "", message: "" });
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div
                className="relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,240,240,0.95) 100%)",
                    border: "1px solid rgba(255,107,107,0.25)",
                    boxShadow: "0 25px 60px rgba(255,107,107,0.2), 0 0 0 1px rgba(255,255,255,0.5)",
                    animation: "modalSlideIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                {/* Header gradient strip */}
                <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #FF6B6B, #FF8E8E, #FFB347)" }} />

                <div className="p-7">
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF6B6B] hover:bg-red-50 transition-all duration-200"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                    >
                        ×
                    </button>

                    {!submitted ? (
                        <>
                            {/* Title */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                        style={{ background: "linear-gradient(135deg, #FF6B6B22, #FF8E8E11)" }}
                                    >
                                        📅
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-[#1E293B]">Book a Counselling Session</h2>
                                        <p className="text-xs text-[#94A3B8]">Free • Confidential • Expert Guidance</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl px-4 py-2.5 text-xs text-[#64748B] mt-3"
                                    style={{ background: "rgba(255,107,107,0.06)", border: "1px solid rgba(255,107,107,0.12)" }}
                                >
                                    🎓 Our academic counsellors are available Mon–Sat, 9 AM – 6 PM
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Row 1: Name + Phone */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all duration-200"
                                            style={{
                                                border: "1.5px solid #E2E8F0",
                                                background: "rgba(255,255,255,0.8)",
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                            onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 00000 00000"
                                            className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all duration-200"
                                            style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                            onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                            onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all duration-200"
                                        style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                        onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                        onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                    />
                                </div>

                                {/* Topic */}
                                <div>
                                    <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Counselling Topic *</label>
                                    <select
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] outline-none transition-all duration-200 cursor-pointer"
                                        style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                        onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                        onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="academic">📚 Academic Guidance</option>
                                        <option value="career">💼 Career Counselling</option>
                                        <option value="exam">📝 Exam Strategy</option>
                                        <option value="mental">🧠 Mental Well-being</option>
                                        <option value="placement">🏢 Placement Preparation</option>
                                        <option value="other">💬 Other</option>
                                    </select>
                                </div>

                                {/* Row: Date + Time */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Preferred Date *</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            min={new Date().toISOString().split("T")[0]}
                                            className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] outline-none transition-all duration-200"
                                            style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                            onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                            onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Time Slot *</label>
                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] outline-none transition-all duration-200 cursor-pointer"
                                            style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                            onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                            onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                        >
                                            <option value="">Select slot...</option>
                                            <option value="morning">🌅 Morning (9–12 AM)</option>
                                            <option value="afternoon">☀️ Afternoon (12–3 PM)</option>
                                            <option value="evening">🌆 Evening (3–6 PM)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Briefly describe what you'd like to discuss..."
                                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all duration-200 resize-none"
                                        style={{ border: "1.5px solid #E2E8F0", background: "rgba(255,255,255,0.8)" }}
                                        onFocus={(e) => e.target.style.borderColor = "#FF6B6B"}
                                        onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: loading
                                            ? "#ccc"
                                            : "linear-gradient(135deg, #FF6B6B 0%, #E85555 100%)",
                                        boxShadow: loading ? "none" : "0 8px 25px rgba(255,107,107,0.35)",
                                        cursor: loading ? "not-allowed" : "pointer",
                                    }}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Booking...
                                        </span>
                                    ) : (
                                        "📅 Book Appointment"
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Success State */
                        <div className="py-8 text-center">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl"
                                style={{ background: "linear-gradient(135deg, #FF6B6B22, #FF8E8E11)" }}
                            >
                                ✅
                            </div>
                            <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Appointment Booked!</h3>
                            <p className="text-[#64748B] text-sm mb-1">
                                Thank you, <strong>{formData.fullName}</strong>!
                            </p>
                            <p className="text-[#64748B] text-sm mb-6">
                                We'll confirm your session on <strong>{formData.date}</strong> via email.
                            </p>
                            <div
                                className="rounded-xl px-4 py-3 text-xs text-[#64748B] mb-6"
                                style={{ background: "rgba(255,107,107,0.06)", border: "1px solid rgba(255,107,107,0.12)" }}
                            >
                                📧 A confirmation has been sent to <strong>{formData.email}</strong>
                            </div>
                            <button
                                onClick={handleClose}
                                className="px-8 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                                style={{
                                    background: "linear-gradient(135deg, #FF6B6B 0%, #E85555 100%)",
                                    boxShadow: "0 8px 25px rgba(255,107,107,0.35)",
                                }}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CounsellingModal;
