Run Mongo on local host:
Run server:
$HOME/opt/mongodb-osx-x86_64-3.2.5/bin/mongod --dbpath=$HOME/opt/mongodata --logpath=$HOME/opt/mongod.log
Connect to server:
/Users/michalrabinowitch/opt/mongodb-osx-x86_64-3.2.5/bin/mongo
Watch log
less /Users/michalrabinowitch/opt/mongodb-osx-x86_64-3.2.5/bin/mongo

schema is the structure of the object

schema types:
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

model creates a class of it and can add it functions