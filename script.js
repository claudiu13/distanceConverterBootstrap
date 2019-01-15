document.getElementById('output').style.visibility = 'hidden';
document.getElementById('mInput').addEventListener('input', function(e){
  document.getElementById('output').style.visibility = 'visible';
  let m = e.target.value;
  document.getElementById('iOutput').innerHTML = m/0.0254;
  document.getElementById('fOutput').innerHTML = m/0.3048;
  document.getElementById('yOutput').innerHTML = m/0.91;
  document.getElementById('mlOutput').innerHTML = m/1610;
  })
