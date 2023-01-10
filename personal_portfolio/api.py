from portfolio.models import ProjectInfo
from rest_framework import viewsets
from .serializers import ProjectInfoSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

class ProjectInfoViewSet(viewsets.ModelViewSet):
  queryset = ProjectInfo.objects
  serializer_class = ProjectInfoSerializer