export interface RedditResponse {
    data: Data;
}
export interface Data {
    children: Child[];
}

export interface Child {
    data: {
        title: string;
        thumbnail: string;
        permalink: string;
    };
    

}