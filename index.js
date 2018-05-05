function getFirstSelector(selector)
{
  return document.querySelector(selector);
}
function nestedTarget()
{
  var id = document.getElementById('nested')
  return id.querySelector('.target');
}
function deepestChild()