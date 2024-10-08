<%-- 
    Document   : index
    Created on : 30 de set. de 2024, 11:27:53
    Author     : filipe.ricieri
--%>
<%@ page import="edu.ubc.cadprod.conexao.CadProdDbManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.SQLException" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <title>Página Inicial</title>
    </head>
    <body class="bg-info">
    
        <header>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <!--Logo-->
            <a class="navbar-brand">Cadastro de Produtos</a>
            <!--Menu hamburguer-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-target">
              <span class="navbar-toggler-icon"></span>
            </button>

            <!--navegação-->
            <div class="collapse navbar-collapse" id="nav-target">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#">Produtos</a></li>
                <li class="nav-item"><a class="nav-link" href="cliente">Clientes</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pedidos</a></li>
              </ul>
            </div>

          </nav>
        </header>
    
    
    
    
    
    
    
    
    
    
    
    
    
    <%
        Connection conexao = null;
        try {
            conexao = CadProdDbManager.obterConexao();
            if (conexao != null) {
                out.println("<h1 class='bg-success'>banco ok</h1>");
            }
        } catch (SQLException e) {
            out.println("<p>Erro no banco: " + e.getMessage() + "</p>");
        } finally {
           conexao.close();
        }
    %>
    
</body>

</html>
