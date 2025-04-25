from django.contrib import admin
from .models import Blog, BlogImage

class BlogImageInline(admin.TabularInline):
    model = BlogImage
    extra = 1

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date', 'slug')
    inlines = [BlogImageInline]
