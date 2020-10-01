# Table of Contents

- [Table of Contents](#table-of-contents)
	- [Info](#info)
	- [PWA](#pwa)
	- [Usage](#usage)
	- [Directory](#directory)
	- [Setup](#setup)
	- [PS](#ps)

## Info

This is a simple react application to create a TimeTable based only on your choice of subjects.

## PWA

This is a Progressive Web App(PWA) i.e. a user can install it as a native app on their operating system irrespective of its platform (Smartphone or PC). To Achieve this just open this app in Chrome browser(preferably) for atleast 30 sec, for PC you will see an install button on address bar and for smartphone you will see a small banner in bottom saying "Add to Home Screen", just click on it and the app will be installed on your system.

## Usage

1. Visit [itissandeep98.github.io/TimeTableManager/](https://itissandeep98.github.io/TimeTableManager/)

2. Wait until the application downloads all the timetable and schedule data from server, only then you will be able to see the dropdown list filled with subjects.

3. Search and choose your subjects from the list and the timetable will get updated accordingly. Once you have finalized the courses you can also download the time table using the download button.

4. It also shows you the clashes you might have between two courses which is really helpful while choosing electives.

5. Currently the Time Table Manager is limited to the courses offered at IIITD but can be extended for creating personal time table for students other than IIITD.

## Directory

	/
	 |--public/
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

## PS

I am open to suggestion. Feel free to create an `issue` or open a `PR`
