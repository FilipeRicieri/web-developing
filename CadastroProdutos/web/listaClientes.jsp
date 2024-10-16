<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>Lista de Clientes</title>
</head>
<body>
    <h2 class="text-md-center">Lista de Clientes</h2>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ação</th> <!-- Nova coluna para ações -->
            </tr>
        </thead>
        <tbody>
            <c:forEach var="cliente" items="${listaClientes}">
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                    <td>
                        <!-- Botão Alterar -->
                        <form action="alterarCliente.jsp" method="GET" style="display:inline;">
                            <input type="hidden" name="id" value="${cliente.id}">
                            <a href="cliente?action=editar&id=${cliente.id}" class="btn btn-warning">Alterar</a>

                        </form>

                        <!-- Formulário para exclusão -->
                        <form action="cliente" method="POST" style="display:inline;">
                            <input type="hidden" name="id" value="${cliente.id}">
                            <input type="hidden" name="_method" value="DELETE"> <!-- Identificador para exclusão -->
                           <a href="cliente?action=editar&id=$cliente.id}"> <button class="btn btn-dark" type="submit" onclick="return confirm('Tem certeza que deseja excluir este cliente?');">Excluir</button>
                        </form>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br>
    <button class="btn btn-dark"><a class="text-light" href="addCliente.jsp">Adicionar novo cliente</a></button>
</body>
</html>
