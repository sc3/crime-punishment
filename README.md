Crime and Punishment in Chicago
===============

## About the Project

The <b>Crime and Punishment in Chicago</b> project, which this repo backs, provides an index of data sources regarding the criminal justice system in Chicago. We track data sources from the first 911 call all the way to court or jail. We aggregate sources of data, provide insight into how this data is generated, discuss how to get it, and expose what data is unavailable. This project intends to use practices of data journalism to uncover the value of data and to discover the stories behind it. We used the Chicago Tribune's <a href="http://tarbell.tribapps.com/">Tarbell</a> content management system to build our site.
 
This project is part of a collaboration between the <a href="http://chicagojustice.org/">Chicago Justice Project</a>, a nonprofit research organization, and <a href="freegeekchicago.org">FreeGeek Chicago</a>’s Supreme Chi-Town Coding Crew (<a href="https://github.com/sc3/sc3">SC3</a>). This project is funded by <a href="http://www.smartchicagocollaborative.org/">Smart Chicago</a> and the <a href="http://www.cct.org/">Chicago Community Trust</a>.

You can see the current version of the website this repo backs here: http://chicago-justice.smartchicagoapps.org/.




## Development

In order to get started developing this project, these are the steps you should follow.

### Getting Tarbell
First, make sure you have [Tarbell](http://tarbell.tribapps.com/) installed and setup. 

If it's not already installed, here's the two steps you need to get it:  

    sudo pip install tarbell==0.9b2  
    tarbell configure  

Note: When it asks you, you should set up Google Spreadsheets, but we can laeve Amazoon S3 setup for later.

### Getting the mockup

Clone the repo:  

    git clone git@github.com:sc3/chicago-justice.git

Do some setup and launch the Tarbell preview server:  

    cd chicago-justice  
    git submodule update --init  
    tarbell serve  

You should be able to view the results in a browser at `localhost:5000`.


### Priorities


Currently, priorities for development are issue [#49](https://github.com/sc3/chicago-justice/issues/49) and [#61](https://github.com/sc3/chicago-justice/issues/61), and after that all the changes which add new tabs to the site.
