# StudyT_1


Application built to automatically file recorded time studies and illuminate improvements across factories.

Developed for the IIE-CIS mobile app competition

This proof of concept is meant to demonstrate how one can automate much of the work that goes into recording timestudies through hybrid mobile and cloud development.
It allows users to create tasks and mix them according to what 'process' is currently being ran. 

A timing sheet is then populated for each process where the user can simply start and stop a timer associated to each task.  

Once complete, all data is automatically catalouged on the Google App Engine with a datetime stamp, allowing the user to focus on running the actual studies. 


Additionally the application provides users with a visual method to compare timestudies across different factories using the Google Maps API. If the exact same combination of tasks was ran in separate factories on the same system, a pins would pop up on the map depicting where these studies were and their overall run times. 

The idea is that if a similar process is found to be much more efficient in a different area, results and methods can be compared to improve productivity. 
