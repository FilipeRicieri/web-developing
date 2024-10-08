/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.ubc.cadprod.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import edu.ubc.cadprod.DAO.*;
import edu.ubc.cadprod.conexao.*;
import edu.ubc.cadprod.model.*;
/**
 *
 * @author filipe.ricieri
 */
@WebServlet("/cliente")
public class ClienteServlet extends HttpServlet{
        
        private ClienteDAO clienteDAO = new ClienteDAO();
        
        //processa requisições GET (ex: listar clientes)
        @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    
    String action = request.getParameter("action");
    
    if ("editar".equals(action)) {
        int id = Integer.parseInt(request.getParameter("id"));
        
        try {
            Cliente cliente = clienteDAO.buscarClientePorId(id); // Método para buscar cliente por ID
            request.setAttribute("cliente", cliente);
            request.getRequestDispatcher("alterarCliente.jsp").forward(request, response);
        } catch (SQLException e) {
            throw new ServletException("Erro ao carregar cliente para edição", e);
        }
    } else {
        try{
        // Lista clientes caso seja uma requisição normal (sem editar)
        List<Cliente> clientes = clienteDAO.listarClientes();
        request.setAttribute("listaClientes", clientes);
        request.getRequestDispatcher("listaClientes.jsp").forward(request, response);
        }catch(SQLException er){
            er.getMessage();
        }
    }
}

        

        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    String id = request.getParameter("id");
    String nome = request.getParameter("nome");
    String email = request.getParameter("email");
    String telefone = request.getParameter("telefone");

    Cliente cliente = new Cliente();
    cliente.setNome(nome);
    cliente.setEmail(email);
    cliente.setTelefone(telefone);

    try {
        if (id != null && !id.isEmpty()) {
            // Atualizar cliente existente
            cliente.setId(Integer.parseInt(id));
            clienteDAO.atualizarCliente(cliente);
        } else {
            // Inserir novo cliente
            clienteDAO.inserirCliente(cliente);
        }
        response.sendRedirect("cliente");
    } catch (SQLException e) {
        throw new ServletException("Erro ao salvar cliente", e);
    }
}

     
        
        
}
