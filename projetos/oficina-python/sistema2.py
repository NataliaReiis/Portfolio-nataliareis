import tkinter as tk
from tkinter import ttk

lista_tipos = ["Galão", "Caixa", "Saco", "Saco", "Unidade"]

def command():

    nome_material = entry_descricao.get()
    tipo_unidade = label_tipo_unidade.get()
    quantidade = quantidade_entry.get()

    with open('dados.txt', 'w') as arquivo:
        arquivo.write("nome do Material: " + nome_material + "\n")
        arquivo.write("Tipo do Material: " + tipo_unidade + "\n")
        arquivo.write("Quantidade: " + quantidade + "\n") 




janela = tk.Tk()

janela.title("Ferramenta de Cadastro de materias")

label_descricao = tk.Label(text = "Descrição do Material")
label_descricao.grid(row=1, column = 0, padx=10, pady=10, sticky='nswe', columnspan = 4)

entry_descricao = tk.Entry()
entry_descricao.grid (row=2, column = 0, padx = 10, pady=10, sticky= 'nswe', columnspan = 4)

label_tipo_unidade = tk.Label(text = "Tipo da Unidade do material")
label_tipo_unidade.grid(row=3, column =0, padx = 10, pady=10, sticky='nswe', columnspan = 2)

label_tipo_unidade = ttk.Combobox(values = lista_tipos)
label_tipo_unidade.grid(row=3, column =2 , padx = 10, pady=10, sticky='nswe', columnspan = 2)

label_quantidade = tk.Label(text ="Quantidade: ")
label_quantidade.grid(row=4, column = 0, padx =10, pady =10, sticky = 'nswe', columnspan = 2)

quantidade_entry = tk.Entry()
quantidade_entry.grid(row = 4, column = 2, padx= 10, pady=10, sticky ='nswe', columnspan= 2)

botao = tk.Button(text = "Registrar", command=command)
botao.grid(row = 5, column= 0, padx =10 , pady=10, sticky = 'nswe', columnspan= 4 )

janela.mainloop()