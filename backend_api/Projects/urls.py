from django.urls import path
from .views import ProjectListCreateView, ProjectRetrieveUpdateDeleteView

urlpatterns = [
    path('', ProjectListCreateView.as_view(), name='project-list-create'),
    path('<int:pk>/', ProjectRetrieveUpdateDeleteView.as_view(), name='project-retrieve-update-delete'),
]
