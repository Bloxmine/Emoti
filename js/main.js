const emoticonData = [
    {
        name: ' Hyves Emoticons',
        iconUrl: '../icons/hyves.png', // Path to the PNG icon
        emoticons: [
            { id: '16', code: ':tramp:', url: '../emoticons/hyves/tramp.gif' },
            { id: '17', code: ':talktothehand:', url: '../emoticons/hyves/talktothehand.gif' },
            { id: '18', code: ':wk2010:', url: '../emoticons/hyves/wk2010.gif' },
            { id: '19', code: ':custom4:', url: 'https://via.placeholder.com/32x32.gif?text=Custom4' },
            { id: '20', code: ':custom5:', url: 'https://via.placeholder.com/32x32.gif?text=Custom5' },
        ],
    },
    {
        name: ' MSN Emoticons',
        iconUrl: '../icons/msn.png', // Path to the PNG icon
        emoticons: [
            { id: '1', code: ':)', url: 'https://via.placeholder.com/32x32.gif?text=MSN1', alias: ['happy'] },
            { id: '2', code: ':(', url: 'https://via.placeholder.com/32x32.gif?text=MSN2', alias: ['sad'] },
            { id: '3', code: ':D', url: 'https://via.placeholder.com/32x32.gif?text=MSN3', alias: ['bigsmile', 'grin'] },
            { id: '4', code: ';)', url: 'https://via.placeholder.com/32x32.gif?text=MSN4', alias: ['wink'] },
            { id: '5', code: '(h)', url: 'https://via.placeholder.com/32x32.gif?text=MSN5', alias: ['heart'] },
        ],
    },
    {
        name: ' Yahoo Emoticons',
        iconUrl: '../icons/yahoo.png', // Path to the PNG icon
        emoticons: [
            { id: '6', code: ':-)', url: 'https://via.placeholder.com/32x32.gif?text=Yahoo1', alias: ['smile'] },
            { id: '7', code: ':-(', url: 'https://via.placeholder.com/32x32.gif?text=Yahoo2', alias: ['frown'] },
            { id: '8', code: ':>', url: 'https://via.placeholder.com/32x32.gif?text=Yahoo3' },
            { id: '9', code: ';-)', url: 'https://via.placeholder.com/32x32.gif?text=Yahoo4' },
            { id: '10', code: ':x', url: 'https://via.placeholder.com/32x32.gif?text=Yahoo5' },
        ],
    },
    {
        name: ' phpBB Emoticons',
        iconUrl: '../icons/phpbb.png', // Path to the PNG icon
        emoticons: [
            { id: '11', code: ':mrgreen:', url: 'https://via.placeholder.com/32x32.gif?text=phpBB1' },
            { id: '12', code: ':|', url: 'https://via.placeholder.com/32x32.gif?text=phpBB2' },
            { id: '13', code: ':lol:', url: 'https://via.placeholder.com/32x32.gif?text=phpBB3' },
            { id: '14', code: ':o', url: 'https://via.placeholder.com/32x32.gif?text=phpBB4' },
            { id: '15', code: ':p', url: 'https://via.placeholder.com/32x32.gif?text=phpBB5' },
        ],
    }
];

window.onload = function() {
    const emoticonCategoriesContainer = document.getElementById('emoticon-categories');
    const loadingContainer = document.getElementById('loading-container');
    const errorContainer = document.getElementById('error-container');

    function loadEmoticons() {
        try {
            setTimeout(() => {
                emoticonData.forEach(categoryData => {
                    const categoryContainer = document.createElement('div');
                    categoryContainer.className = 'category-container';

                    const categoryTitle = document.createElement('h2');
                    categoryTitle.className = 'category-title';

                    // Create an <img> element for the icon
                    const categoryIcon = document.createElement('img');
                    categoryIcon.src = categoryData.iconUrl;
                    categoryIcon.alt = `${categoryData.name} Icon`;
                    categoryIcon.className = 'category-icon';

                    // Add the icon and name to the title
                    categoryTitle.appendChild(categoryIcon);
                    categoryTitle.appendChild(document.createTextNode(categoryData.name));

                    const emoticonGrid = document.createElement('div');
                    emoticonGrid.className = 'emoticon-grid';

                    categoryData.emoticons.forEach(emoticon => {
                        const emoticonItem = document.createElement('div');
                        emoticonItem.className = 'emoticon-item';

                        const emoticonImage = document.createElement('img');
                        emoticonImage.className = 'emoticon-image';
                        emoticonImage.src = emoticon.url;
                        emoticonImage.alt = emoticon.code;

                        emoticonImage.addEventListener('click', function() {
                            const codeToCopy = emoticon.code;
                            navigator.clipboard.writeText(codeToCopy).then(() => {
                                const copiedMessage = document.createElement('div');
                                copiedMessage.textContent = 'Copied!';
                                copiedMessage.className = 'copied-message';
                                document.body.appendChild(copiedMessage);
                                setTimeout(() => {
                                    document.body.removeChild(copiedMessage);
                                }, 2000);
                            }).catch(err => {
                                console.error('Failed to copy: ', err);
                                alert('Failed to copy emoticon. Please copy manually.');
                            });
                        });

                        const emoticonCode = document.createElement('p');
                        emoticonCode.className = 'emoticon-code';
                        emoticonCode.textContent = emoticon.code;

                        emoticonItem.appendChild(emoticonImage);
                        emoticonItem.appendChild(emoticonCode);
                        emoticonGrid.appendChild(emoticonItem);
                    });

                    categoryContainer.appendChild(categoryTitle);
                    categoryContainer.appendChild(emoticonGrid);
                    emoticonCategoriesContainer.appendChild(categoryContainer);
                });

                loadingContainer.style.display = 'none';
            }, 500);
        } catch (error) {
            loadingContainer.style.display = 'none';
            errorContainer.textContent = 'Failed to load emoticons: ' + error.message;
            errorContainer.style.display = 'block';
        }
    }
    loadEmoticons();
};
