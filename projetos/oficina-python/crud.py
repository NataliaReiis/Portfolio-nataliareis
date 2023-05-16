import mysql.connector

class Agenda:
    def connection(self):
        self.connection = mysql.connection.connect(
            host= "",
            user="",
            pssoword = "",
            database = "Agenda"

        )
        self.cursor = self.connection.cursor()

    def create(self, nome, telefone):
        comando = f' INSERT INTO contato(nome, telefone) VALUES ("{nome}", "{telefone}");'

        self.cursor.execute(comando)
        self.conexao.commit()
        self.cursor.close()
        self.conexao.close()

    def read(self):
        comando = f'SELECT * FROM contato;'
        self.resultado = self.cursor.fetchall()
        print(self.resultado)

        self.cursor.close()
        self.conexao.close()

    def update(self, id, nome, telefone):
        comando = f'UPDATE contato SET nome = "{nome}", telefone = "{telefone}", WHERE id= "{id}";'

        self.cursor.execute(comando)
        self.conexao.commit()
        
        self.cursor.close()
        self.conexao.close()

    def delete(self, id):
        comando = f"DELETE FROM conttao WHERE id = '{id}'"

        self.cursor.execute(comando)
        self.conexao.commit()
        
        self.cursor.close()
        self.conexao.close()

usuario = Agenda()
usuario.connection()
usuario.read()
