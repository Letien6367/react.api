function Notfound() {
    return (
        <div
            className="notfound-page"
            style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
            padding: "40px",
            }}
        >
            <div
            style={{
                textAlign: "center",
                maxWidth: 720,
                width: "100%",
                padding: "36px",
                borderRadius: 14,
                boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
                background: "#ffffff",
            }}
            >
            <div style={{ fontSize: 88, lineHeight: 1, marginBottom: 8 }}>🙁</div>
            <h1
                style={{
                fontSize: 30,
                margin: "0 0 10px",
                color: "#0f172a",
                fontWeight: 700,
                }}
            >
                Không Tìm Thấy Trang
            </h1>
            <p style={{ margin: "0 0 22px", color: "#475569", fontSize: 15 }}>
                Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển. Hãy kiểm tra lại liên kết hoặc
                quay về trang chủ.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                <a
                href="/"
                style={{
                    padding: "10px 18px",
                    borderRadius: 10,
                    background: "#2563eb",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    boxShadow: "0 8px 20px rgba(37,99,235,0.18)",
                }}
                >
                Về trang chủ
                </a>
                <button
                onClick={() => window.history.back()}
                style={{
                    padding: "10px 18px",
                    borderRadius: 10,
                    background: "transparent",
                    border: "1px solid #e6eef8",
                    color: "#0f172a",
                    cursor: "pointer",
                }}
                >
                Quay lại
                </button>
            </div>
            </div>
        </div>
    );
}

export default Notfound;