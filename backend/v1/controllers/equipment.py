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