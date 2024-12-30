from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)  # Get human-readable category name

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'description', 'link', 'image', 'created_at', 'updated_at',
            'upvotes', 'downvotes', 'author', 'category', 'category_display'
        ]
