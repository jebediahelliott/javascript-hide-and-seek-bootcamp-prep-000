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
  let finder = document.getElementById('grand-node');
  var element = [];
  for(let i = 0; i < finder.length; i++)
  {
    while(finder)
    {
      if(finder.querySelector('div') === undefined)
      return finder[i];
    }
  }
}