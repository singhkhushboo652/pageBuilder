export class AllResponse {
    constructor() {}

    async successResponse(req, res, data, message) {
        res.status(200).json({ message, data });
    }
}