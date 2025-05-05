const emoticonData = [
    {
        name: ' Hyves Emoticons',
        iconUrl: '../icons/hyves.png', // Path to the PNG icon
        emoticons: [
            { id: '16', code: ':tramp:', url: '../emoticons/hyves/tramp.gif' },
            { id: '17', code: ':talktothehand:', url: '../emoticons/hyves/talktothehand.gif' },
            { id: '18', code: ':wk2010:', url: '../emoticons/hyves/wk2010.gif' },
            { id: '19', code: ':dj:', url: '../emoticons/hyves/dj.gif' },
            { id: '20', code: ':lekkerding:', url: '../emoticons/hyves/lekkerding.gif' },
        ],
    },
    {
        name: ' MSN Emoticons',
        iconUrl: '../icons/msn.png', // Path to the PNG icon
        emoticons: [
            { id: '1', code: ':brb:', url: '../emoticons/msn/brb.gif', alias: ['brb'] },
            { id: '2', code: ':dog:', url: '../emoticons/msn/dog.png', alias: ['dog'] },
            { id: '3', code: ':laugh:', url: '../emoticons/msn/laugh.png', alias: ['laugh'] },
            { id: '4', code: ':wink:', url: '../emoticons/msn/wink.gif', alias: ['wink'] },
            { id: '5', code: ':nerd:', url: '../emoticons/msn/nerd.gif', alias: ['nerd'] },
        ],
    },
    {
        name: ' Yahoo Emoticons',
        iconUrl: '../icons/yahoo.png', // Path to the PNG icon
        emoticons: [
            { id: '6', code: ':alien:', url: '../emoticons/yahoo/alien.gif', alias: ['alien'] },
            { id: '7', code: ':bringit:', url: '../emoticons/yahoo/bringit.gif', alias: ['bringiton'] },
            { id: '8', code: ':loser:', url: '../emoticons/yahoo/loser.gif' },
            { id: '9', code: ':rofl:', url: '../emoticons/yahoo/rofl.gif' },
            { id: '10', code: ':star:', url: '../emoticons/yahoo/star.gif' },
        ],
    },
    {
        name: ' phpBB Emoticons',
        iconUrl: '../icons/phpbb.png', // Path to the PNG icon
        emoticons: [
            { id: '11', code: ':applause:', url: '../emoticons/phpbb/applause.gif', alias: ['applause'] },
            { id: '12', code: ':eek:', url: '../emoticons/phpbb/eek.gif', alias: ['eek'] },
            { id: '13', code: ':exclaim:', url: '../emoticons/phpbb/exclaim.gif', alias: ['exclaim'] },
            { id: '14', code: ':mrgeen:', url: '../emoticons/phpbb/mrgreen.gif', alias: ['mrgreen'] },
            { id: '15', code: ':twisted:', url: '../emoticons/phpbb/twisted.gif', alias: ['twisted'] },
        ],
    },
    {
        name: ' Skype Emoticons',
        iconUrl: '../icons/skype.png', // Path to the PNG icon
        emoticons: [
            { id: '21', code: ':dance:', url: '../emoticons/skype/dance.gif' },
            { id: '22', code: ':emo:', url: '../emoticons/skype/emo.gif' },
            { id: '23', code: ':finger:', url: '../emoticons/skype/finger.gif' },
            { id: '24', code: ':party:', url: '../emoticons/skype/party.gif' },
            { id: '25', code: ':tmi:', url: '../emoticons/skype/tmi.gif' },
        ],
    },
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
