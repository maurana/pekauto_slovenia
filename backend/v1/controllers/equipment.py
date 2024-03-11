from django.http import Http404
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from v1.models.equipment import Equipment
from v1.serializers.equipment import EquipmentSerializer

class EquipmentList(APIView):

    # list all
    def get(self, request, format=None):
        equipment = Equipment.objects.all()
        serializer = EquipmentSerializer(equipment, many=True)
        return Response(serializer.data)

    # create
    def post(self, request, format=None):
        serializer = EquipmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EquipmentDetail(APIView):

    # get object
    def get_object(self, pk):
        try:
            return Equipment.objects.get(pk=pk)
        except Equipment.DoesNotExist:
            raise Http404

    # get one
    def get(self, request, pk, format=None):
        equipment = self.get_object(pk)
        serializer = EquipmentSerializer(equipment)
        return Response(serializer.data)

    # update
    def put(self, request, pk, format=None):
        equipment = self.get_object(pk)
        serializer = EquipmentSerializer(equipment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # remove
    def delete(self, request, pk, format=None):
        equipment = self.get_object(pk)
        equipment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)