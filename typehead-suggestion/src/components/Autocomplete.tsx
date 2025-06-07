import { useEffect, useState } from "react"

interface AutocompleteProps {
  staticData: string[]
  placeholder: string
  dataKey: string
  customLoading: React.ReactNode
  fetchSuggestions: (searchTerm: string) => Promise<string[]>
  onSelect: (item: { name: string }) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Autocomplete = ({
  staticData=[],
  placeholder = "Enter a search term...",
  dataKey = "name",
  customLoading = <>Loading...</>,
  fetchSuggestions,
  onSelect = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: AutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value
    setSearchTerm(inputVal)
  }

  const getSuggestions = async (query: string) => {
    setIsLoading(true)
    setIsError(false)
    try {
      if (staticData?.length > 0) {
        const filteredSuggestions = staticData.filter((item) =>
          item.toLowerCase().includes(query?.toLowerCase())
        )
        setSuggestions(filteredSuggestions)
        setIsLoading(false)
      } else if (fetchSuggestions) {
        const data = await fetchSuggestions(query)
        setSuggestions(data)
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }


  console.log(suggestions)

  useEffect(() => {
    if (searchTerm?.length > 0) {
      getSuggestions(searchTerm)
    } else {
      setSuggestions([])
    }
  }, [searchTerm])

  return (
    <div className="flex flex-col gap-2">
      <input
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 "
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {isLoading && customLoading}
      {isError && <p>Error loading suggestions</p>}
    </div>
  )
}
export default Autocomplete
