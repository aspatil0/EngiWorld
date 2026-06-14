# 🎓 EngiWorld

Engi World is a student-focused platform that supports engineering students from admission to placement. Explore colleges, branches, cutoffs, and career roadmaps after 12th, and access syllabi, notes, PYQs, study materials, internships, and placement resources. Starting with SPPU, Pune, and expanding across India. 🚀📚

---

## 📂 Project Structure

```
EngiWorld/
├── Frontend/          # React + Vite (Client)
│   ├── src/           # React components, pages, assets
│   ├── public/        # Static files
│   ├── package.json   # Frontend dependencies
│   └── vite.config.js # Vite configuration
│
├── Backend/           # Express.js (API Server)
│   ├── server.js      # Entry point
│   ├── .env.example   # Environment variables template
│   └── package.json   # Backend dependencies
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/aspatil0/EngiWorld.git
cd EngiWorld
```

### 2. Setup Frontend

```bash
cd Frontend
npm install
npm run dev
```

The React app will start at **http://localhost:5173**

### 3. Setup Backend

```bash
cd Backend
cp .env.example .env     # Create your env file
npm install
npm run dev
```

The API server will start at **http://localhost:5000**

---

## 🛠️ Tech Stack

| Layer    | Technology        |
| -------- | ----------------- |
| Frontend | React 19 + Vite 8 |
| Backend  | Express.js 5      |
| Styling  | CSS               |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
