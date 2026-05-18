from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactRateThrottle(AnonRateThrottle):
    rate = '5/hour'


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    throttle_classes = [ContactRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "message received. i'll get back to you soon."},
            status=status.HTTP_201_CREATED,
        )
