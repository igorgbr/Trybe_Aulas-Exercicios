#!/bin/bash

NAME=$1

if [ -d $NAME ]

then VALOR=`ls -l $NAME | wc -l`
 echo "O diretorio $NAME tem $VALOR arquivos."

else
echo "O argumento $NAME não é um diretório"
fi



