$ (function() {
  $ ('#btn').click(function(){
    // récup les valeurs
    var n1 = $('#n1').val();
    var n2 = $('#n2').val();
    var n3 = $('#n3').val();
    var n4 = $('#n4').val();
    var n5 = $('#n5').val();
    // additionne les valeurs et les divises par 5
    var test = [parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5)] / 5;
    // renvoie le résultat et l'appréciation selon la moyennes
    var result = test;
    // Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : "En dessous de la moyenne".
      if (test <10 ){
        alert("En dessous de la moyenne")
      }
    // Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : "Moyen".
      else if ((test >10) && (test <13)){
        alert("Moyen")
      }
    // Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : "Bien".
      else if ((test >=13) && (test <16)){
        alert("Très bien")
      }
    // Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : "Très bien"
      else if ((test >=16) && (test <=20)){
        alert("Très bien")
      }
    // Si la moyenne de l'élève est égale à 20, il aura comme appréciation : "Excellent".
      else if (test ==20 ){
        alert("Excellent")
      }
  // renvoie l'appréciation et la moyenne
  alert(result)
  })
})
