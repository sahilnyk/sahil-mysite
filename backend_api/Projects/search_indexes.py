from haystack import indexes
from .models import Project

class ProjectIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)  # Main search field
    title = indexes.CharField(model_attr='title')
    description = indexes.CharField(model_attr='description')
    created_at = indexes.DateTimeField(model_attr='created_at')
    category = indexes.CharField()
    author = indexes.CharField()

    def prepare_category(self, obj):
        # Provide a default value if the category is None
        return obj.category or "Uncategorized"

    def prepare_author(self, obj):
        # Provide a default value if the author is None
        return str(obj.author) if obj.author else "Unknown Author"

    def get_model(self):
        return Project

    def index_queryset(self, using=None):
        """Return the queryset for indexing."""
        return self.get_model().objects.all()