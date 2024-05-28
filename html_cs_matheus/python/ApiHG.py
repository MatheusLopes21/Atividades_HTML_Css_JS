import requests
import pandas
import pandas as pd

api_key = "https://api.hgbrasil.com/finance?format=json-cors&key=d85a29c5"

request = requests.get(api_key)

if request.status_code == 200:
    dados = request.json()
    print(dados)
    print(dados['results']['currencies'])
    print('Dolar: ')
    print(dados['results']['currencies']['USD']['buy'])
    print('Bitcoin: ')
    print(dados['results']['currencies']['BTC']['buy'])
    df_dicionario = pd.DataFrame(dados)
    df_dicionario
else:
    print('Falhou')