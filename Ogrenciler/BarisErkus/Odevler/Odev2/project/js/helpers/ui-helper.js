class UIHelper {
    static createHtmlItem(tag, classes = [], textContent = '') {
        const element = document.createElement(tag);
        element.classList.add(...classes);
        element.textContent = textContent;
        return element;
    }
    static getInputValue(id) {
        return document.getElementById(id).value;
    }
    static setInputValue(selector, value) {
        document.getElementById(selector).value = value;
    }
    static getCardTextContent(card, selector) {
        return card.querySelector(selector).textContent;
    }
    static getCardAttribute(card, selector, attribute) {
        return card.querySelector(selector).getAttribute(attribute);
    }
    static clearInputValue(id) {
        document.getElementById(id).value = '';
    }
    static fillFilterMenu(menu, headerText, items, filterType) {
        const header = this.createHtmlItem('li');
        const headerLink = this.createHtmlItem('a', ['dropdown-item', 'disabled', 'text-center'], headerText);
        headerLink.href = '#';
        header.appendChild(headerLink);
        menu.appendChild(header);

        items.forEach(item => {
            const li = this.createHtmlItem('li');
            const a = this.createHtmlItem('a', ['dropdown-item', 'filter-option'], item);
            a.href = '#';
            a.dataset.filter = filterType;
            a.dataset.value = item;
            li.appendChild(a);
            menu.appendChild(li);
        });
    }
    static addDivider(menu) {
        const divider = this.createHtmlItem('li');
        const dividerHr = this.createHtmlItem('hr', ['dropdown-divider']);
        divider.appendChild(dividerHr);
        menu.appendChild(divider);
    }
}