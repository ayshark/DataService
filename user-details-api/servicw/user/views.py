from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UserSerializer
from .models import UserModel

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


