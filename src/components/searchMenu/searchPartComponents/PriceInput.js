import { useContext } from "react"

export const PriceInput = ({ name, labelText, value, partOfPrice, context }) => {
    const { searchConditions, setSearchConditions } = useContext(context)
    const selectedPriceRange = searchConditions.selectedPriceRange
    const checkPriceChange = (currentValue, partOfPrice) => {
        if (partOfPrice === 'minPrice' &&
            +currentValue > selectedPriceRange.maxPrice) {
            currentValue = selectedPriceRange.maxPrice
            setSearchConditions({
                ...searchConditions,
                selectedPriceRange: {
                    ...selectedPriceRange,
                    [partOfPrice]: +currentValue
                }
            })
        }
        if (partOfPrice === 'maxPrice' &&
            +currentValue < selectedPriceRange.minPrice) {
            currentValue = selectedPriceRange.minPrice
            setSearchConditions({
                ...searchConditions,
                selectedPriceRange: {
                    ...selectedPriceRange,
                    [partOfPrice]: +currentValue
                }
            })
        }
    }
    const handlePriceChange = (currentValue, partOfPrice) => {
        setSearchConditions({
            ...searchConditions,
            selectedPriceRange: {
                ...selectedPriceRange,
                [partOfPrice]: +currentValue
            }
        })
    }
    return (
        <label htmlFor={name}>{labelText}
            <input
                name={name}
                type='text'
                value={value}
                pattern="\d*"
                onChange={event => handlePriceChange(event.currentTarget.value, partOfPrice)}
                onBlur={event => checkPriceChange(event.currentTarget.value, partOfPrice)}
            />
        </label>
    )
}