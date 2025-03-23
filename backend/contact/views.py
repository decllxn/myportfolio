from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.http import JsonResponse
from django.middleware.csrf import get_token


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


def get_csrf_token(request):
    return JsonResponse({"csrfToken": get_token(request)})