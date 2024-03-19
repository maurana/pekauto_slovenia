# Pek Automotive ![Slovenia](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/36/country-4x3/si.png "Slovenia")
> [!IMPORTANT]\
> TECHNOLOGY STACK :
<p align="left">
  <a><img src="https://img.shields.io/badge/v20.11.0-node-importantyellow?logo=nodedotjs" alt="NodeJs"></a>
  <a><img src="https://img.shields.io/badge/v18.2.0-react-blue?logo=react" alt="ReactJs"></a>
  <a><img src="https://img.shields.io/badge/v5.1.4-vite-blueviolet?logo=vite" alt="ViteJs"></a>
  <a><img src="https://img.shields.io/badge/v3.4.1-tailwind-yellow?logo=tailwindcss" alt="TailwindCss"></a>
  <a><img src="https://img.shields.io/badge/v3.14.0-restframework-red?logo=python" alt="DjangoRestFramework"></a>
  <a><img src="https://img.shields.io/badge/v5.0.3-django-teal?logo=django" alt="Django"></a>
  <a><img src="https://img.shields.io/badge/v1.23.1-nginx-green?logo=nginx" alt="Nginx"></a>
  <a><img src="https://img.shields.io/badge/v25.0.4-docker-lightblue?logo=docker" alt="Docker"></a>
  <a><img src="https://img.shields.io/badge/v2024.1-kalilinux-purple?logo=linux" alt="Kali Linux OS"></a>
</p>

> Installation

Backend
```bash
# Create a virtual environment to isolate our package dependencies locally
> python3 -m venv venv
> source venv/bin/activate  # On Windows use `venv\Scripts\activate`
> (venv) pip install -r requirements.txt
# Sync Database, before migration set up the database connection in .env file
> (venv) python manage.py migrate
# Seeding data
> (venv) python manage.py loaddata fixtures/*.json
```
Frontend
```bash
> npm install OR yarn add
```

> Running Local Development

Backend
```bash
> (venv) python manage.py runserver
```
Frontend
```bash
> npm run dev OR yarn run dev
```

> Production On Docker

Build Up
```bash
> sudo docker compose build
```
Running
```bash
> sudo docker compose up
```

Build Up and Running
```bash
> sudo docker compose up --build
```

Open a browser and access the fullstack app at http://localhost:2024/
