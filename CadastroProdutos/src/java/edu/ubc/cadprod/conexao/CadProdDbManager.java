/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.ubc.cadprod.conexao;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;
/**
 *
 * @author filipe.ricieri
 */
public class CadProdDbManager {

    public static Connection obterConexao()throws SQLException{
        String driver = "org.postgresql.Driver";
        String url = "jdbc:postgresql://localhost:5432/cad_prod";
        String user = "postgres";
        String password = "";
        Connection conexao = null;
        try{
            //carrega driver postgre
            Class.forName(driver);
            conexao = DriverManager.getConnection(url, user, password);
        }catch(ClassNotFoundException e){
            System.out.println("Driver do PostgreSQL não encontrado: "+ e.getMessage());
        }catch(SQLException e){
            System.out.println("Erro de conexão com o banco: " + e.getMessage());
        }
    return conexao;
    }
    
}
