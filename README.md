chicago-justice
===============

Crime, Punishment and Discretion in Chicago

# Previewing This Mockup

## getting tarbell
First make sure you have [Tarbell](http://tarbell.tribapps.com/) installed and setup. 

If you don't have it installed, you can do so as follows:
```sudo pip install tarbell==0.9b2``` 

To set up tarbell, run the following command, and follow its prompts:
```tarbell configure```

Note: You don't need to have either Google Spreadsheets or Amazoon S3 setup for this project.

## getting the mockup
After that, from the directory of your tarbell projects, download this project: 
```git clone git@github.com:bepetersn/chicago-justice.git```

Next, change to the directory you just downloaded the mockup to:
```cd chicago-justice```

And get the underlying template for the project updated:
```git submodule update --init```

## preview
**Finally**, preview the project by running the following commadn from the project root:
```tarbell serve```

You should be able to view the results in a browser at localhost:5000.
