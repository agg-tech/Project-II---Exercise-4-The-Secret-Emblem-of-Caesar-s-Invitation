const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;


//Step 1

let locationStart = '';

if (emblemClue1 === 'Eagle')
{
  locationStart = 'Forum';
}
else if (emblemClue1 === 'Lion')
{
  locationStart = 'Colosseum';
}
else
{
  locationStart = 'Villa';
}

//Step 2
//Use boolean logic to decipher the second clue.
//- If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
//- If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

if (emblemClue2 === "Laurel" && locationStart === "Forum")
    {
      locationStart += " of Augustus";
    }
    else if (emblemClue2 === "Grapes" || locationStart === "Villa")
    {
      locationStart += " of Pompey";
    }

  //Step 3
  switch (emblemClue3)
  {
    case 7:
      locationStart += " North";
      break;
    case 3:
      locationStart += " South";
      break;
    case 9:
      locationStart += " East";
      break;
    case 4:
      locationStart += " West";
      break;
  }

  //Question
  //Double equals (==) will check of two operands or values are the same, without checking value type.
  //Triple equals (===) will check of values are the same and of the same type. Choosing one or the other will cause unexpected outputs
  //and the code will not work as designed.
    