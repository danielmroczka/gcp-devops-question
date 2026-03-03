(function() {
    const lastVisited = localStorage.getItem('gcp_devops_exam_last_visited');
    const defaultPage = 'question_001.html';
    window.location.href = lastVisited ? lastVisited : defaultPage;
})();