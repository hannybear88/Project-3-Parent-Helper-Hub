# -Project-3-EV-Charge-N-Go
Project #3 test test test 

# Project Description
This app  allows owners of private home chargers to rent out their personal EV chargers to others by location, reservations, and duration of use with an owner fixed rate.
 
# Table of Contents
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria) 
* [Motivation for Development](#Motivation-for-Development) 
* [Process](#Process) 
* [Technologies Used](#Technology-Used) 
* [Challenges](#Challenges) 
* [Successes](#Successes) 
* [Usage](#Usage) 
* [Goals for Future Development](#Goals-for-Future-Development) 
* [Support](#Support) 
* [Deployed Site](#Deployed-Site) 
* [Tasks and Roles](#Tasks-and-Roles) 
* [Credits and Contributors](#Credits-and-Contributors)


# User-Story 
- AS A developer who is interested in supporting Californias initiative towards more electric vehicles
- I WANT an EV Charge N Go site to support the efforts in reducing gas emmissions and increasing electric vehicle use 
- SO THAT more individuals can have access to owning or using an electric car regardless of installing a home charger themselves or needing to own a home to access 
- AND SO THAT while traveling out of town, finding stations to reserve in advance to ensure the ability of electric vehicle use 



# Acceptance Criteria
- GIVEN a EV Charge N Go Site
- WHEN I visit the site for the first time
- THEN I am presented on a homepage, landing site, which includes a map and a zip code search form
- WHEN I enter my zip code
- THEN I am prompted to sign up or login in
- WHEN I sign up 
- THEN I must provide a valid email address and password
- WHEN I am done signing up
- THEN I am automatically directed to the home page
- WHEN I already have an account
- THEN I can login using an email and password
- WHEN I am logged in and my username appears on the top left side of the home page
- THEN I can select either to view My Charging Stations, My Reservation, search for a station via a zipcode, or add a charging station (+ Station)
- WHEN I want to make a modification to My Reservations
- THEN select Cancel Reservation to remove from que
- WHEN I add a charging station
- THEN I have to fill out the station form with station name, station address, station type, and plug in types
- WHEN I go to My Charging Stations
- THEN all the charging stations I own will appear in one page
- WHEN I want to make a reservation
- THEN I have to search for a station and click on reserve to get redirected to fill out the reservation form with date and time of reservation
- WHEN the reservation is made
- THEN in My Reservations detail station information, along with date and time of reservation will appear
- WHEN
- THEN 
- WHEN
- THEN 
- WHEN
- THEN 
- WHEN
- THEN 
- WHEN
- THEN 
- WHEN I select Logout 
- THEN I am logged out of the site



# Motivation for Development
- We all came to an agreement that EV Charging isnt easily accessible and a gap for EV owners and station owners exists. This application allows personal station owners to advertise their stations for reservations and in parallel supporting EV ease of access initiative to a wider range of the community for ease of access supporting EV's future mission.  


# Process
- Topic / Project defined
- Defined a high level breakdown of the project
- Worked together creating the models
- Models helped define the various work packages and tasks required to complete the project
- Assigned tasks to team members
- High collaboration throughout
    - Working together via zooms, meetings, slack, etc to help with suo coding and/or brainstorming how to effectively move ahead in the process
- Set team goals and reasses as needed throughout



## Technologies Used 
![Technologies](https://img.shields.io/badge/Trello-F7DF1E?style=for-the-badge&logo=trello&logoColor=purple) was used to help define tasks, schedule, and ownership throughout the different phases of the project.

![Technologies](https://img.shields.io/badge/HTML5-F7DF1E?style=for-the-badge&logo=html5&logoColor=blue)
![Technologies](https://img.shields.io/badge/CSS3-F7DF1E?style=for-the-badge&logo=css3&logoColor=green)
![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/bootstrap-F7DF1E?style=for-the-badge&logo=Bootstrap&logoColor=red)
![Technologies](https://img.shields.io/badge/-JSON-blue)
![Technologies](https://img.shields.io/badge/Heroku-purple)
![Technologies](https://img.shields.io/badge/Bcrypt-green)
![Technologies](https://img.shields.io/badge/Handelbars.js-orange)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/SQL2-orange)
![Technologies](https://img.shields.io/badge/ConnectionSessionSequelize-yellowgreen)
![Technologies](https://img.shields.io/badge/Dotenv-yellow)
![Technologies](https://img.shields.io/badge/Express-green)
![Technologies](https://img.shields.io/badge/Express-handlebars-blueviolet)
![Technologies](https://img.shields.io/badge/Express-Session-orange)
![Technologies](https://img.shields.io/badge/Sequalize-blue)
![Technologies](https://img.shields.io/badge/GoogleMaps-API-blue)
![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-express-green?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-mongoose-purple?style=flat-square&logo=npm) 
![Technologies](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB) 

## Challenges
- Trim error in reservation and station javascript

    -- reservation.js 

    -- station.js
<!-- <!-- reserve a length of reservation -->
- Adding time duration for reservations 
- Rendering registration 
- Correct station id wasn't showing
- Google map API key - has to appear in html, not in dotenv (apply for restricting api key)


## Successes 

- Connecting Google Maps API to application 
- Connecting the logged in user to their reservations while also displaying station information
- Having various icon types for different plug in and level type chargers registered
- Defining the flow and linkages between the various stages 
- Connecting the station registration 

# Usage

The following screenshots show examples of the interaction and options presented to the user when application is initiated. 

Homepage:

![showing homepage](./public/assets/images/homepage1.png)

Searching:

![showing search function](./public/assets/images/homepageSearch.png)

Below shows the key to the map and what the different icons/numbers represent in the map:

![showing key to the map icons](./public/assets/images/MapKey.png)

In order to make a reservation, click on the "Reserve Station" as seen in image:

![showing reserve station](./public/assets/images/MapSelection.png)


Required Login to make new reservation(s) or register a new charging station: 

![showing login table](./public/assets/images/login1.png)

If no account has been created, a signup option is available on the bottom of the login where the sign up page will appear: 

![showing signup table](./public/assets/images/signup1.png)

Detail Reservation: 

![showing detail reservation](./public/assets/images/reservationselection.png)

Viewing User Reservation(s) "My Reservations": 

![showing reservations for user](./public/assets/images/myreservations2.png)

- To make modification to reservation and remove click on "Cancel Reservation": 

![showing how to cancel reservation](./public/assets/images/ModifyReservation.png)

- If no reservations have been made by the user the following will appear: 

![showing no reservations view](./public/assets/images/noreservations.png)


Viewing User Charging Stations "My Charging Stations": 

![showing charging stations owned by user](./public/assets/images/mychargingstations.png)

Registering a new charging station: 

![showing how to register a charging station](./public/assets/images/registerstation.png)

Logout: 

![showing where logout is located](./public/assets/images/Logout.png)

# Goals for Future Development

## Short Term Goals 
- Ability to delete prior reservations
- Start and finish time reservation 
- Reservation Counts
- Owner view of reservations
- Map key 
- Send a "forgot password email"
- Send a "forgot username email"

## Long Term Goals
- Station Reviews
- Send welcome email to user
- Ability to chat with owner
- Calendar view for station 
- Filter options such as price, charger types, etc. 



# Support
If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/-Project-2-EV-Charge-N-Go/issues) or contact us via email at evchargengo.p2@gmail.com. 

# Deployed Site

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://ev-charge-n-go.herokuapp.com/)

You can find more of our work on our GitHub, [hannybear88](https://github.com/hannybear88/), [heidiwu3388](https://github.com/heidiwu3388), [TrianaD](https://github.com/TrianaD), [fmaldmed](https://github.com/fmaldmed).


# Tasks and Roles

Hannah Chung: 
    
    Focus: Login, Logout, Signup,myReservations
    Support: Reservation, README, Presentation, Trello

Triana Deguzman: 
    
    Focus: Reservations, Reservation Seeds
    Support: README, Presentation, Trello Coordination

Fernando Maldonado: 
    
    Focus: Stations new and myStations 
    Support: Geo coordinates 

Heidi Wu: 
    
    Focus: Homepage, Google Maps, User and Station Seeds
    Support: myStations, and across all files

Team Collaboration:
    
    db, models, team pseudo coding, reviewing, presentation runs

# Credits and Contributors 

- Hannah Chung
- Triana Deguzman
- Fernando Maldonado
- Heidi Wu
