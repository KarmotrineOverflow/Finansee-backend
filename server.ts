import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

// Retrive report sheet from specified month. If none provided, retrieve the latest
app.get('/retrieve-sheet', (req: Request, res: Response) => {

    try {

        const requestBody = req.body

        let specifiedMonth: string = ""
        let specifiedYear: number = 0
        
        if (requestBody) {

            specifiedMonth = requestBody["month"]
            specifiedYear = requestBody["year"]
        }

        

    } catch (e) {


    }
}) 