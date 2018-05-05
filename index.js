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
  const lists = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < lists.length; i++)
  {
    parseInt(lists[i].innerHTML);
    lists[i].innerHTML = lists[i] + n;
  }
}
function deepestChild()
{
  const finder = getElementById('grand-node').querySelectorAll('div');
  for(let i = 0; i < finder.length; i++)
  {
    if(finder[i].querySelector('div') === undefined)
    {
      return finder[i];
    }
  }
}