# 🔪 Stock Trading System

A full-stack stock trading simulation built with **NestJS** (backend) and **React + Tailwind** (frontend). This project was developed as part of the Senior Software Engineering Assessment for Audyence, simulating trades, live price updates, and real-time portfolio tracking.

---

## 📆 Tech Stack

- **Backend:** NestJS, TypeScript, WebSockets (Socket.IO), EventEmitter
- **Frontend:** React, Tailwind CSS, @tanstack/react-query, Socket.IO client
- **State:** In-memory (no database)
- **Real-Time:** Stock price updates via WebSocket

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Runs on: `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:3000`

---

## 📊 Features

- 🔍 View stock catalog: symbol, name, price
- 💰 Make trades (buy/sell) with cash/share validation
- 📊 Monitor real-time portfolio value (cash + holdings)
- ↺ Receive live price updates via WebSocket
- ❌ Error messages for invalid trades (insufficient cash or shares)

---


## ⚖️ Decisions

| Decision Area         | Reasoning |
|------------------------|-----------|
| In-memory data         | Simplicity and no persistence required |
| WebSocket broadcasting | Lightweight real-time updates |
| No auth or multi-user  | Out of scope per assessment requirements |
| Custom money utils     | Avoid floating-point rounding issues with currency.js |
| No testing             | Due to time constraints |
---


## 🙏 Credits

Built by Melvin Acuna Guntanis.