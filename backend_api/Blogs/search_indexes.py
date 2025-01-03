from haystack import indexes
from .models import Blog

class BlogIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)  # Main search field
    title = indexes.CharField(model_attr='title')
    content = indexes.CharField(model_attr='content')
    category = indexes.CharField(model_attr='category')
    created_at = indexes.DateTimeField(model_attr='created_at')
    author = indexes.CharField()

    def prepare_author(self, obj):
        # Provide a default value if the author is None
        return str(obj.author) if obj.author else "Unknown Author"

    def get_model(self):
        return Blog

    def index_queryset(self, using=None):
        """Return the queryset for indexing."""
        return self.get_model().objects.all()