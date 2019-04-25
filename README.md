﻿# vuejs-todo-mysql

Building Todo List
MySQL+ Express + VueJs + NodeJS 

#you need 
Xampp  + phpmyadmin  + database(name) => nodejs_tasks + table(name)=> tbl_tasks

-----------------------------------------------------

| 名稱    | 類型 | 編碼與排序  | 屬性 | 空值(Null)  | 預設 |備註  | 額外資訊 | 動作 |
| ------- | ------- | ------- | -------- | ------- | ------- | ------- | ------- | ------- |
| id主鍵    | int(11)	 |   |  |否  | 無 |   | AUTO_INCREMENT |  |
| task_name | text | latin1_swedish_ci  |  | 是  | Null |  |  |  |

-----------------------------------------------------
#資料表結構

# how to use 
#XAMPP
open Apache
open MySQL:3306

#後端
目錄VueJS-TODO-MYSQL<br />
npm install<br />
npm start<br />

#前端
目錄VueJS-TODO-MYSQL/client<br />
npm install<br />
npm run dev<br />

browser<br />
http://localhost:8080<br />

#USE POSTMAN<br />
TEST CRUD
