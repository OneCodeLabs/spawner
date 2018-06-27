set -e
#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

echo "disabling .gitignore"
mv .gitignore .gitignore.bkup

echo "deleting current gh-pages branch"
git push -d origin gh-pages

echo "creating temporary commit"
git add $1
git commit -m "will delete this commit"

echo "deploying..."
git subtree push --prefix $1 origin gh-pages

echo "removing commit"
git reset HEAD~1

echo "enabling .gitignore back"
mv .gitignore.bkup .gitignore
