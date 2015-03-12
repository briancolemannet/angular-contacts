#Angular Contacts#

##Getting started (Step 0)##
* Static html page
* Bootstrap CSS
* Project has all of the required libraries

##Register our app’s module with Angular (Step 1)##
* Add script tag for angular.min.js file
* Add a script tag to index.html
  * Add a self-invoking function
  * Register our app’s “contactsApp” module with angular
* Add the ng-app=”contactsApp”  attribute to the HTML element
* Add a “sanity check” to the page and verify that it works

##Our first controller (Step 2)##
* Remove the existing “sanity check”
* Register the contact list controller with our app’s module
  * Add “var vm = this;”
  * Add the init function
* Add the ng-controller attribute to the #MainContent element
  * Controller as syntax
* Add the controller “sanity check” to make sure the controller is working

##Angular view binding syntax (Step 3)##
* Add a contacts array to the controller’s vm
* Add the ng-repeat attribute to the tr in the tbody
* Add the view binding syntax

##The Angular Service (factory) (Step 4)##
* Register the factory with our app’s module
* Add the contacts variable to the service
* Inject the service into the controller

##Make a get call (Step 5)##
* Inject the $http into the service
* Call $http.get to load the contacts.json

##Add route (Step 6)##
* Add script tag for angular-route
* Add dependency to the app’s module ‘ngRoute’
* Create the app folder
* Create the html folder inside the app folder for templates
* Add list.html
* Add create.html
* Register the CreateContactController
* Update the links in the navbar to use #/create and #/list
* Delete the create.html in the root of the directory

##Creating new contacts (Step 7)##
* Update create.html (in the app/html directory)
  * Add ng-submit=”createContact(vm.newContact)” attribute to the form tag
  * Add the ng-model to the inputs (vm.newContact.firstName, lastName & phone)
* Update the CreateContactController
  * Inject the contactsService
  * Add the createContact function to the vm
  * Add the property newContact to the vm
* Update the contactsService
  * Add the function createContact

##Filter contact list (Step 8)##
* Add a div above the div that has the contact list table and put a textbox in it with ng-model=”vm.filter”
* Append “| filter: vm.filter” to the ng-repeat

##Order the contact list (Step 9)##
* Add ng-click=”vm.orderBy(‘id’)” to the th tags
* Add “| orderBy: vm.predicate : vm.reverse” to the ng-repeat of the tr tag
* Add the orderBy function to the ContactListController
* Add cursor:pointer for the table th in the site.css file


