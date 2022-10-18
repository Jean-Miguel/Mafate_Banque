document.getElementById('bouton-deposer').addEventListener('click', function () {

  const depotInput = document.getElementById('deposit-input');
  const NouveaumontantdeposerText = depotInput.value;
  const nouveaudepot = parseFloat(NouveaumontantdeposerText);

  const DepotTotal = document.getElementById('Depot-Total');
  const PrecedentdepotText = DepotTotal.innerText;
  const montantprecedentdepot = parseFloat(PrecedentdepotText);
  const newDepotTotal = montantprecedentdepot + nouveaudepot;

  DepotTotal.innerText = newDepotTotal;

  const SoldeTotal = document.getElementById('Solde-Total');
  const SoldeTotalText = SoldeTotal.innerText;
  const soldeprecedent = parseFloat(SoldeTotalText);
  const newSoldeTotal = soldeprecedent + nouveaudepot;
  SoldeTotal.innerText = newSoldeTotal;

  depotInput.value = '';
});

document.getElementById('bouton-retirer').addEventListener('click', function () {
  const retirerInput = document.getElementById('retirer-input');
  const montantretirertext = retirerInput.value;
  const nouveaumontantretirer = parseFloat(montantretirertext);
  console.log(nouveaumontantretirer);

  const retraittotal = document.getElementById('withdraw-total');
  const precedentretraittext = retraittotal.innerText;
  const precedentretraittotal = parseFloat(precedentretraittext);

  const newretraittotal = precedentretraittotal + nouveaumontantretirer;
  retraittotal.innerText = newretraittotal;

  const SoldeTotal = document.getElementById('Solde-Total');
  const precedentsoldetext = SoldeTotal.innerText;
  const soldeprecedent = parseFloat(precedentsoldetext);
  const newSoldeTotal = soldeprecedent - nouveaumontantretirer;

  SoldeTotal.innerText = newSoldeTotal;

  retirerInput.value = '';
})
