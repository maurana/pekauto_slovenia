from django.http import Http404
from django_filters import rest_framework as filters
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics
from v1.models.vin import Vin
from v1.serializers.vin import VinSerializer
from v1.filters.vin import VinFilter

class VinList(generics.ListCreateAPIView):
    serializer_class = VinSerializer
    queryset = Vin.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = VinFilter

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)