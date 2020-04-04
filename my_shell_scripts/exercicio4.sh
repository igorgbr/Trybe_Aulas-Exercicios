#!/bin/bash

FILE="/home/igor/perm.sh"

if [ -e "$FILE" ]
then echo "O caminho $FILE esta habilitado"
fi

if [ -w $FILE ]
then echo "Você tem permissão para editar $FILE "
else echo "Você NÃO foi autorizado a editar $FILE"
fi
