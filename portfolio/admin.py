from django.contrib import admin
from .models import ProjectInfo

# Register your models here.
class ProjectInfoAdmin(admin.ModelAdmin):
  list_display = ('name', 'description', 'github', 'demo', 'image', 'show')

admin.site.register(ProjectInfo, ProjectInfoAdmin)