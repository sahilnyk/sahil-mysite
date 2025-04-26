from django.contrib import admin
from django import forms
from .models import Blog, BlogImage
from django_ckeditor_5.widgets import CKEditor5Widget

class BlogImageInline(admin.TabularInline):
    model = BlogImage
    extra = 1

class BlogAdminForm(forms.ModelForm):
    # Replace the content field with CKEditor5 widget for rich text
    desc = forms.CharField(widget=CKEditor5Widget(config_name='default'))

    class Meta:
        model = Blog
        fields = '__all__'

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    form = BlogAdminForm
    list_display = ('title', 'category', 'date', 'slug')
    inlines = [BlogImageInline]
