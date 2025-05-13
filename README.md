
# 🏭 Production Management System – Gestion des Ordres de Fabrication

## 📘 Project Description

This Production Management System is a robust application designed for manufacturing environments to manage and monitor production operations. It enables:

- Creation and tracking of production orders  
- Monitoring of machine status and maintenance  
- Assignment of machines and employees  
- Management of product inventory and stock updates  

The goal is to digitize and optimize production processes to improve efficiency, reduce downtime, and support decision-making.

---

## 📦 Core Features

- ✅ CRUD operations for all entities
- 🛠️ Real-time tracking of fabrication orders
- 👨‍🔧 Assignment of machines and employees to tasks
- 🔧 Maintenance tracking of machines
- 📈 Automatic stock updates when production is completed

---

## 📊 Data Model

### 🧱 Entities

- **OrdreFabrication**:  
  `id`, `projet`, `produit`, `quantite`, `date`, `etat`

- **Produit**:  
  `id`, `nom`, `type`, `stock`, `fournisseur`

- **Machine**:  
  `id`, `nom`, `etat`, `derniereMaintenance`

- **Employé**:  
  `id`, `nom`, `poste`, `machineAssignee`

- **Fournisseur**:
  `id`, `nom`, `adresse`, `téléphone`

---

## 🧰 Technologies Used

### Backend
- **Spring Boot** : REST API framework
- **Java** : Latest LTS version
- **Spring Data JPA** : ORM for database interaction
- **MySQL**: Relational database
- **Maven**: Build and dependency management

### Frontend
- **Angular**: Modern web frontend framework
- **TypeScript**: Typed JavaScript for Angular
- **Angular Material**: UI component library
- **RxJS**: Reactive extensions

### DevOps
- **Docker**: Containerization
- **Docker Compose**: Service orchestration

---

## 💻 Development Setup

### ✅ Prerequisites

- JDK 17  
- Maven  
- Node.js & npm  
- MySQL  
- Docker & Docker Compose  

---

## ▶️ Running Locally (Without Docker)

### Backend
```bash
mvn clean install
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

➡️ Access the app at: [http://localhost:4200](http://localhost:4200)

---

## 🐳 Docker Setup

### 1. Build the app
```bash
mvn clean package -DskipTests
```

### 2. Start services
```bash
docker-compose up -d
```

### 3. Access
- Frontend: [http://localhost](http://localhost)
- Backend API: [http://localhost:8080/api](http://localhost:8080/api)
- MySQL: `localhost:3306` (username: `root`, password: ``)

### 4. Stop
```bash
docker-compose down
```

---

## 🧱 Architecture Diagram

```
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│                    │     │                    │     │                    │
│   Angular Frontend │────▶│ Spring Boot Backend│────▶│     MySQL DB       │
│     (Port 80)      │     │   (Port 8080)      │     │    (Port 3306)     │
│                    │     │                    │     │                    │
└────────────────────┘     └────────────────────┘     └────────────────────┘
```
