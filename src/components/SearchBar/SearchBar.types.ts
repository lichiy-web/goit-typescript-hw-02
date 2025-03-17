export type  SearchBarProps = {
    onSubmit: (e: React.FormEvent<SearchBarFormElement>) => void,
}

export interface SearchBarFormElements extends HTMLFormControlsCollection {
    search: HTMLInputElement,
}

export interface SearchBarFormElement extends HTMLFormElement {
    readonly elements: SearchBarFormElements
}
