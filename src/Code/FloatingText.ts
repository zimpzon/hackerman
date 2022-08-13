interface Floater {
    removeTime: number
    object: HTMLElement
}

class FloatingText {
    private moneyFloatTemplate: HTMLTemplateElement | undefined
    private floats: Floater[] = []
    private transTime: number = 3100

    constructor() {
        this.moneyFloatTemplate = document.getElementById('money-float-template') as HTMLTemplateElement
    }

    public removeExpired() {
        const now = Date.now()
        while (this.floats.length > 0) {
            const float = this.floats[0]
            if (now > float.removeTime)
            {
                this.floats = this.floats.slice(1)
                float.object.remove()
            }
            else
                break
        }
    }

    public add(text: string, x: number, y: number) {
        const floatDiv = (this.moneyFloatTemplate?.content.cloneNode(true) as HTMLElement).firstElementChild as HTMLElement
        floatDiv.innerText = text
        floatDiv.style.left = x + 'px'
        floatDiv.style.top = y + 'px'
        
        this.floats.push({ removeTime: Date.now() + this.transTime, object: floatDiv })
        document.body.appendChild(floatDiv);
    }
}

export default FloatingText