import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        console.log(this.params.id);
        return `
            <h1>Post</h1>
            <p>
                You are viewing post #${this.postId}.
            </p>
        `;   
    }
}