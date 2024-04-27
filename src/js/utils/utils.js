class Utils {
    static createDate() {
        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    
        return dateFormat;
    };

    static convertCreatedAtFromJSON (createdAt){
        const date = new Date(createdAt);
        // const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const dateFormat = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    
        return dateFormat;
    };
}

export default Utils;