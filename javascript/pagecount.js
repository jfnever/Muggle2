//localstorage pagecount

if (localStorage.pagecount)
{
    localStorage.pagecount=Number(localStorage.pagecount) +1;
}
else
{
    localStorage.pagecount=1;
}

var countWrite = document.getElementById("count1");

countWrite.innerHTML = localStorage.pagecount;