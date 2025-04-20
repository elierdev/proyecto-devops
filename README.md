# Proyecto DevOps – Aplicación Web Simple
<p align="center">
  <a href="https://elierdev.github.io/proyecto-devops/" target="_blank">
    <img src="https://img.shields.io/badge/ Ver_página_en_vivo-28a745?style=for-the-badge&logo=github&logoColor=white" alt="Ver página en vivo">
  </a>
</p>

**Equipo:**  
- Luis Elier - 2023-1667 
- Luis Angel - 2023-1681

## Descripción

Este proyecto es una aplicación web simple diseñada para demostrar la implementación de un pipeline DevOps completo. Incluye frontend, backend, pruebas, CI/CD, Docker y monitoreo básico.

## Repositorio

Repositorio GitHub del proyecto: [https://github.com/elierdev/proyecto-devops](https://github.com/elierdev/proyecto-devops)

## Tecnologías

- Node.js + Express  
- HTML, CSS, JS (vanilla)  
- Docker  
- GitHub Actions (CI/CD)  
- Jest + Supertest (pruebas)  
- Logs simples como monitoreo

## Estructura del proyecto

```
proyecto-devops/
├── app/
│   ├── backend/
│   └── frontend/
├── .github/workflows/
├── Dockerfile
├── README.md
└── docs/
```

## Cómo ejecutar localmente

```bash
git clone https://github.com/elierdev/proyecto-devops.git
cd proyecto-devops
docker build -t mi-app-devops .
docker run -p 3000:3000 mi-app-devops
```

Accede en: [http://localhost:3000](http://localhost:3000)

## Cómo correr pruebas

```bash
cd app/backend
npm install
npm test
```

## CI/CD

Cada vez que se hace push al branch `main`, se activa un workflow de GitHub Actions que:
- Instala dependencias
- Corre pruebas
- Construye la imagen Docker

Archivo del workflow: `.github/workflows/ci.yml`

