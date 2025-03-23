from django.urls import path
from .views import ContactMessageCreateView, get_csrf_token

urlpatterns = [
    path('contact/', ContactMessageCreateView.as_view(), name='contact-message'),
    path('csrf-token/', get_csrf_token, name='csrf-token'),
]