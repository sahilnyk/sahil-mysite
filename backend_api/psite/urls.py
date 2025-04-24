from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blogs/', include('Blogs.urls')),
    path('projects/', include('Projects.urls')),
]
