const numIslands=(arr)=>{
let total_island=0;
const dfs=(i,j)=>{
    if(i>=0 && j>=0 && i<matrix.length && j<matrix[i].length && matrix[i][j]==1){
        matrix[i][j]=0;
        dfs(i+1,j);
        dfs(i,j+1);
        dfs(i-1,j);
        dfs(i,j-1);
    }
};
for(let i=0;i<matrix.length;i++){
   for(let j=0;j<matrix[i].length;j++){
       if(matrix[i][j]==1){
           total_island+=1;
           dfs(i,j);
       }
   } 
}
return total_island;
}
let matrix=[
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
    ];
console.log(numIslands(matrix));