interface Answer {
    answer: string,
    nextpath: number,
    input?: boolean
    img?: ImageType[]
    audio?: string
}

export interface GamePath {
    id: number,
    question: string,
    answer: Answer[],
    introAudio?: string,
    animation?: ImageType[]
}

export interface ImageType {
    id: number,
    class?: string,
    src?: string,
    audio?: string

}

