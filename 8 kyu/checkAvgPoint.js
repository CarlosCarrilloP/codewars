
/* DESCRIPTION:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
 */ 
//My solution
function betterThanAverage(classPoints, yourPoints) {
  
    const totalPoints = classPoints.reduce((acc, curr) => acc + curr, 0);
    
    const totalStudents = classPoints.length + 1; // Añadimos 1 para incluir tu puntuación.
    
    const avg = (totalPoints + yourPoints) / totalStudents;
  
    //Compara tu puntuación con el promedio y devuelve el resultado.
    return yourPoints > avg;
  }