from django.contrib import admin
from django import forms
from .models import Project, ProjectImage
from django_ckeditor_5.widgets import CKEditor5Widget

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

class ProjectAdminForm(forms.ModelForm):
    # Replace the content field with CKEditor5 widget for rich text
    desc = forms.CharField(widget=CKEditor5Widget(config_name='default'))

    class Meta:
        model = Project
        fields = '__all__'

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    list_display = ('title', 'techstack', 'date', 'slug')
    inlines = [ProjectImageInline]
