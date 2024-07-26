from django.contrib import admin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'author', 'category', 'created_at')
    search_fields = ('title', 'content', 'author', 'category')