chicago-justice
===============

Crime, Punishment and Discretion in Chicago

# Previewing this mockup

### Getting Tarbell
First make sure you have [Tarbell](http://tarbell.tribapps.com/) installed and setup. 

If you don't have it installed, you can get it as follows:  
    sudo pip install tarbell==0.9b2  
    tarbell configure  

Note: When it asks you, you don't need to have either Google Spreadsheets or Amazoon S3 setup for this project.

### Getting the mockup

Clone the repo:  
    git clone git@github.com:bepetersn/chicago-justice.git

Do some setup and launch the Tarbell preview server:  
    cd chicago-justice  
    git submodule update --init  
    tarbell serve  

You should be able to view the results in a browser at `localhost:5000`.
