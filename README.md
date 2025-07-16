# 🩺 Health Platform – Full-Stack Health Monitoring & Prediction System

This project is currently **under active development** 🚧. It aims to be a comprehensive health platform with secure user authentication, health metric tracking, and AI-driven prediction capabilities. Architected as a scalable monorepo using microservices and a React + TypeScript frontend.

---

## 🏁 Sprint Planning Roadmap

### 🚦 Sprint 1: Foundation Setup
- ✅ Installed core tools: Node, Docker, MongoDB, Git, VS Code
- 🛠 Initialized monorepo under `/packages/`
- ⚛️ Created React + TypeScript frontend scaffold
- 🌐 Scaffolded Auth microservice with Express
- 📦 Built `docker-compose.yml` for local orchestration

---

### 🔐 Sprint 2: Authentication Module
- ✍️ Signup, login, logout APIs (JWT-based)
- 🔄 Frontend integration with protected routes
- 🧪 Backend test coverage with Jest + Supertest
- 📄 Swagger/OpenAPI documentation available at `/api-docs`

---

### 💊 Sprint 3: Health Metrics Microservice *(in progress)*
- 📋 APIs for pulse, SpO₂, BP data intake
- 📂 Schema for MongoDB health records
- 🌐 Frontend form integration planned
- 📈 Basic visualization of metric trends
- 🧪 Validation and test suite planned

---

### 🔮 Sprint 4: Prediction Engine Microservice *(up next)*
- 🔌 Stub service (Flask in Docker) to load pretrained models
- 🧪 Predictive API using mock data
- 🔗 Connect ML engine to health metrics
- 📊 Display prediction results in dashboard

---

### 📉 Sprint 5: Reporting & Visualization *(scheduled)*
- 📈 Time-series graphs for historical metrics
- 📝 Store predictions and generate PDF/CSV reports
- 👀 Dashboard variants for users and admins

---

### 🚢 Sprint 6: Full Deployment
- 🐳 Dockerized all services
- 📦 Unified via `docker-compose.yml`
- 🌍 Target deployment: Render or DigitalOcean
- 🔧 CI/CD pipelines with GitHub Actions
- 🔒 Basic security practices implemented

---

### 🔄 Sprint 7: Feedback & Monitoring *(planned)*
- 🧠 Logging with Winston/Morgan
- 💬 User feedback and tuning
- 🧬 Model retraining and refinement
- 🛡️ Rate limiting and input sanitation

---

## 🧱 Tech Stack

| Layer       | Technologies                                         |
|-------------|------------------------------------------------------|
| Frontend    | React, TypeScript, Axios, React Router               |
| Auth API    | Node.js, Express, MongoDB, JWT, Swagger              |
| Metrics API | Node.js, Express, MongoDB                            |
| ML Engine   | Python Flask (Docker), scikit-learn, Pandas          |
| DevOps      | Docker, Docker Compose, GitHub Actions, .env configs|
| Testing     | Jest, Supertest                                      |

---


