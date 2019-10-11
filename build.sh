npm run build;
tar -zcvf docs.tar.gz docs;
scp docs.tar.gz ubuntu@119.28.225.202:~/workspace;
