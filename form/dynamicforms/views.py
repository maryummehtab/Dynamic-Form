from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    name = 'Hi'

    return render(request, 'dynamicforms/index.html', {'name': name})

def form(request):
    name='form'
    lists=[]
    counter=int(request.GET.get('count'))

    for i in range(counter):
        types=str(request.GET.get('type'+str(i)))
        lists.append(types)

    return render(request, 'dynamicforms/form.html', {'name': name, 'lists':lists})  