
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
        return (
        <>
            <h2>Statisticsk</h2> 
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
            <div>Positive percentage: {positivePercentage}%</div>
        </>
    )
    } 
