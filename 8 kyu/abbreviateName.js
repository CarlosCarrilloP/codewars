/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

//My solution

function abbrevName(name){
  
    const [firstName, lastName] = name.split(" ");
    
      // Coge el primer caracter y lo pasa a Mayusculas
      const firstInitial = firstName.charAt(0).toUpperCase();
      
      const lastInitial = lastName.charAt(0).toUpperCase();
      
        
      
      return firstInitial + "." + lastInitial ;
    
    }