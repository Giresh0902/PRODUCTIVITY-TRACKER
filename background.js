let activeTab = "";
let startTime = 0;

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        if (tab.url) {
            trackTime(tab.url);
        }
    });
});

function trackTime(url) {
    if (activeTab) {
        const duration = Date.now() - startTime;
        saveTimeData(activeTab, duration);
    }
    activeTab = new URL(url).hostname;
    startTime = Date.now();
}

function saveTimeData(site, duration) {
    console.log("Sending Data:", site, duration);  // Debugging
    fetch("http://localhost:5000/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site, duration })
    }).then(res => res.json())
    .then(data => console.log("Response:", data))
    .catch(err => console.error("Error:", err));
}

