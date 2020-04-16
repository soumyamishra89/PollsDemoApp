export interface PollQuestion {
    question: string,
    published_at: string,
    url: string,
    choices: PollChoice[]
}

export interface PollChoice  {
    choice: string,
    votes: number,
    url: string
}

export interface CreatePollQuestion {
    question: string,
    choices: string[]
}