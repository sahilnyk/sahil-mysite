from djongo import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=100)  # Store the author's name
    category = models.CharField(max_length=100)  # Use predefined choices for better organization
    image = models.ImageField(upload_to='blog_image/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    upvotes = models.PositiveIntegerField(default=0)  # Count of upvotes
    downvotes = models.PositiveIntegerField(default=0)  # Count of downvotes

    CATEGORY_CHOICES = [
        ('Tech', 'Technology'),
        ('GeoPolitics', 'GeoPolitics'),
        ('CoreSubject', 'CoreSubject'),
        ('Chess', 'Chess'),
        ('Other', 'Other'),
    ]

    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES,
        default='Other',
    )

    def __str__(self):
        return self.title
