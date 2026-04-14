import { useState, useEffect, useRef, useCallback } from "react";
import "./ChatWidget.css";

const API_BASE = "/api/chatbot";

// Unique session ID generator
function getSessionId() {
    let id = sessionStorage.getItem("iau_chat_session");
    if (!id) {
        id = "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9);
        sessionStorage.setItem("iau_chat_session", id);
    }
    return id;
}

const WELCOME_MSG = {
    id: "welcome",
    sender: "bot",
    text: "Salom! 👋 Men IAU universiteti yordamchisiman.\n\nSizga qanday yordam bera olaman? Quyidagi mavzulardan birini tanlang yoki o'z savolingizni yozing.",
    timestamp: new Date().toISOString(),
};

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MSG]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggested, setSuggested] = useState([]);
    const [showSuggested, setShowSuggested] = useState(true);
    const [pulse, setPulse] = useState(false);

    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const sessionId = useRef(getSessionId());

    // Fetch suggested questions
    useEffect(() => {
        fetch(`${API_BASE}/suggested/`)
            .then((r) => r.json())
            .then((data) => setSuggested(data.slice(0, 6)))
            .catch(() => {});
    }, []);

    // Pulse animation every 10 seconds when closed
    useEffect(() => {
        if (open) return;
        const timer = setInterval(() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 1000);
        }, 10000);
        return () => clearInterval(timer);
    }, [open]);

    // Scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Focus input when opened
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [open]);

    const sendMessage = useCallback(async (text) => {
        const trimmed = (text || input).trim();
        if (!trimmed || loading) return;

        setInput("");
        setShowSuggested(false);

        const userMsg = {
            id: Date.now(),
            sender: "user",
            text: trimmed,
            timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE}/chat/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_id: sessionId.current,
                    message: trimmed,
                }),
            });
            const data = await res.json();
            const botMsg = {
                id: Date.now() + 1,
                sender: "bot",
                text: data.bot_response || "Kechirasiz, xatolik yuz berdi.",
                timestamp: new Date().toISOString(),
                matched: data.matched,
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: "Server bilan bog'lanishda xatolik. Iltimos, keyinroq urinib ko'ring.\n\nTo'g'ridan-to'g'ri bog'lanish:\n📧 info@iau.uz\n📞 +998 (55) 517 00 71",
                    timestamp: new Date().toISOString(),
                },
            ]);
        } finally {
            setLoading(false);
        }
    }, [input, loading]);

    const handleKey = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const formatTime = (ts) => {
        const d = new Date(ts);
        return d.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
    };

    const handleSuggested = (q) => {
        sendMessage(q);
    };

    const resetChat = () => {
        setMessages([WELCOME_MSG]);
        setShowSuggested(true);
        setInput("");
        sessionStorage.removeItem("iau_chat_session");
        sessionId.current = getSessionId();
    };

    return (
        <>
            {/* ── Floating Button ── */}
            <button
                className={`chatw-fab ${open ? "chatw-fab--open" : ""} ${pulse ? "chatw-fab--pulse" : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-label="Chatbot"
                id="chatbot-toggle-btn"
            >
                <span className="chatw-fab-icon">
                    {open ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                        </svg>
                    )}
                </span>
                {!open && <span className="chatw-fab-badge">?</span>}
            </button>

            {/* ── Chat Panel ── */}
            <div className={`chatw-panel ${open ? "chatw-panel--open" : ""}`} id="chatbot-panel">
                {/* Header */}
                <div className="chatw-header">
                    <div className="chatw-header-avatar">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </div>
                    <div className="chatw-header-info">
                        <div className="chatw-header-name">IAU Yordamchi</div>
                        <div className="chatw-header-status">
                            <span className="chatw-status-dot" />
                            Online
                        </div>
                    </div>
                    <div className="chatw-header-actions">
                        <button
                            className="chatw-icon-btn"
                            onClick={resetChat}
                            title="Chatni yangilash"
                            aria-label="Reset chat"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 .49-3.05" />
                            </svg>
                        </button>
                        <button
                            className="chatw-icon-btn"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="chatw-messages" id="chatbot-messages">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`chatw-msg chatw-msg--${msg.sender}`}
                        >
                            {msg.sender === "bot" && (
                                <div className="chatw-msg-avatar">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13zm-3 3c-1.5 0-2.77-.83-3.46-2.05l1.52-.87c.33.58.93.92 1.94.92s1.61-.34 1.94-.92l1.52.87C14.77 15.17 13.5 16 12 16z" />
                                    </svg>
                                </div>
                            )}
                            <div className="chatw-msg-body">
                                <div className="chatw-msg-bubble">
                                    {msg.text.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < msg.text.split("\n").length - 1 && <br />}
                                        </span>
                                    ))}
                                </div>
                                <div className="chatw-msg-time">{formatTime(msg.timestamp)}</div>
                            </div>
                        </div>
                    ))}

                    {/* Loading dots */}
                    {loading && (
                        <div className="chatw-msg chatw-msg--bot">
                            <div className="chatw-msg-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13zm-3 3c-1.5 0-2.77-.83-3.46-2.05l1.52-.87c.33.58.93.92 1.94.92s1.61-.34 1.94-.92l1.52.87C14.77 15.17 13.5 16 12 16z" />
                                </svg>
                            </div>
                            <div className="chatw-msg-body">
                                <div className="chatw-msg-bubble chatw-typing">
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Suggested questions */}
                    {showSuggested && suggested.length > 0 && !loading && (
                        <div className="chatw-suggested">
                            <div className="chatw-suggested-label">Ko'p so'raladigan savollar:</div>
                            <div className="chatw-suggested-list">
                                {suggested.map((s) => (
                                    <button
                                        key={s.id}
                                        className="chatw-suggested-btn"
                                        onClick={() => handleSuggested(s.question)}
                                    >
                                        {s.question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="chatw-input-area">
                    <div className="chatw-input-row">
                        <textarea
                            ref={inputRef}
                            className="chatw-input"
                            placeholder="Savolingizni yozing..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            rows={1}
                            id="chatbot-input"
                        />
                        <button
                            className={`chatw-send-btn ${input.trim() ? "chatw-send-btn--active" : ""}`}
                            onClick={() => sendMessage()}
                            disabled={!input.trim() || loading}
                            aria-label="Send message"
                            id="chatbot-send-btn"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="chatw-footer-note">
                        IAU University · Powered by AI Assistant
                    </div>
                </div>
            </div>
        </>
    );
}
