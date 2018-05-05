function getFirstSelector(selector)
{
  return document.querySelector(selector);
}
function nestedTarget()
{
  var id = document.getElementById('nested');
  return id.querySelector('.target');
}
function increaseRankBy(n)
{
  var lists = document.getElementsByClassName('.ranked-list');
  for(let i = 0; i < lists.length; i++)
  {
    lists[i] = lists[i] + n;
  }
}