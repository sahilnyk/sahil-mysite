from djongo import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField()
    image = models.ImageField(upload_to='project_image/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    upvotes = models.PositiveIntegerField(default=0)
    downvotes = models.PositiveIntegerField(default=0)
    author = models.CharField(max_length=100,default='sahilnyk', blank=True)  # Default can be set dynamically if required
    
    CATEGORY_CHOICES = [
        ('website-apis', 'website-apis'),
        ('ml/ai/dl', 'ml/ai/dl'),
        ('EDA', 'EDA'),
        ('computer vision', 'computer vision'),
        ('quant', 'quant'),
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
