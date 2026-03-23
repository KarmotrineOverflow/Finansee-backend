type DateData = {

    format: "DD-MM-YYYY" | "DD/MM/YYYY" | "FULL"
    includeDate: boolean
    includeMonth: boolean
}

type Date = {

    month: string | number
    date: number
    year: number
}

export function getDate(
    format = "FULL"
) : String {

    const date = new Date()

    switch (format) {
        
        case "DD-MM-YYYY":
            return `${date.getDate()}-${date.getMonth}-${date.getFullYear}`
        case "DD/MM/YYYY":
            return date.toLocaleString()  
        case "MONTH DD, YYYY":        
            return date.toLocaleString('default', { month: 'long', day: '2-digit', 'year': 'numeric' })  
        default:
            return "Could not convert date to string"
    }
}