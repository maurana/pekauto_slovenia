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
Open a browser and access the app at http://localhost:5173/
