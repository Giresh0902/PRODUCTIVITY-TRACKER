document.addEventListener("DOMContentLoaded", async () => {
    try {
        console.log("Fetching data..."); // Debugging Step 1
        let response = await fetch("http://localhost:5000/api/report");
        let data = await response.json();
        
        console.log("Fetched Data:", data); // Debugging Step 2

        if (data.length === 0) {
            document.getElementById("report").innerText = "No data found.";
            return;
        }

        let reportHtml = "<ul>";
        data.forEach(entry => {
            reportHtml += `<li>${entry.site} - ${entry.duration} sec</li>`;
        });
        reportHtml += "</ul>";

        document.getElementById("report").innerHTML = reportHtml;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("report").innerText = "Error loading data.";
    }
});
