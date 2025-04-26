import os
from pathlib import Path
import dj_database_url  # new

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent

# Secret Key
SECRET_KEY = 'django-insecure-3xmxy*#rkl*6$dfzw=^6znm0d2qqd5tlgd0(yhbkb6vg2926$2'

# Debug Mode
DEBUG = os.environ.get('DEBUG', 'True') == 'True'

# Allowed Hosts
ALLOWED_HOSTS = ['localhost', '127.0.0.1', '.vercel.app', '.onrender.com', '.ngrok-free.app']

# Installed Apps
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'Blogs',
    'Projects',
    'corsheaders',
    'django_ckeditor_5',
]

# Middleware
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

# CORS
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://sahilnyk.vercel.app',
]

# URL Config
ROOT_URLCONF = 'psite.urls'

# Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'psite' / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'psite.wsgi.application'

# CKEditor 5
CKEDITOR_5_CONFIGS = {
    "default": {
        "toolbar": [
            "heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", 
            "|", "outdent", "indent", "|", "blockQuote", "insertTable", "undo", "redo"
        ],
        "heading": {
            "options": [
                {"model": "paragraph", "title": "Paragraph", "class": "ck-heading_paragraph"},
                {"model": "heading1", "view": "h1", "title": "Heading 1", "class": "ck-heading_heading1"},
                {"model": "heading2", "view": "h2", "title": "Heading 2", "class": "ck-heading_heading2"},
            ]
        },
    }
}
CKEDITOR_5_CUSTOM_CSS = 'css/ckeditor_custom.css'
# Migration
# Database - Use DATABASE_URL environment variable for Render's PostgreSQL
DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL', 'postgresql://sahiln:eg3opJGOU1XGrfnM7SZ5Tn1jxlwWyDMX@dpg-d06k7uali9vc73efjd90-a.oregon-postgres.render.com/mysite_db_3t0g')
    )
}

# Password Validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static and Media
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
