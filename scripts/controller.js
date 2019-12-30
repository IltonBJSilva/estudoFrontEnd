app.controller('controller', function ($scope, $location, $http, $timeout, $interval) {
    //Mostra o endereço que esta o arquivo printando ele no index {{meuEndereco}}
    $scope.meuEndereco = $location.absUrl();
    
    $scope.lugar = [
                     { 'cidade': 'Brasil', 'Quantidade': 9 },
                     { 'cidade': 'Pernambuco', 'Quantidade': 11 },
                     { 'cidade': 'Sante Helena', 'Quantidade': 11 },
                     { 'cidade': 'Nova York', 'Quantidade': 14},
                     { 'cidade': 'California', 'Quantidade': 10 },
                     { 'cidade': 'cazaquistão', 'Quantidade': 12 }
                    ];


    $scope.nomes = [
        'Ivanilde',
        'Jotaro',
        'Carlos',
        'Vanessa',
        'John'
    ];

    $scope.idades = [
        '20',
        '30',
        '40',
        '50'
    ];

    $scope.emails = [
        'Ivanilde@gmail.com',
        'Jotaro@gmail.com',
        'Carlos@gmail.com',
        'Vanessa@gmail.com'
    ];
    


    $scope.mensagem = "Opa iae pessoal";
    $timeout(function () {
        $scope.mensagem = "Fui galera"; 
    }, 2000);



    $scope.horas = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 100)

    $scope.data = new Date().toLocaleDateString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleDateString();
    }, 100)
});