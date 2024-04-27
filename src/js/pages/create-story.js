const CreateStory = {
    async init(){
        this._initialListener();
    },

    _initialListener() {
        const createForm = document.querySelector('form');
        createForm.addEventListener('submit', (e) => {
            if (!createForm.checkValidity()) {
                e.preventDefault();
                this._sendData();
            }
            createForm.classList.add('was-validated');
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
            photoUrl: imgInput.files[0],
        };
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
}

export default CreateStory;