export class Review {
    tourID: number
    reviewTitle: string
    reviewLongText: string
    stars: number
    constructor(data: any) {
        this.tourID = data.tourID
        this.reviewTitle = data.reviewTitle;
        this.reviewLongText = data.reviewLongText;
        this.stars = data.stars;
    }
}