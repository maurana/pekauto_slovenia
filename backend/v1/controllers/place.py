from django.http import Http404
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from v1.models.place import Place
from v1.serializers.place import PlaceSerializer

class PlaceList(APIView):

    # list all
    def get(self, request, format=None):
        place = Place.objects.all()
        serializer = PlaceSerializer(place, many=True)
        return Response(serializer.data)