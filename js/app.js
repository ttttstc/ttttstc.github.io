document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchSubtitlesButton').addEventListener('click', fetchSubtitles);
});

function fetchSubtitles() {
    var videoId = document.getElementById('videoId').value;
    fetch(`http://localhost:5000/get_subtitles?video_id=${encodeURIComponent(videoId)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => updateSubtitlesList(data))
        .catch(error => {
            console.error('Error fetching subtitles:', error);
            document.getElementById('subtitlesList').innerHTML = 'Error: ' + error.message;
        });
}

function updateSubtitlesList(subtitles) {
    const subtitlesListContainer = document.getElementById('subtitlesList');
    subtitlesListContainer.innerHTML = ''; // 清空现有列表

    subtitles.forEach(subtitle => {
        const div = document.createElement('div');
        div.textContent = `${subtitle.language} - ${subtitle.name}`;
        div.onclick = () => showSubtitleContent(videoId, subtitle.language);
        subtitlesListContainer.appendChild(div);
    });
}

function showSubtitleContent(videoId, language) {
    fetch(`http://localhost:5000/get_subtitles_content?video_id=${encodeURIComponent(videoId)}&language=${encodeURIComponent(language)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(content => {
            document.getElementById('subtitlesContent').textContent = content;
        })
        .catch(error => {
            console.error('Error fetching subtitle content:', error);
            document.getElementById('subtitlesContent').textContent = 'Error: Unable to load subtitle content.';
        });
}
