
function findRoutes(routes) {
  let arr = routes[0];
  while(routes.length >= arr.length){
    for(let i=0; i<routes.length; i++){
      if(routes[i][0]===arr[arr.length-1]){
        arr.push(routes[i][1]);
      }
      else if(routes[i][1]===arr[0]){
        arr.unshift(routes[i][0]);
      }
    }
  }
  return arr.join(', ');
}