from rest_framework import generics
from django.db.models import Q
from .models import Blog
from .serializers import BlogSerializer

class BlogListCreateView(generics.ListCreateAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        # Search functionality
        query = self.request.query_params.get('q', '')
        return Blog.objects.filter(
            Q(title__icontains=query) |
            Q(desc__icontains=query) |
            Q(category__icontains=query) |
            Q(author__icontains=query)
        ) if query else Blog.objects.all()

class BlogRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'  # Use slug for retrieving the Blog
