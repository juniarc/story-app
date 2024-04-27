
const Dashboard = {
    async init() {
        await this._initialData();
    },

    async _initialData() {
        const fetchData = await fetch('/data/DATA.json');
        const responses = await fetchData.json();
        this._storiesData = responses.listStory;
        this._populateDataToItem(this._storiesData);
    },

    _populateDataToItem(listStory = null) {
        if(!(typeof listStory === 'object')) {
            throw new Error(
                `Parameter listStory should be an object. The value is ${listStory}`,
            );
        }

        if(!Array.isArray(listStory)) {
            throw new Error(
                `Parameter listStory shoul be an array. The value is ${listStory}`,
            );
        }

        const storyList = document.querySelector('#story-list');
        storyList.innerHTML = '';
        listStory.forEach((element) => {
            const storyItem = document.createElement('story-item');
            const colorItem = this._getRandomColor();
            storyItem.story = element;
            storyItem.color = colorItem;
            storyList.append(storyItem);
        });

    },

    _getRandomColor() {
        const colors = ['#FBE8A6', '#F4976C', '#B4DFE5' ,'#D1FDFE'];
        const randomIndex = Math.floor(Math.random()* colors.length);

        return colors[randomIndex];
    }
};

export default Dashboard;