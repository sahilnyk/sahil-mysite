from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)
    links = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return f"Image for {self.project.title}"
