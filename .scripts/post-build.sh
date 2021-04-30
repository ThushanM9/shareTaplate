echo 'POST BUILD RUNNING ⏳'
echo '-'

if [ -d "/home/charana/projects/lolc/fus/qa-lolc/casa" ]; then
    echo 'REMVOING BUILD FILE FROM CASA REPO 📁 ➡ ❌'
    echo '-'
    if rm -rf /home/charana/projects/lolc/fus/qa-lolc/central-cash-management/build; then
        echo "Succefully Deleted"
    else
        echo "Something went wrong while deleting"
    fi
    echo '-'
    echo 'COPYING BUILD FILE FROM FUSION to CASA REPO 🗄 ➡ 📂'
    echo '-'
    if cp -ar build/. /home/charana/projects/lolc/fus/qa-lolc/central-cash-management/build; then
        echo "Succefully copied the build file"
    else
        echo "Something went wrong while copying the build file"
    fi
    echo "DONE"
else
    echo 'NO DIRECTORY TO RUN POST BUILD [UNDE DEVELOPMENT]'
fi

# add this in package.json
# "postbuild": "sh .scripts/post-build.sh",
