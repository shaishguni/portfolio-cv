from django.shortcuts import render
from .models import Contact
def home(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        content =request.POST['message']
        contact=Contact(name=name, email=email, content=content)
        contact.save()
            
    return render(request, "index.html")