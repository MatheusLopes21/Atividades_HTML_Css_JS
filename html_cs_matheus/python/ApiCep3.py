import requests

estado = 'MG'
cidade = 'Belo Horizonte'
logradouro = 'Rua dos Aimores'
formato = '/json/'


url = f'https://viacep.com.br/ws/{estado}/{cidade}/{logradouro}{formato}'


r = requests.get(url)
if r.status_code == 200:
    enderecos = r.json()
    print()
    print(f'Endereços encontrados para {logradouro} em {cidade}/{estado}:')
    for endereco in enderecos:
        print(endereco)
        print()
else:
    print('Não houve sucesso na requisição.')


#estado = 'MG', cidade = 'Belo Horizonte', logradouro = 'Rua dos Aimores': Definimos os parâmetros da consulta.
#url = f'https://viacep.com.br/ws/{estado}/{cidade}/{logradouro}{formato}': Construímos a URL com os parâmetros.
#r = requests.get(url): Fazemos a requisição usando a URL completa.
#if r.status_code == 200: Verificamos se a requisição foi bem-sucedida.
#enderecos = r.json(): Obtemos a resposta em formato JSON, que será uma lista de endereços.
#print(f'Endereços encontrados para {logradouro} em {cidade}/{estado}:'): Imprimimos uma mensagem informando os endereços encontrados.
#for endereco in enderecos: Iteramos sobre a lista de endereços e imprimimos cada um deles.
#else: print('Não houve sucesso na requisição.'): Imprimimos uma mensagem de erro se a requisição falhar.