#run app
ng serve
# add component
ng g c COMPONENT_NAME
# show component in html
<app-home></app-home>
<div class="col" *ngFor="let prod of   products"></div>


====JSON SERVER SETUP
//intial setup
npm install -g json-server

// root to below file location run cmd
json-server --watch mock-data-sample.json
or 
json-server --watch mock-data-sample.json --port 4000

//for POST request id parameter is must