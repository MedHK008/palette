function tracer()
    {
        var col=document.querySelector('#col').value;
        var lig=document.querySelector('#lig').value;
        const table=document.querySelector('#tab');
        let all='';
        let tab = '';
        for( i=0;i<lig;i++)
        {
            tab='<tr>';
            for( j=0;j<col;j++)
            {
                tab=tab+'<td  onmouseover="this.style.backgroundColor=color;" ></td>';
            }
            tab=tab+'</tr>';
            all=all+tab;
        }
        table.innerHTML=all;
    }
    function change()
    {
        color=document.querySelector('#color').value;
    }


