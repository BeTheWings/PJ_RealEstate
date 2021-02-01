



if (request.getParameter("ref") != null) {
    try {
        int ref = Integer.parseInt(request.getParameter("ref"));
        Class.forName("com.mysql.jdbc.Driver");
        String jdbcurl = "jdbc:mysql://localhost:3306/board_db";
        conn = DriverManager.getConnection(jdbcurl, "root", "0000");
        stmt = conn.createStatement();
        sql = "select e_mail,passwd,ref from board_tbl where ref = " + ref;
        rs = stmt.executeQuery(sql);
    }
    catch (Exception e) {
        out.println("DB 연동 오류입니다. : " + e.getMessage());
    }
}