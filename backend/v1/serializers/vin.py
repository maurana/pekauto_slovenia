from rest_framework import serializers 
from v1.models.vin import Vin
 
class VinSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Vin
        fields = '__all__'