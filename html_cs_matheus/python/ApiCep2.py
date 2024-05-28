import requests

url = 'https://viacep.com.br/ws/'
base_cep = 30140071 
formato = '/json/' 

for i in range(5):
    cep = str(base_cep + i)  # Converte o número do CEP para string
    r = requests.get(url + cep + formato)
    if r.status_code == 200:
        print()
        print('JSON para o CEP {cep}:')
        print(r.json())
        print()
    else:
        print(f'Não houve sucesso na requisição para o CEP {cep}.')


#base_cep = 30140071: Definimos o CEP inicial como um número inteiro.
#for i in range(5): Criamos um loop que irá iterar 5 vezes.
#cep = str(base_cep + i): Calculamos o CEP sequencial adicionando i ao base_cep e convertendo para string.
#requests.get(url + cep + formato): Fazemos a requisição usando a URL base, o CEP atual e o formato (/json/).
#if r.status_code == 200: Verificamos se a requisição foi bem-sucedida.
#print(f'JSON para o CEP {cep}:'): Imprimimos o CEP atual.
#print(r.json()): Imprimimos a resposta da requisição em formato JSON.
#else: print(f'Não houve sucesso na requisição para o CEP {cep}.'): Imprimimos uma mensagem de erro se a requisição falhar.
#Este código fará a consulta para os CEPs 30140071, 30140072, 30140073, 30140074 e 30140075, e exibirá os resultados na tela.




