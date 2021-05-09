
# npm i -g copyfiles (uncomment as needed)
for d in ./templates/*/
    do
        cd $d
        git checkout master && git pull && yarn install
        yarn run build --prefix-paths # need to have prefixPaths set in gatsby-config of each template
        copyfiles "public/**/*" ../../public/t/${d:12}/ -u 1  # ${d:12} strips first 12 letters ./templates/ from ./templates/xyz
        copyfiles static/media/* ../../static/media -u 2
        cd ../..
    done
