async function getCurrency(type, callback) {
    const fetchedData = await fetch(`https://data.messari.io/api/v1/assets/${type}/metrics`)
        .then((response) => {
            return response.json();
        }).catch(err => console.log('Обратите внимание на ошибку :',err))
        .then((data) => {
            return data
        });

    const newState = {
        price: Math.round(fetchedData.data.market_data.price_usd),
        percent: Math.round(fetchedData.data.market_data.percent_change_usd_last_24_hours*10)/10
    }

    callback(prevState => {
        return {
            ...prevState,
            ...newState
        }
    })
}
export default getCurrency