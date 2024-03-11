from django.http import Http404
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from v1.models.vin import Vin
from v1.serializers.vin import VinSerializer

class VinList(APIView):

    # list all
    def get(self, request, format=None):
        vin = Vin.objects.all()
        serializer = VinSerializer(vin, many=True)
        return Response(serializer.data)

    # create
    def post(self, request, format=None):
        serializer = VinSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VinDetail(APIView):

    # get object
    def get_object(self, pk):
        try:
            return Vin.objects.get(pk=pk)
        except Vin.DoesNotExist:
            raise Http404

    # get one
    def get(self, request, pk, format=None):
        vin = self.get_object(pk)
        serializer = VinSerializer(vin)
        return Response(serializer.data)

    # update
    def put(self, request, pk, format=None):
        vin = self.get_object(pk)
        serializer = VinSerializer(vin, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # remove
    def delete(self, request, pk, format=None):
        vin = self.get_object(pk)
        vin.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)