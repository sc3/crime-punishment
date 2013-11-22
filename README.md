chicago-justice
===============

Crime, Punishment and Discretion in Chicago

# Previewing the Mockup

## getting tarbell
First make sure you have [Tarbell](http://tarbell.tribapps.com/) installed and configured. 
When you are configuring, you don't need to have either Google Spreadsheets or Amazoon S3 setup,
nor do you need to make a new project.

## getting the mockup
Next, from the directory of your tarbell projects, run `git clone git@github.com:bepetersn/chicago-justice.git`.
Change into the directory that was just created, and run `git submodule update --init`.

## preview
Finally, run `tarbell serve` from the project root. You should be able to view the results 
in a browser at localhost:5000.
