# hyhproj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Merging branches and pushing to GitHub

On your working branch:
1. `git add .`
2. `git commit -m [comment]`
3. `git push origin [branch-name]`

Switch to master branch with git checkout master:
1. `git pull [remote] [branch-name]`
2. resolve all the conflicts
3. `git add .`
4. `git commit -m "Comments"`
5. `git push origin master`

## Quickstart for Deploying to Heroku

Heroku CLI Method (preferred): 
1. `heroku login`
2. `git add .`
3. `git commit -m "message"`
4. `git push heroku master`
5. Previous step only pushes to Heroku to be deployed. Make sure to `git push origin <branch>` your changes as well. 

GitHub Method:
1. Git push all your new changes to whatever branch you want to deploy.
2. Go to the Heroku website and then go to the 'Deploy' tab for the haveyouheardproj project. 
3. Connect to Github.
4. Scroll down to 'Manual Deploy' and select the branch you want to deploy. 
5. Deploy branch.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
