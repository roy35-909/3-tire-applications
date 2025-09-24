from django.http import JsonResponse
import redis

def hello(request):
    r = redis.Redis(host="redis", port=6379, db=0)
    count = r.incr("hits")
    return JsonResponse({"message": "Hello from Django!", "visits": count})