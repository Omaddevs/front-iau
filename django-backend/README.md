# Django backend for Ekofaol News

## Setup

```bash
cd django-backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 8000
```

## Admin

- Admin URL: `http://localhost:8000/admin/`
- Add posts from **Ekofaol news**
- Add jobs from **Vacancies** (same as News)

## API

- `GET /api/ekofaol-news/`
- `GET /api/ekofaol-news/<id>/`
- `GET /api/vacancies/`
- `GET /api/vacancies/<id>/`
