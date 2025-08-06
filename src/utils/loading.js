const loading = () => {
    // Wait for DOM content to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Simulate loading (remove this setTimeout in production)
        setTimeout(function () {
            document.getElementById("loadingScreen").style.opacity = "0";
            document.body.style.opacity = "1";

            // Remove loading screen after transition completes
            setTimeout(function () {
                document.getElementById("loadingScreen").remove();
            }, 500);
        }, 500); // Adjust this timeout as needed in production
    });
};

export default loading;