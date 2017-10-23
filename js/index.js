var barContainer ,input,barValues;;
barContainer= document.getElementById('barContainer');
input = document.getElementById('barPoints');

renderStackedBarChart = () => {
    let flag = true, errorMsg = ''  , barValues = '', isStacked = false;
    barValues = document.getElementById('barPoints').value;
    const barPointsLength = barValues.length - 1;
      if(barValues.charAt(0) == '`' && barValues.charAt(barPointsLength)){
         let  sliceBarValues = barValues.slice(1,barPointsLength);
          barValues = sliceBarValues;
          isStacked = false;
          _buildArrayPoints(barValues,isStacked);
    }else{
     isStacked = true;
      _buildArrayPoints(barValues,isStacked);
 }
}

_buildArrayPoints = (barValues , isStacked) => {
    let arrayPoints = [], flag = true;
    const maxInputsAllowed = 50 ;
    arrayPoints = barValues.split(',').map(function(points) {
        if(!Number(points) || points == ''){
            flag=false;
            return;
        }
      flag=true;
      return Number(points);
    });
   flag && arrayPoints.length < maxInputsAllowed ? (isStacked ?  _buildStackedBar(arrayPoints) : _buildBarChart(arrayPoints)) : alert('Please Enter Valid points');
}



_buildStackedBar = (arrayPoints) => {
    var stackedBar='',clearfix='',sumPoints = 0;
    barContainer.innerHTML = '';
     sumPoints = arrayPoints.reduce(function(a,b){return a+b },0);
        arrayPoints.map(function(points,index){
          stackedBar = '<div class="blocks"></div>';
          barContainer.innerHTML += stackedBar;
          console.log( points );
          document.getElementsByClassName('blocks')[index].style.width = ( points / sumPoints)  + "%" ;
        });
      clearfix = '<div class ="clearfix"></div>'
      barContainer.innerHTML += clearfix;
}

_buildBarChart = (arrayPoints) => {
     var stackedBar='',clearfix='',sumPoints = 0,stacks;
    barContainer.innerHTML = '';
     sumPoints = arrayPoints.reduce(function(a,b){return a+b },0);
        arrayPoints.map(function(points,index){
          stackedBar = '<div class="stacks"></div>';
          barContainer.innerHTML += stackedBar;
          stacks = document.getElementsByClassName('stacks');
          stacks[index].style.width = ( points )  + "%" ;
        });
}

            
    