console.log("Extension Loaded. Go");

async function lk()
{
    let tags = document.querySelectorAll('#video-title');


    for (let i = 0; i < tags.length; i++)
    {
        let count = i + 1;
        tags[i].innerText = tags[i].innerText.replace('--Video Num: ' + count, '');
        tags[i].innerText += '--Video Num: ' + count;
    }
}

setInterval(lk, 1000);