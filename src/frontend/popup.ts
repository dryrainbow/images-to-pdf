// Initialize button with user's preferred color
function init() {
    const changeColor = document.getElementById('changeColor');
    if (!changeColor) return;
    chrome.storage.sync.get('color', ({ color }: {color: string}) => {
        changeColor.style.backgroundColor = color;
    });
    void changeColor.addEventListener('click', async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        console.log('test 1234')
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
        });
    });

}

function setPageBackgroundColor() {
    chrome.storage.sync.get('color', ({ color }:  {color: string}) => {
        document.body.style.backgroundColor = color;
    });
    console.log('foo');
}


init()