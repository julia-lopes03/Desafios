menu = """
[1]Depositar
[2]Sacar
[3]Extrato
[4]SAIR
"""
saldo = 0
limite_saque2 = 500.00
extrato = []
numero_saque = 0
limite_saque = 3
while True:
    opcao_do_cliente = input(menu)

    if opcao_do_cliente == '1':
        deposito =float(input("Digite o valor que deseja depositar: "))
    
        if deposito > 0 :
            saldo += deposito
            extrato.append(f'Depósito:{deposito:2f}')
            print(f'você depositou {deposito}!')
        else:
            print('Falhou')
    


    elif opcao_do_cliente == '2':
        saque = float(input('Digite o valor do saque: '))
    
        if saque > limite_saque2:
            print('Você não pode sacar mais que R$ 500.00.')
        elif numero_saque >= limite_saque:
            print('Você não tem mais saques disponíveis.')
        elif saque > saldo:
            print('Saldo insuficiente.')
        elif saque > 0:
            print('Obrigado por usar nosso serviço')
            saldo -= saque
            numero_saque += 1
            extrato.append(f'Saque: R$ {saque:.2f}')
        else:
            print('Valor de saque inválido.')
        


    elif opcao_do_cliente =='3':
        print("================ EXTRATO ================")
        print("Não foram realizadas movimentações." if not extrato else extrato)
        print(f"Saldo: R$ {saldo:.2f}")
        print("==========================================")    
    

    elif opcao_do_cliente == '4':
        break