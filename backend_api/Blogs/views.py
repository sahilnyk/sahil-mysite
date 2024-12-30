from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    @action(detail=True, methods=['post'])
    def vote(self, request, pk=None):
        """
        Custom action to handle upvotes and downvotes for a blog.
        """
        blog = self.get_object()
        vote_type = request.data.get('vote_type')

        if vote_type == 'upvote':
            blog.upvotes += 1
        elif vote_type == 'downvote':
            blog.downvotes += 1
        else:
            return Response({"detail": "Invalid vote type"}, status=status.HTTP_400_BAD_REQUEST)

        blog.save()
        return Response(BlogSerializer(blog).data)
