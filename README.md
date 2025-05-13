# Système de Gestion de Production

## 📘 Description du Projet

Cette application full-stack permet de gérer efficacement les processus de production d'une entreprise industrielle. Elle centralise la création, la planification et le suivi des ordres de fabrication, la gestion des machines, des techniciens, des produits et des maintenances.

- Planifier et suivre les ordres de fabrication
- Gérer l'état et la maintenance des machines
- Affecter les techniciens aux équipements
- Surveiller les niveaux de stock des produits
- Planifier les opérations de maintenance préventive et corrective

L'objectif est de digitaliser l'ensemble du cycle de production pour améliorer l'efficacité, réduire les temps d'arrêt et faciliter la prise de décision.

---

## Modèle de Données

### Entités Principales

- **OrdreFabrication** : `id`, `produit`, `quantité`, `date`, `machine`, `statut`
- **Produit** : `id`, `nom`, `type`, `stock`, `fournisseur`
- **Machine** : `id`, `nom`, `état`, `maintenance_prochaine`
- **Technicien** : `id`, `nom`, `compétences`, `machine_assignee`
- **Maintenance** : `id`, `machine`, `technicien`, `date`, `type`

---

## 📦 Fonctionnalités Clés

- ✅ **Gestion complète des données (CRUD)** pour toutes les entités
- 📋 **Planification et suivi des ordres de fabrication**
  - Création, modification et suivi des ordres
  - Affectation des produits et machines
  - Gestion du statut d'avancement
- 🔧 **Gestion des machines**
  - Suivi de l'état en temps réel
  - Historique d'utilisation
  - Planification des maintenances
- 👨‍🔧 **Gestion des techniciens**
  - Affectation aux machines
  - Suivi des compétences
- 🛠️ **Planification des maintenances**
  - Maintenance préventive
  - Maintenance corrective
  - Historique des interventions

---

## 🧰 Technologies Utilisées

### Frontend
- **Angular** : Framework moderne pour l'interface utilisateur
- **TypeScript** : JavaScript typé pour plus de robustesse
- **SCSS** : Préprocesseur CSS pour des styles avancés
- **Angular Material** : Composants UI préconçus

### Back-end
- **Spring Boot**
- **Java 17**
- **Spring Data JPA**
- **MySQL**
- **Maven**


### DevOps
- **Git** : Gestion de versions
- **GitLab CI/CD** : Intégration et déploiement continus
- **Docker** : Conteneurisation
- **Docker Compose** : Orchestration de services

---

## 💻 Installation et Configuration

### ✅ Prérequis
- Node.js (v16+)
- Angular CLI
- Maven
- Node.js & npm
- Git

### Backend

```bash
# Cloner le dépôt
git clone https://gitlab.com/votre-utilisateur/produgest.git
cd produgest/backend

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec vos configurations

# Lancer le serveur en mode développement
npm run dev
```

### Frontend

```bash
# Se déplacer dans le dossier frontend
cd ../frontend

# Installer les dépendances
npm install

# Lancer l'application en mode développement
ng serve
```

Accédez à l'application via : [http://localhost:4200](http://localhost:4200)

---

## 🐳 Configuration Docker

### 1. Construction des images

```bash
# À la racine du projet
docker-compose build
```

### 2. Démarrage des services

```bash
docker-compose up -d
```

### 3. Accès
- Frontend : [http://localhost:4200](http://localhost:4200)
- Backend API : [http://localhost:8081/api](http://localhost:8081/api)
- MongoDB : `localhost:27017`

### 4. Arrêt des services

```bash
docker-compose down
```

---

## 🧱 Architecture du Système

```
┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│                     │      │                     │      │                     │
│   Angular Frontend  │─────▶│   Node.js Backend   │─────▶│    MySQL DB  │
│     (Port 4200)     │      │     (Port 8081)     │      │     (Port 3306)   │
│                     │      │                     │      │                     │
└─────────────────────┘      └─────────────────────┘      └─────────────────────┘
```



## 📄 Licence

Ce projet est sous licence [MIT](LICENSE)

---

## 👥 Développée par
Yasmine Gueddana

---

