from rest_framework import generics
from django.db.models import Q
from .models import Project
from .serializers import ProjectSerializer

class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        return Project.objects.filter(
            Q(title__icontains=query) |
            Q(desc__icontains=query) |
            Q(category__icontains=query) |
            Q(author__icontains=query)
        ) if query else Project.objects.all()

class ProjectRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
