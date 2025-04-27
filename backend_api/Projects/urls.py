from django.urls import path
from .views import ProjectListCreateView, ProjectRetrieveUpdateDeleteView

urlpatterns = [
    path('', ProjectListCreateView.as_view(), name='project-list-create'),
    path('<slug:slug>/', ProjectRetrieveUpdateDeleteView.as_view(), name='project-retrieve-update-delete'),  # Update here
]
