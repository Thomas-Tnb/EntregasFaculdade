import unittest

class Tarefa:
    def __init__(self, nome, descricao):
        if not nome:
            raise ValueError("O nome da tarefa não pode ser vazio.")
        self.nome = nome
        self.descricao = descricao
        self.status = "pendente"

    def marcar_concluida(self):
        if self.status == "concluída":
            raise ValueError("Tarefa já está concluída.")
        self.status = "concluída"

    def marcar_em_andamento(self):
        if self.status == "concluída":
            raise ValueError("Não é possível marcar como em andamento uma tarefa concluída.")
        self.status = "em andamento"

    def editar(self, novo_nome, nova_descricao):
        if not novo_nome:
            raise ValueError("O nome da tarefa não pode ser vazio.")
        self.nome = novo_nome
        self.descricao = nova_descricao


class ListaDeTarefas:
    def __init__(self):
        self.tarefas = {}

    def adicionar_tarefa(self, nome, descricao):
        tarefa = Tarefa(nome, descricao)
        self.tarefas[nome] = tarefa
        return tarefa

    def obter_tarefa(self, nome):
        if nome not in self.tarefas:
            raise KeyError("Tarefa não encontrada.")
        return self.tarefas[nome]

    def excluir_tarefa(self, nome):
        if nome not in self.tarefas:
            raise KeyError("Tarefa não encontrada.")
        del self.tarefas[nome]



# TESTES
class TesteListaDeTarefas(unittest.TestCase):

    def setUp(self):
        self.lista = ListaDeTarefas()

    # Testes para o requisito 1 :
    def test_adicionar_tarefa_sucesso(self):
        tarefa = self.lista.adicionar_tarefa("Estudar", "Ler o capítulo 3")
        self.assertEqual(tarefa.nome, "Estudar")
        self.assertIn("Estudar", self.lista.tarefas)

    def test_adicionar_tarefa_sem_nome(self):
        with self.assertRaises(ValueError):
            self.lista.adicionar_tarefa("", "Sem nome")

    # Testes para o requisito 2 :
    def test_marcar_tarefa_concluida(self): 
        tarefa = self.lista.adicionar_tarefa("Tarefa1", "Teste")
        tarefa.marcar_concluida()
        self.assertEqual(tarefa.status, "concluída")

    def test_marcar_tarefa_ja_concluida(self):
        tarefa = self.lista.adicionar_tarefa("Tarefa2", "Teste")
        tarefa.marcar_concluida()
        with self.assertRaises(ValueError):
            tarefa.marcar_concluida()

    # Testes para o requisito 3 :
    def test_marcar_tarefa_em_andamento(self):  
        tarefa = self.lista.adicionar_tarefa("Tarefa3", "Teste")
        tarefa.marcar_em_andamento()
        self.assertEqual(tarefa.status, "em andamento")

    def test_nao_marcar_em_andamento_apos_concluir(self):
        tarefa = self.lista.adicionar_tarefa("Tarefa4", "Teste")
        tarefa.marcar_concluida()
        with self.assertRaises(ValueError):
            tarefa.marcar_em_andamento()

    # Testes para o requisito 4 :
    def test_editar_tarefa_existente(self): 
        tarefa = self.lista.adicionar_tarefa("Tarefa5", "Descrição antiga")
        tarefa.editar("Nova Tarefa", "Nova descrição")
        self.assertEqual(tarefa.nome, "Nova Tarefa")
        self.assertEqual(tarefa.descricao, "Nova descrição")

    def test_editar_tarefa_inexistente(self): 
        with self.assertRaises(KeyError):
            self.lista.obter_tarefa("Inexistente").editar("x", "y")

    # Testes para o requisito 5 :
    def test_excluir_tarefa_existente(self):  
        self.lista.adicionar_tarefa("Tarefa6", "Teste")
        self.lista.excluir_tarefa("Tarefa6")
        self.assertNotIn("Tarefa6", self.lista.tarefas)

    def test_excluir_tarefa_inexistente(self):
        with self.assertRaises(KeyError):
            self.lista.excluir_tarefa("Nada")


if __name__ == "__main__":
    unittest.main()
