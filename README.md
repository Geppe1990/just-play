# My React App with Vite, Redux, Styled Components, and TypeScript

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0.0-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/Vite-3.0.0-brightgreen.svg" alt="Vite">
  <img src="https://img.shields.io/badge/Redux-4.1.2-purple.svg" alt="Redux">
  <img src="https://img.shields.io/badge/Styled%20Components-5.3.3-ff69b4.svg" alt="Styled Components">
  <img src="https://img.shields.io/badge/TypeScript-4.5.4-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
</p>

## 📋 Descrizione

Questo è un progetto di esempio in **React** configurato con **Vite**, **Redux**, **Styled Components** e **TypeScript**. Include un componente Counter e due componenti Header e Footer per mostrare come utilizzare queste tecnologie insieme.

## ⚙️ Caratteristiche

- ⚡ **Vite** - Costruzione rapida e setup del progetto.
- ⚛️ **React** - Libreria JavaScript per costruire interfacce utente.
- 🟪 **Redux** - Gestione dello stato globale dell'applicazione.
- 💅 **Styled Components** - Utilizzo di componenti stilizzati per gestire CSS.
- 🟦 **TypeScript** - Superinsieme di JavaScript che aggiunge tipizzazione statica.
- 🧹 **ESLint** - Strumento per identificare e riportare pattern negli script ECMAScript/JavaScript.
- 🎨 **Prettier** - Formattatore di codice.

## 🚀 Installazione

### Prerequisiti

Assicurati di avere installato Node.js e npm (o yarn).

### Passi per l'installazione

1. **Clona il repository:**
   ```
   git clone https://github.com/Geppe1990/react-boilerplate.git
   cd react-boilerplate
   ```
2. **Installa le dipendenze:**
   ```
   npm install
   ```
3. **Avvia il server di sviluppo:**
   ```
   npm run dev
   ```
4. **Apri il browser:**

   Vai a http://localhost:5173 per vedere il progetto in esecuzione.

## 📂 Struttura del Progetto
   ```
        my-react-app/
        ├── src/
        │   ├── components/
        │   │   ├── Header.tsx
        │   │   ├── Footer.tsx
        │   │   ├── Counter.tsx
        │   ├── features/
        │   │   ├── counter/
        │   │   │   ├── store.ts
        │   ├── store/
        │   │   ├── index.ts
        │   ├── App.tsx
        │   ├── main.tsx
        │   ├── index.css
        │   └── …
        ├── package.json
        ├── vite.config.ts
        └── …
   ```

## 🧑‍💻 Utilizzo
### Componente Counter

Il componente Counter utilizza Redux per gestire lo stato del contatore.

- **increment**: Incrementa il contatore di 1.
- **decrement**: Decrementa il contatore di 1.
- **reset**: Resetta il contatore a 0.

### Styled Components

```jsx
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;
```

## 🛠️ Strumenti di Sviluppo
- ESLint: Per lanciare ESLint, esegui: npm run lint
- Prettier: Per formattare il codice, esegui: npm run lint


## 📝 Licenza
Distribuito sotto la licenza MIT. Vedi LICENSE per maggiori informazioni.

## 🤝 Contributi
I contributi sono ciò che rende la comunità open source un posto straordinario per imparare, ispirare e creare. Qualsiasi contributo è molto apprezzato.

1.	Forka il progetto.
2.	Crea un branch per la tua funzionalità (git checkout -b feature/AmazingFeature).
3.	Fai commit delle tue modifiche (git commit -m 'Add some AmazingFeature').
4.	Pusha il branch (git push origin feature/AmazingFeature).
5.	Apri una Pull Request.

## 📧 Contatti

<a href="mailto:geppe1990@gmail.com"><img src="https://img.shields.io/badge/Email-geppe1990@gmail.com-red.svg" alt="Email"></a>
<a href="https://github.com/Geppe1990"><img src="https://img.shields.io/badge/GitHub-Geppe1990-lightgrey.svg" alt="GitHub"></a>
