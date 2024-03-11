from rest_framework import serializers 
from v1.models.equipment import Equipment
 
class EquipmentSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Equipment
        fields = '__all__'