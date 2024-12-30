from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    upvote_count = serializers.IntegerField(read_only=True)
    downvote_count = serializers.IntegerField(read_only=True)
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'content', 'author', 'category', 'category_display',
            'image', 'created_at', 'updated_at', 'upvotes', 'downvotes'
        ]
