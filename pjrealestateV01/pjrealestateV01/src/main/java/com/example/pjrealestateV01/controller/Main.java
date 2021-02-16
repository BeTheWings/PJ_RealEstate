package com.example.pjrealestateV01.controller;


import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection(
                    "jdc:mysql://localhost:3306",
                    "root",
                    "126479"
            );

            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(
                    "show databases"
            );
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
