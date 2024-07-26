from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('About.urls')),
    path('api/', include('Projects.urls')),
    path('api/', include('Blogs.urls')),
]
