# Table of Contents

- [Table of Contents](#table-of-contents)
	- [Info](#info)
	- [PWA](#pwa)
	- [Directory](#directory)
	- [Setup](#setup)
	- [Usage](#usage)
	- [PS](#ps)

## Info

This is a simple react application to create a TimeTable based only on your choice of subjects.

## PWA

This is a Progressive Web App(PWA) i.e a user can install it as a native app on their operating system irrespective of its platform (Smartphone or PC). To Achieve this just open this app in Chrome browser(preferably) for atmost 30 sec, for PC you will see an install button on address bar and for smartphone you will see a small banner in bottom saying "Add to Home Screen", just click on it and the app will be installed on your system

## Directory

	/
	 |--public/
		|---> timetable.pdf         // Pdf shown on Main page
		|--- images/                // All the images used

	 |--src/
		|--- Components/
			|---> Routing.js     // Contains all the routing info
			|---> Main.js        // Holds the Main view of '/' Route
			|--- TimeTable/
				|--> Plot.js // Plots the table
			|--- Admin/          // In progress
		|--- shared/                 // Contains urls and initial state of the app
		|--- store/                  // Contains redux store related code

## Setup

1. Clone this repo locally on your system using button on top right or by running `git clone https://github.com/itissandeep98/TimeTableManager.git` on your terminal

2. Get inside the directory and run `yarn` to install all the required dependicies

3. Once all the packages are installed run `yarn start` to start the development server.'

4. Run `yarn json-server` or equivalently run `json-server --watch db.json -d 2000 -p 3001` to start local JSON server

## Usage

1. Visit [here](https://itissandeep98.github.io/TimeTableManager/)

2. Wait until the application downloads all the timetable and schedule data from server, only then you will be able to see the dropdown list filled with subjects

3. Search and choose your subjects from the list and the timetable will get updated accordingly

## PS

I am open to suggestion. Feel free to create an `issue` or open a `PR`
