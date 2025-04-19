# Proyecto DevOps – Aplicación Web Simple

**Equipo:**  
- Nombre 1 – Matrícula 1  
- Nombre 2 – Matrícula 2

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

