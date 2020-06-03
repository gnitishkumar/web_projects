function perform(e)
{ 
    document.getElementsByClassName('tb')[0].value +=e;
}
function res()
{
    document.getElementsByClassName('tb')[0].value=eval(document.getElementsByClassName('tb')[0].value);
}
function clr()
{
    document.getElementsByClassName('tb')[0].value="";
}