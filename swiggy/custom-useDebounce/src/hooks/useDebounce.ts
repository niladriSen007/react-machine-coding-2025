import { useCallback, useEffect, useState, type ChangeEvent } from "react"

export const useDebounce = () => {
  const [suggestions, setSuggestions] = useState<{
    id: string,
    name: string
  }[]>([])
  const [searchValue, setSearchValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [showSuggetions, setShowSuggetions] = useState<boolean>(false)

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setSuggestions([])
    setShowSuggetions(true)
  }, [setSearchValue])

  const getApis = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`)
      const { recipes } = await res.json()
      setSuggestions(recipes)

    } catch {
      alert()
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      getApis()
    }, 300)

    return () => clearTimeout(delayTimer)
  }, [searchValue])

  return {suggestions,showSuggetions,handleInputChange,loading,searchValue}
}