from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

# Create your views here.

class MainView(View):
    def get(self, request):
        return render(request, 'ajax/main.html')

def calcView(request):
    get_l1 = request.GET.get('l1', 0)
    get_l2 = request.GET.get('l2', 0)
    return HttpResponse(int(get_l1) + int(get_l2))