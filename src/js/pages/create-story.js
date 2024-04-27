const CreateStory = {
    async init(){
        this._initialListener();
    },

    _initialListener() {
        const createForm = document.querySelector('#create-form');
        createForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._sendData();
        },
            false
        );
    },

    _sendData(){
        const formData = this._getFormData();
        console.log(formData);

        // this._goToDashboardPage();
    },

    _getFormData() {
        const descInput = document.querySelector('#input-description');
        const imgInput = document.querySelector('#input-img');

        return {
            description: descInput.value,
            photoUrl: imgInput.value,
        };
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
}

export default CreateStory;