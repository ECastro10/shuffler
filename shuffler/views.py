from django.shortcuts import render

# Create your views here.
def home(request):
    context_dict = {}
    return render(request, 'home.html', context_dict)