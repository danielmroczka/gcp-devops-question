(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('ignore_last')) {
        return; // Stay on index.html
    }
    const lastVisited = localStorage.getItem('gcp_devops_exam_last_visited');
    const defaultPage = 'q_001.html';
    if (lastVisited && lastVisited !== 'index.html') {
        window.location.href = lastVisited;
    } else {
        // If we're already on index.html and no lastVisited, 
        // we might want to go to q_001.html by default, 
        // but let's only redirect if we're at the root index.
        if (!urlParams.has('ignore_last')) {
             window.location.href = defaultPage;
        }
    }
})();