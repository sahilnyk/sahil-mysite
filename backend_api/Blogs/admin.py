from django.contrib import admin
from .models import Blog, BlogImage

class BlogImageInline(admin.TabularInline):  # or StackedInline
    model = BlogImage
    extra = 1  # number of extra blank forms

class BlogAdmin(admin.ModelAdmin):
    inlines = [BlogImageInline]

admin.site.register(Blog, BlogAdmin)
