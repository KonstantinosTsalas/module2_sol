(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy=this;
		toBuy.items=ShoppingListCheckOffService.getItems();

		toBuy.boughtItems = function(index){
			ShoppingListCheckOffService.buyItem(index);
		}
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alBought= this;
		alBought.items=ShoppingListCheckOffService.getBoughtItems();
	}




	function ShoppingListCheckOffService(){
		var service=this;

		var toBuyList =[{
			name:'potatoes',
			quantity: 5
		},{
			name:'cookies',
			quantity: 10
		},{
			name:'tomatoes',
			quantity: 6
		},{
			name:'bananas',
			quantity: 3
		},{
			name:'apples',
			quantity:5
		}
		];

		var alBought=[];
		service.buyItem=function(index){
			var item= toBuyList[index];
			alBought.push(item);
			toBuyList.splice(index,1);
		}

		service.getItems=function(){
			return toBuyList;
		};

		service.getBoughtItems=function(){
			return alBought;
		};

	}
})();