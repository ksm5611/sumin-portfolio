from django.shortcuts import render
from rest_framework import viewsets
from ..personal_portfolio.serializers import ProjectInfoSerializer
from .models import ProjectInfo

# Create your views here.
class View(viewsets.ModelViewSet):
  serializer_class = ProjectInfoSerializer
  queryset = ProjectInfo.objects.all()