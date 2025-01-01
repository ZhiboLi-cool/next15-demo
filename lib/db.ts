import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.DB_HOST, // 例如：'localhost'
  user: process.env.DB_USER, // 例如：'root'
  password: process.env.DB_PASSWORD, // 例如：'your_password'
  database: process.env.DB_NAME, // 例如：'your_database_name'
  port: Number(process.env.DB_PORT)
});

// // 测试连接
// (async () => {
//   try {
//     console.log('====before to MySQL database!',connection);

//     await connection.getConnection();
//     console.log('====Connected to MySQL database!');
//   } catch (error) {
//     console.error('====Error connecting to MySQL database:', (error as Error).message);
//     // process.exit(1); // 如果连接失败，退出程序
//   }
// })();

export default connection;