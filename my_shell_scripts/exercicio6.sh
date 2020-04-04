#/bin/bash

file=$*

if [ -f $file ]
then echo "É um arquivo comum"

elif [ -d $file ]
then echo "é um diretorio"

else
echo "é um outro tipo de arquivo"
fi

ls -l $file



