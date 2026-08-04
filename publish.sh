# publish.sh
# 
# Publication script for jekyll + github powered sites

# First build and commit changes to dev
bundle exec jekyll build
git add .
git commit -m "$1"
git push -u origin dev

# Then also commit changes to gh-pages
cd _site
git add .
git commit -m "$1"
git push -u origin gh-pages

# Return to current directory
cd ..
