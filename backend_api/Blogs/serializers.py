from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    upvotes = serializers.IntegerField()
    downvotes = serializers.IntegerField()

    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'content', 'author', 'category',
            'image', 'created_at', 'updated_at', 'upvotes', 'downvotes'
        ]
