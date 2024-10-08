/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.ubc.cadprod.DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import edu.ubc.cadprod.conexao.CadProdDbManager;
import edu.ubc.cadprod.model.Cliente;
/**
 *
 * @author filipe.ricieri
 */
public class ClienteDAO {
    public void inserirCliente(Cliente cliente) throws SQLException{
    
        Connection conexao = null;
        PreparedStatement stmt = null;
        
        try{
            //conexão vindo da CadProdDbManager
            conexao = CadProdDbManager.obterConexao();

            String sql = "INSERT INTO cliente (nome, email, telefone) VALUES(?,?,?)";
            stmt = conexao.prepareStatement(sql);
            stmt.setString(1, cliente.getNome());
            stmt.setString(2, cliente.getEmail());
            stmt.setString(3, cliente.getTelefone());
            stmt.executeUpdate();
        }catch(SQLException er){
            throw new SQLException("Erro ao inserir cliente: " + er.getMessage(), er);
        }finally{
            if(stmt != null)stmt.close();
            if(conexao != null) conexao.close();
        }
    }//cliente insert end
    
    public List<Cliente> listarClientes() throws SQLException{
        Connection conexao = null;
        PreparedStatement stmt = null;
        ResultSet result = null;
        List <Cliente> clientes = new ArrayList();
        
        try{
            conexao = CadProdDbManager.obterConexao();
            String sql = "SELECT * FROM cliente";
            stmt = conexao.prepareStatement(sql);
            result =  stmt.executeQuery();
            
            while(result.next()){
                Cliente cliente = new Cliente();
                cliente.setId(result.getInt("id"));
                cliente.setNome(result.getString("nome"));
                cliente.setEmail(result.getString("email"));
                cliente.setTelefone(result.getString("telefone"));
                clientes.add(cliente);
                }
            

            }catch(SQLException err){
                err.getMessage();
            }finally{
            if (stmt != null) stmt.close();
            if (conexao != null) conexao.close();
        }     
            return clientes;
        }// show cliente method end


        public void atualizarCliente(Cliente cliente) throws SQLException {
        Connection conexao = null;
        PreparedStatement stmt = null;

        try {
            conexao = CadProdDbManager.obterConexao();
            String sql = "UPDATE cliente SET nome = ?, email = ?, telefone = ? WHERE id = ?";
            stmt = conexao.prepareStatement(sql);
            stmt.setString(1, cliente.getNome());
            stmt.setString(2, cliente.getEmail());
            stmt.setString(3, cliente.getTelefone());
            stmt.setInt(4, cliente.getId());

            stmt.executeUpdate();
        } finally {
            if (stmt != null) stmt.close();
            if (conexao != null) conexao.close();
        }
    }    
        
        public Cliente buscarClientePorId(int id) throws SQLException {
    Cliente cliente = null;
    String sql = "SELECT * FROM cliente WHERE id = ?";

    try (Connection conexao = CadProdDbManager.obterConexao();
         PreparedStatement stmt = conexao.prepareStatement(sql)) {
        stmt.setInt(1, id);
        try (ResultSet result = stmt.executeQuery()) {
            if (result.next()) {
                cliente = new Cliente();
                cliente.setId(result.getInt("id"));
                cliente.setNome(result.getString("nome"));
                cliente.setEmail(result.getString("email"));
                cliente.setTelefone(result.getString("telefone"));
            }
        }
    }
    return cliente; // Retorna o cliente encontrado ou null caso não exista
}

    
    
    public void deletarCliente(int id) throws SQLException{
        
        Connection conexao = null;
        PreparedStatement stmt = null;
        
        try{
            conexao = CadProdDbManager.obterConexao();
            String sql = "DELETE FROM cliente WHERE id = ?";
            stmt = conexao.prepareStatement(sql);
            stmt.setInt(1,id);
            
            stmt.executeUpdate();
        }catch(SQLException er){
            er.getMessage();
        }finally{
            if (stmt != null) stmt.close();
            if (conexao != null) conexao.close();
        }     
    }//delete cliente method end
    

}//class end



    
