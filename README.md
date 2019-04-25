# vuejs-todo-mysql

Building Todo List
MySQL+ Express + VueJs + NodeJS 

#you need 
Xampp 
phpmyadmin 
database  :nodejs_tasks
table: tbl_tasks

-----------------------------------------------------
#資料表結構
#	名稱	  類型	    編碼與排序	            屬性	 空值(Null)	      預設   備註	 額外資訊	動作
1	id主鍵	   int(11)	      否                 無		AUTO_INCREMENT	 修改    修改	 刪除     刪除	
2	task_name	text	latin1_swedish_ci		是	    NULL			 修改    修改	 刪除     刪除	

-----------------------------------------------------
# how to use 
#XAMPP
open Apache
open MySQL:3306

#後端
目錄VueJS-TODO-MYSQL
npm install 
npm start

#前端
目錄VueJS-TODO-MYSQL/client
npm install 
npm run dev

browser
http://localhost:8080
#USE POSTMAN
TEST CRUD