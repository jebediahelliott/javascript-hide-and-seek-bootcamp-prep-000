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
  const lists = document.getElementsByClassName('.ranked-list');
  for(let i = 0; i < lists.length; i++)
  {
    parseInt(lists[i].innerHTML);
    lists[i].innerHTML = lists[i] + n;
  }
}