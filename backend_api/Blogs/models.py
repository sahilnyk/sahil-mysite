from djongo import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=100,default='sahilnyk',blank=True)  # Store the author's name (can be 'sahilnyk' by default)
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

    def get_category_display_or_default(self):
        """
        Returns the category's display name or a default value if None.
        """
        return self.get_category_display() if self.category else "Uncategorized"
