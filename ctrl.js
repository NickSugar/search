angular.module('App').controller('tripCtrl', function($scope){

$scope.position="FA";
$scope.bonusMin=0;
$scope.bonusMax=200;
$scope.base="SEA";

    $scope.search = function() {
        $scope.results = trips.filter(function(trip) {

            if (trip.base===$scope.base) {
                if (trip.position===$scope.position) {
                	if ((trip.bonus>=$scope.bonusMin)&&(trip.bonus<=$scope.bonusMax))  {                                     
                    	return true; 
                        } else {return;}
                } else {return;}
            } else {return;}
        })
        $scope.position="FA";
        $scope.bonusMin=0;
        $scope.bonusMax=200;
        $scope.base="SEA";
    }
	
	var trips = [
        {
            base: 'SEA',//SEA, ANC, PDX, LAX and SAN
            dates: '01Jul16 - 02Jul16',
            tripType: 'FA',//FA(Trips) ER(24 hour reserve) AM(0001-1400 reserve) PM(1000-2359 reserve)
            reportTime:'2215',//Military time 0000-2359
            releaseTime:'0409',
            destination: 'GEG',//See alaskaDestination.txt for all destination codes
            layoverLength:'1829',//First two numbers are the hours and the second two are minutes
            position:'FA',//FA, FB, FC, FD, FE and FF
            tfp:'12.4',//Paid hours
            bonus: 100,//$$$
            days:'2',
            postedBy:'',
            comment:''
        },
        {
            base: 'SEA',
            dates: '07Jul16 - 11Jul16',
            tripType: 'PM FA',
            reportTime:'1800',
            releaseTime:'1800',
            destination: 'KOA/PDX/ATL',
            layoverLength:'18/9/1150',
            position:'FB',
            tfp:'4.6',
            bonus:100,
            days:'2',
            postedBy:'RioJane',
            comment:'Come alone or the deal is off!!!'
        },
        {
            base: 'SEA',
            dates: '16Jul16 - 17Jul16',
            tripType: 'FA',
            reportTime:'1400',
            releaseTime:'2100',
            destination: 'ATL',
            layoverLength:'9',
            position:'FA',
            tfp:'8.5',
            bonus:0,
            days:'2',
            postedBy:'Jon',
            comment:'Hot lanta!'
        },
        {
            base: 'ANC',
            dates: '18Jul16 - 20Jul16',
            tripType: 'FA',
            reportTime:'0800',
            releaseTime:'1700',
            destination: 'KOA/PDX',
            layoverLength:'18/10',
            position:'FC',
            tfp:'14',
            bonus:150,
            days:'3',
            postedBy:'Rob',
            comment:'burrr'
        },
        {
            base: 'SAN',
            dates: '22Jul16',
            tripType: 'FA',
            reportTime:'1200',
            releaseTime:'1900',
            destination: 'SEA',
            layoverLength:'0',
            position:'FB',
            tfp:'5.0',
            bonus:0,
            days:'1',
            postedBy:'Hari',
            comment:'Cali'
        },
        {
            base: 'LAX',
            dates: '23Jul16',
            tripType: 'PM',
            reportTime:'1000',
            releaseTime:'2359',
            destination: '',
            layoverLength:'',
            position:'',
            tfp:'5',
            bonus:50,
            days:'1',
            postedBy:'Rio',
            comment:'Lame'
        },
        {
            base: 'PDX',
            dates: '24Jul16',
            tripType: 'ER',
            reportTime:'0001',
            releaseTime:'2359',
            destination: '',
            layoverLength:'',
            position:'',
            tfp:'5',
            bonus:0,
            days:'1',
            postedBy:'Gary',
            comment:'Noooooooo'
        },
        {
            base: 'SEA',
            dates: '25Jul16',
            tripType: 'AM',
            reportTime:'0001',
            releaseTime:'1400',
            destination: '',
            layoverLength:'',
            position:'',
            tfp:'5',
            bonus:75,
            days:'1',
            postedBy:'Bob',
            comment:''
        },
        {
            base: 'ANC',
            dates: '23Jul16 - 26Jul16',
            tripType: 'FA',
            reportTime:'0500',
            releaseTime:'2000',
            destination: 'SJC/OGG/LAX',
            layoverLength:'10/24/9',
            position:'FD',
            tfp:'',
            bonus:150,
            days:'4',
            postedBy:'Jay',
            comment:'Looooong'
        },
        {
            base: 'SEA',
            dates: '29Jul16',
            tripType: 'FA',
            reportTime:'1600',
            releaseTime:'0200',
            destination: 'SFO',
            layoverLength:'0',
            position:'FC',
            tfp:'5.5',
            bonus:200,
            days:'1',
            postedBy:'Kim',
            comment:'Day trip'
        },
        {
            base: 'SEA',
            dates: '30Jul16',
            tripType: 'ER',
            reportTime:'0001',
            releaseTime:'2359',
            destination: '',
            layoverLength:'',
            position:'',
            tfp:'5',
            bonus:20,
            days:'1',
            postedBy:'Timmy',
            comment:'Good times'
        }
    ]; 
});