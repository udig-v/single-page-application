export default class {
    constructor(params) {
        this.params = params;
    }

    // changes the page title to the particular page title 
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}