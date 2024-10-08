<%-- 
    Document   : alterarCliente.jsp
    Created on : 8 de out. de 2024, 15:58:27
    Author     : filipe.ricieri
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Alterar Cliente</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <h2 class="text-center">Alterar Cliente</h2>
    
    <form action="cliente" method="POST" class="container mt-4">
        <input type="hidden" name="id" value="${cliente.id}">
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" class="form-control" value="${cliente.nome}" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" class="form-control" value="${cliente.email}" required>
        </div>
        <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input type="text" name="telefone" id="telefone" class="form-control" value="${cliente.telefone}" required>
        </div>
        <input type="hidden" name="_method" value="PUT"> <!-- Identificador para atualizar -->
        <button type="submit" class="btn btn-success">Salvar Alterações</button>
    </form>

    <br>
    <button class="btn btn-dark ml-3"><a class="text-light" href="cliente">Cancelar</a></button>
</body>
</html>

