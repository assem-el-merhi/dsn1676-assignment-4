/*A container that holds many variables {}*/
var Blue = {
    Fruit: 'Blueberries',
    plant: 'Vaccinium corymbosum',
    growsOnSrub: 'Yes',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var Grape = {
    Fruit: 'Grapes',
    plant: 'Vitis vinifera',
    growsOnSrub: 'No',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var Red = {
    Fruit: 'Red currant',
    plant: 'Ribes rubrum',
    growsOnSrub: 'No',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var berries2 = [Blue, Grape, Red];

// console.log( dinos2[1].age );

berries2.forEach(function (item) {
  document.write('<dl>'); 
    
  document.write('<dt>Fruit:</dt>')
  document.write('<dd>' + item.Fruit + '</dd>');
  
  document.write('<dt>Plant:</dt>')
  document.write('<dd>' + item.plant + '</dd>');
    
  document.write('<dt>GrowsOnSrub:</dt>')
  document.write('<dd>' + item.growsOnSrub + '</dd>');
    
  document.write('<dt>Energy:</dt>')
  document.write('<dd>' + item.energy + '</dd>');
    
  document.write('<dt>Carbohydrates:</dt>')
  document.write('<dd>' + item.carbohydrates + '</dd>');
    
  document.write('<dt>Protein:</dt>')
  document.write('<dd>' + item.protein + '</dd>');
  
  document.write('</dl>');
});

writeberries2( [Blue, Grape] );
writeberries2( [Grape, Red] );
writeberries2( [Red, Blue] );


