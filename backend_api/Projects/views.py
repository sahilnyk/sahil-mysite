from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    @action(detail=True, methods=['post'])
    def vote(self, request, pk=None):
        vote_type = request.data.get('vote_type')  # 'upvote' or 'downvote'

        if vote_type not in ['upvote', 'downvote']:
            return Response({"detail": "Invalid vote type"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            project = Project.objects.get(pk=pk)

            if vote_type == 'upvote':
                project.upvotes += 1  # Increment upvotes
            elif vote_type == 'downvote':
                project.downvotes += 1  # Increment downvotes

            project.save()

            serializer = ProjectSerializer(project)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Project.DoesNotExist:
            return Response({"detail": "Project not found"}, status=status.HTTP_404_NOT_FOUND)
