<%-- 
    Document   : addCliente
    Created on : 7 de out. de 2024, 13:45:39
    Author     : filipe.ricieri
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>Adicionar Cliente</title>
</head>
<body style="margin-bottom: 200px; padding: 16px;">
    <h2 class="text-md-center">Adicionar Novo Cliente</h2>
    <form action="ClienteServlet" method="POST">
        <div  class="form-group">
            Nome: <input class="form-control" type="text" name="nome" placeholder="insira o nome" required><br>
            Email: <input class="form-control" type="email" name="email" placeholder="email@example" required><br>
        Telefone: <input class="form-control" type="text" name="telefone" placeholder="(11)91234-5678" required><br>
        <button class="btn btn-dark" type="submit">Adicionar</button>
        </div>
    </form>
    <br>
    <a href="cliente">Ver lista de clientes</a>
</body>
</html>
