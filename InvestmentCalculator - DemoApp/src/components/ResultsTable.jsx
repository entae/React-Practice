import { calculateInvestmentResults } from '../util/investment.js'

export default function ResultsTable({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData)

    return (
        <>
            Results...
        </>
    )
}