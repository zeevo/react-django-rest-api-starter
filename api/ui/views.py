from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    """Serve the React application
    
    Args:
        request (HttpRequest): Request object
    
    Returns:
        HttpResponse: Response object
    """

    return render(request, 'index.html')


def redirect_to_index(request):
    """Redirects all non-api requests to '/' to be caught by the SPA
    
    Args:
        request (HttpRequest): Request object
    
    Returns:
        HttpRedirectResponse: Redirect to '/'
    """

    return redirect('/')
