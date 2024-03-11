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

    # create
    def post(self, request, format=None):
        serializer = PlaceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlaceDetail(APIView):

    # get object
    def get_object(self, pk):
        try:
            return Place.objects.get(pk=pk)
        except Place.DoesNotExist:
            raise Http404

    # get one
    def get(self, request, pk, format=None):
        place = self.get_object(pk)
        serializer = PlaceSerializer(place)
        return Response(serializer.data)

    # update
    def put(self, request, pk, format=None):
        place = self.get_object(pk)
        serializer = PlaceSerializer(place, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # remove
    def delete(self, request, pk, format=None):
        place = self.get_object(pk)
        place.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)