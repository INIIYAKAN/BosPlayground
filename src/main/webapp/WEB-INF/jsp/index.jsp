<html>
    <head>
        <title>Swimming</title>
        <link rel="shortcut icon" href="/swimming/images/favicon.ico"/>

        <!-- Third Party CSS -->
        <link rel="stylesheet" href="/swimming/bower_components/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="/swimming/bower_components/bootstrap/dist/css/bootstrap.min.css">
    </head>
    <body ng-app="swimmingApp">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" ui-sref="home"><img alt="Brand" src="/swimming/images/swim-icon-32px.png"></a>
                    <a class="navbar-brand" ui-sref="home">Swimming</a>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <div ui-view></div>
        </div>

        <hr>
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-pills nav-justified">
                    <li><a href="/"><i class="fa fa-copyright"></i> 2015 boss inc.</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
            </div>
        </div>
        <!-- Third Party JavaScript -->
        <script src="/swimming/bower_components/angular/angular.min.js"></script>
        <script src="/swimming/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="/swimming/bower_components/ui-router-extras/release/ct-ui-router-extras.min.js"></script>

        <!-- Application JavaScript -->
        <script src="/swimming/app/home/homeCtrl.js"></script>
        <script src="/swimming/app/routes.js"></script>
        <script src="/swimming/app/app.js"></script>

        <!-- Swimming Page -->
        <script src="/swimming/app/swimming/swimmingCtrl.js"></script>
        <script src="/swimming/app/swimming/swim.js"></script>
    </body>
</html>