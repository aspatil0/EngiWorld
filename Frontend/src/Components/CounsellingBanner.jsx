import { useState } from "react";
import CounsellingModal from "./CounsellingModal";
import counsellingImg from "../assets/counseling_illustration_1782580852849.png";

function CounsellingBanner() {
    const [modalOpen, setModalOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <>
            
            <div
                className="fixed z-[900]"
                style={{ bottom: "32px", right: "32px" }}
            >
                
                <div
                    style={{
                        position: "absolute",
                        right: "calc(100% + 12px)",
                        top: "50%",
                        transform: hovered ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(8px)",
                        opacity: hovered ? 1 : 0,
                        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        background: "linear-gradient(135deg, #FF6B6B, #E85555)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "8px 14px",
                        borderRadius: "50px",
                        boxShadow: "0 6px 20px rgba(255,107,107,0.35)",
                        letterSpacing: "0.02em",
                    }}
                >
                    🎓 Book Free Counselling
                    
                    <span
                        style={{
                            position: "absolute",
                            right: "-7px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 0,
                            height: 0,
                            borderTop: "6px solid transparent",
                            borderBottom: "6px solid transparent",
                            borderLeft: "8px solid #E85555",
                        }}
                    />
                </div>

               
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "rgba(255,107,107,0.25)",
                        animation: "counselFABPulse 2.2s ease-out infinite",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "rgba(255,107,107,0.15)",
                        animation: "counselFABPulse 2.2s ease-out 0.7s infinite",
                        pointerEvents: "none",
                    }}
                />

                {/* Main round button */}
                <button
                    onClick={() => setModalOpen(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    title="Book Free Counselling"
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        border: "3px solid rgba(255,255,255,0.9)",
                        background: "#fff",
                        padding: 0,
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: hovered
                            ? "0 0 0 4px rgba(255,107,107,0.3), 0 16px 40px rgba(255,107,107,0.4)"
                            : "0 8px 30px rgba(255,107,107,0.35)",
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <img
                        src={counsellingImg}
                        alt="Book Counselling"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top",
                            transform: hovered ? "scale(1.08)" : "scale(1)",
                            transition: "transform 0.4s ease",
                        }}
                    />
                </button>
            </div>

            {/* ── Booking Modal ── */}
            <CounsellingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}

export default CounsellingBanner;
