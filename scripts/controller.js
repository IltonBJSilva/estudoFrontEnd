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
        { name: 'Ivanilde', country: 'Norway', sobrenome: 'Pereira', email: 'Ivanilde@gmail.com'},
        { name: 'Jotaro', country: 'Sweden', sobrenome: 'Bright', email: 'Jotaro@gmail.com'},
        { name: 'Vanessa', country: 'England', sobrenome: 'Marcela', email: 'Vanessa@gmail.com'},
        { name: 'John', country: 'Norway', sobrenome: 'Wick', email: 'John@gmail.com'},
        { name: 'Joe', country: 'Denmark', sobrenome: 'Newgate', email: 'Joe@gmail.com'},
        { name: 'Gustav', country: 'Sweden', sobrenome: 'Lic', email: 'Gustav@gmail.com'},
        { name: 'Birgit', country: 'Denmark', sobrenome: 'Vern', email: 'Birgit@gmail.com'},
        { name: 'Mary', country: 'England', sobrenome: 'Jacob', email: 'Mary@gmail.com'},
        { name: 'Kai', country: 'Norway', sobrenome: 'Tai', email: 'Kai@gmail.com' },


        { name: 'Luis', country: 'Bahia', sobrenome: 'Paulo', email: 'Luis@gmail.com' },
        { name: 'Haki', country: 'Ultima ilha', sobrenome: 'Rei', email: 'Haki@gmail.com' },
        { name: 'Theodoro', country: 'Montanha Celeste', sobrenome: 'Elias', email: 'Elian@gmail.com' },
        { name: 'Elian', country: 'São José do rio preto', sobrenome: 'Morais', email: 'Elian@gmail.com' },
        { name: 'Ilton', country: 'Sante Helena de Goias', sobrenome: 'Batista', email: 'Ilton@gmail.com' },
        { name: 'Joao', country: 'Rio de Janeiro', sobrenome: 'Victor', email: 'Joao@gmail.com' },
        { name: 'Fabio', country: 'Araguari', sobrenome: 'Peres', email: 'Fabio@gmail.com' },
        { name: 'Francisco', country: 'Porto de galinhas', sobrenome: 'Lopes', email: 'Francisco@gmail.com' },

    ];

    $scope.myVar;
  
    $scope.alertSucess = function () {
        
        document.getElementById("sucesso").style.visibility = "visible"
    };

    $scope.TimeAlertSucess = function () {

        $scope.myVar = setInterval(alertSucess, 3000);
    };

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