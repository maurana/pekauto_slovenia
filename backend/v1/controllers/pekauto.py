from django.http import Http404
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from v1.models.pekauto import Pekauto
from v1.serializers.pekauto import PekautoSerializer

class PekautoList(APIView):

    # list all
    def get(self, request, format=None):
        pekauto = Pekauto.objects.all()
        serializer = PekautoSerializer(pekauto, many=True)
        return Response(serializer.data)

    # create
    def post(self, request, format=None):
        serializer = PekautoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PekautoDetail(APIView):

    # get object
    def get_object(self, pk):
        try:
            return Pekauto.objects.get(pk=pk)
        except Pekauto.DoesNotExist:
            raise Http404

    # get one
    def get(self, request, pk, format=None):
        pekauto = self.get_object(pk)
        serializer = PekautoSerializer(pekauto)
        return Response(serializer.data)

    # update
    def put(self, request, pk, format=None):
        pekauto = self.get_object(pk)
        serializer = PekautoSerializer(pekauto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # remove
    def delete(self, request, pk, format=None):
        pekauto = self.get_object(pk)
        pekauto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)