const body = document.querySelector('body');
const container = document.querySelector('#container');

for (let i=0; i<16; i++)
{
    let row = document.createElement('div');
    row.classList.toggle('grid');
    for(let j=0; j<16; j++)
    {
        let col = document.createElement('div');
        col.classList.toggle('grid');
        row.appendChild(col);
    }
    container.appendChild(row);
}

