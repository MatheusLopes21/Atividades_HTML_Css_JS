import requests
api_url = 'https://api.nasa.gov/planetary/apod?api_key=VTAcV0qp2ycRvwgLRURPWNBteKPb8YjhboF4Qe2B'
request = requests.get(api_url)
if request.status_code == 200:
    dados=request.json()
    
    print(dados)
    print(dados['url'])

else:
    print('erro')