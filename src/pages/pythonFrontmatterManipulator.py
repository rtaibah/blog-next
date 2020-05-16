import re
import sys
import os
import glob
import frontmatter
import io

new_author = "rami" # Changethe new author here
new_layout = "zeitgeist"        # Change the new layout here
new_categories = "Blog"    # Change categories here; space seperated
new_tags = ""              # Change tags here; space seperated


######################################################################
#                               TODO                                 #
######################################################################

# Load only frontmatter not the full blogpost, write it to a temp file and replace 
# it in the original blogpost

# Add new attributes to the frontmatter

def getDate(filename):
    date = re.search(r'([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))',filename)
    if date:
        return date.group(0)

def addMetaData(filename):
    with open('zeitgeist/'+filename, 'r') as f:
        # Parse file's front matter
        post = frontmatter.loads(f.read())
        if post.get('url') == None:
            post['url'] = 'zeitgeist'
            # Save the modified file
            with io.open('zeitgeist/'+filename, 'wb') as newfile: frontmatter.dump(post, newfile)



# Change the Author of a post in a YAML front matter
def changeAuthor(filename):
  fo = open(filename, "r+")
  mdFile= fo.read()
  #change_author = re.sub( r'author:.*','author: ' + new_author, mdFile, re.M|re.I)
  #fo.seek(0)
  #fo.write(change_author)
  #fo.truncate()
  #fo.close


# Change the Layout of a post in a YAML front matter
def changeLayout(filename):
  fo = open('zeitgeist/'+filename, "r+")
  mdFile= fo.read()
  change_layout= re.sub( r'layout:.*','layout: ' + new_layout, mdFile, re.M|re.I)
  fo.seek(0)
  fo.write(change_layout)
  fo.truncate()
  fo.close


# Change categories of a post in a YAML front matter
def changeCategory(filename):
  fo = open(filename, "r+")
  mdFile= fo.read()
  change_categories= re.sub( r'(categories:\n)(-.*\n)+(?=---)' | r'(categories:.+','categories: ' + new_categories +'\n', mdFile, re.M|re.I)
  fo.seek(0)
  fo.write(change_categories)
  fo.truncate()
  fo.close


# Change tags of a post in a YAML front matter
def changeTags(filename):
  fo = open(filename, "r+")
  mdFile= fo.read()
  change_tags= re.sub( r'(tags:\n)(-.*\n)+(?=---)','tags: ' + new_tags+'\n', mdFile, re.M|re.I)
  fo.seek(0)
  fo.write(change_tags)
  fo.truncate()
  fo.close


# When converting an old Wordpress blog into markdown, the tool used (npm html-markdown) grabbed some front matter that is no longer valid or I otherwise do not need: tweetbackscheck, shorturls, twittercomments, and tweetcount. We remove these here.

#def deleteShorturls(filename):
#  fo = open(filename, "r+")
#  mdFile= fo.read()
#  delete_shorturls= re.sub( r'(shorturls:\n)(-.*\n)+','', mdFile, re.M|re.I)
#  fo.seek(0)
#  fo.write(delete_shorturls)
#  fo.truncate()
#  fo.close
#  
#
#def deleteTweetbackscheck(filename):
#  fo = open(filename, "r+")
#  mdFile= fo.read()
#  delete_tweetbackscheck= re.sub( r'(tweetbackscheck:\n)(-.*\n)+','', mdFile, re.M|re.I)
#  fo.seek(0)
#  fo.write(delete_tweetbackscheck)
#  fo.truncate()
#  fo.close
#
#
#def deleteTwittercomments(filename):
#  fo = open(filename, "r+")
#  mdFile= fo.read()
#  delete_twittercomments= re.sub( r'(twittercomments:\n)(-.*\n)+','', mdFile, re.M|re.I)
#  fo.seek(0)
#  fo.write(delete_twittercomments)
#  fo.truncate()
#  fo.close
#
#
#def deleteTweetcount(filename):
#  fo = open(filename, "r+")
#  mdFile= fo.read()
#  delete_tweetcount= re.sub( r'(tweetcount:\n)(-.*\n)+','', mdFile, re.M|re.I)
#  fo.seek(0)
#  fo.write(delete_tweetcount)
#  fo.truncate()
#  fo.close()


for filename in os.listdir('./zeitgeist'):
    #getDate(filename)
    addMetaData(filename)
    #changeAuthor(filename)
    #changeLayout(filename)
    #changeCategory(filename)
    #changeTags(filename)
    #deleteShorturls(filename)
    #deleteTweetbackscheck(filename)
    #deleteTwittercomments(filename)
    #deleteTweetcount(filename)
