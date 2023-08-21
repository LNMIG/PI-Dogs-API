# INDIVIDUAL PROJECT - done at soyHenry's Bootcamp - Dogs Application


## This is the Landing Page
![2022-06-07](https://user-images.githubusercontent.com/96741070/172371275-2acaebe6-864c-4e2b-aadc-6d6ccf7eea02.png)

## Here you are in the Home
![2022-06-06 (5)](https://user-images.githubusercontent.com/96741070/172275241-434ff75b-91b8-488c-8887-1b45ed35a4dc.png)

## You are viewing Details of a particular breed
![2022-06-07 (1)](https://user-images.githubusercontent.com/96741070/172371531-c13e85ab-a1fa-4503-a463-9f0b4c319db1.png)

## You can also add a new Breed
![2022-06-07 (2)](https://user-images.githubusercontent.com/96741070/172371734-bbd800e2-a44c-4d7a-b48e-55650423e9a7.png)



## Website's link
* Once you click in the link you should wait 5 seconds until the data is loaded. Then you can try this app as you wish.
* Should you have any inconvenience, please let me know.
* [Link to site](https://my-pi-dogs.vercel.app/)

## Project's Goals
- Build an App using **React, Redux, Node and Sequelize - PostgreSQL**.
- Use and practice all concepts learned in the soyHENRY's Bootcamp.
- Learn better **coding practices**.
- Learn and practice **GIT's workflow**.
- Use and practice **testing** on the app.

## Statement
The main idea was to create an application which would allow the user to:
- see different breeds
- see relevant information of each breed: picture, name, temperaments, weight, height, life span.

It is used an external API [the dog api](https://thedogapi.com/) from which we can do:
- Find breeds
- Filter / Sort
- Add new breeds

__IMPORTANT__: When Sorting or Filtering NO external API's endpoints were used. All the code is in the Frontend or in the Backend.

## Endpoints used
Just these two endpoints where used. The functionality is based on app's code
- GET https://api.thedogapi.com/v1/breeds
- GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

## Technologies used:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - PostgreSQL

## In the Frontend
An app was developed using **React / Redux**. It contains the following routes/pages.

__Initial Page__: landing page which contains
- [ ] Background image about dogs
- [ ] Start button that leads to Home (`Main route`)

__Main Route__: includes
- [ ] Input for searching any breed by entering a name or part of it
- [ ] An area where it is shown the breeds found. You can see:
  - Image
  - Name
  - Temperaments
  - Weight
- [ ] Filter Options:
    - By Temperament 
    - By existing Breed (information comes from external API) or added Breed (created by using a form)
- [ ] Sort Options, so you can sort by:
    - Alphabetical order 
    - Increasing or Decreasing weight
- [ ] Pagination.

__Route for detailing a particular breed__: includes
- [ ] Image, name and temperament
- [ ] Height
- [ ] Weight
- [ ] Life span

__Route for creating a new breed__: includes
- [ ] Controlled Form by JS which requires:
  - Name
  - Height
  - Weight
  - Life span
- [ ] Selection of one or more temperaments
- [ ] Creation Button
 
## Backend

A server was developed based in **Node / Express** including the following routes:

- [ ] __GET /dogs__:
  - Brings back the list of all breeds
- [ ] __GET /dogs?name="..."__:
  - Brings back a short list that includes the breeds that match with the name required by the user
  - If no breed exists a message is shown
- [ ] __GET /dogs/{idBreed}__:
  - Brings back details of a particular breed
- [ ] __GET /temperament__:
  - Brings back all temperaments available
- [ ] __POST /dog__:
  - Create a new breed based on the data colected from the Form
 
## How it works
* Clone this repository,
* Run **npm install** while you are in folder Api and Client,
* Run **npm start** in both folders Api and Client,
* Open http://localhost:3000 in your browser
