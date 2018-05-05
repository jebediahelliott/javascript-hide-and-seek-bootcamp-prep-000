function getFirstSelector(selector)
{
  return document.querySelector(selector);
}
function nestedTarget()
{
  var id = document.getElementById('nested')
  return id.querySelector('.target');
}
function increaseRankBy(n)
{
  var lists = document.getElementsByClass('.ranked-')
}