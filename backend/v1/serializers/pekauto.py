from rest_framework import serializers 
from v1.models.pekauto import Pekauto
 
class PekautoSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Pekauto
        fields = '__all__'