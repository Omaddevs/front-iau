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

## API

- `GET /api/ekofaol-news/`
- `GET /api/ekofaol-news/<id>/`
