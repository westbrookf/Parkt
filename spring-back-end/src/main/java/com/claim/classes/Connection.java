package com.claim.classes;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Connection {

    
 public static void main(String args[])throws Exception{  
 selectRecordsFromTable();
 } 
 
 private static void selectRecordsFromTable() throws SQLException {

 Connection dbConnection = null;
 PreparedStatement preparedStatement = null;

 String selectSQL = "SELECT * FROM EMPLOYEES WHERE id = ?";

 try {
 dbConnection = (Connection) DbConnection.getConnection();
 preparedStatement = ((java.sql.Connection) dbConnection).prepareStatement(selectSQL);
 preparedStatement.setInt(1, 16);

 // execute select SQL statement
 ResultSet rs = preparedStatement.executeQuery();

 while (rs.next()) {

   int id  = rs.getInt("id");          
          String email = rs.getString("email");
          String fname = rs.getString("first_name");
          String lname = rs.getString("lanst_name");

          //Display values
          System.out.print("\nID: " + id +"\nEmail: " + email+ "\nfirst name: " + fname+"\nlast Name: " + lname);          
       
 }

 } catch (SQLException e) {

 System.out.println(e.getMessage());

 } finally {

 if (preparedStatement != null) {
 preparedStatement.close();
 }

 if (dbConnection != null) {
 ((Statement) dbConnection).close();
 }

 }

 }
}
