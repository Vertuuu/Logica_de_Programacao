import os
import sys


def clear_terminal():
    clear_command = "cls" if sys.platform == "win32" else "clear"
    os.system(clear_command)

if __name__ == "__main__":
    fishing_data = []
    
    menu = """
=======================
MENU
=======================

0 -Finaliza
1- Cadastrar Pesca
2- Listar dados da Pesca
3- Relatório de Pagamento

Escolha: """
    while True:
        clear_terminal()
        option = int(input(menu))
        match option:
            case 0:
                clear_terminal()
                print("Aplicação finalizada.")
                break
            case 1:
                clear_terminal()
                fishing_date = str(input("Insira a data de sua pesca (DD/MM/AAAA): "))
                fishing_weight = float(input("Insira o peso total de suas pescas (Kg): "))
                fishing_excess_weight = fishing_weight - 50 if fishing_weight > 50 else 0
                new_fishing_day = {
                    "date": fishing_date,
                    "weight": fishing_weight,
                    "excess": fishing_excess_weight
                }
                fishing_data.append(new_fishing_day)
                print(f"Seu registro de pesca do dia {fishing_date} foi efetuado com sucesso!")
            case 2:
                title_line, table_line = "="*35, "-"*35
                clear_terminal()
                print(f"{title_line}\n|DATA      |Peso (Kg)|Excesso (Kg)|\n{title_line}")
                for fishing_day in fishing_data:
                    date = fishing_day["date"]
                    weight = str(fishing_day["weight"])
                    excess = str(fishing_day["excess"])
                    print(f"|{date.ljust(8)}|{weight.ljust(9)}|{excess.ljust(12)}|\n{table_line}")
            case 3:
                clear_terminal()
                total_excess_weight = 0
                for fishing_day in fishing_data:
                    excess_weight = float(fishing_day["excess"])
                    total_excess_weight += excess_weight
                total_fine = total_excess_weight*4
                print(f"Total de peso excedido: {total_excess_weight} kg")
                print(f"Total a pagar: R${total_fine}")
                pay_fine = str(input("Deseja efetuar o pagamento de todas multas(s/n)? ")).strip().lower()
                if pay_fine == 's':
                    fishing_data.clear()
                    print("Você efetuou o pagamento com sucesso!")
        input("\nPressione ENTER para voltar ao menu.")
        

