from django.contrib import admin
from django.urls import path, include
from haystack.views import SearchView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('About.urls')),
    path('api/', include('Projects.urls')),
    path('api/', include('Blogs.urls')),
    path('search/', SearchView(), name='haystack_search'),
]
