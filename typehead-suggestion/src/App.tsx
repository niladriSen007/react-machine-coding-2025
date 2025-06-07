import Autocomplete from "./components/Autocomplete"

const App = () => {
  /* const fetchSuggestions = (
    query: string
  ): Promise<
    {
      name: string
    }[]
  > => { */
  const staticData = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
  ]

  /*  const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase())
    )
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredCountries.map((country) => ({ name: country })))
      }, 1000)
    })
  } */

  interface Recipe {
    caloriesPerServing:number
    cookTimeMinutes:number
    cuisine:string
    difficulty:string
    id:number
    imag:string
    ingredient:string[]
    instructions:string[]
    mealType:string[]
    name:string
    prepTimeMinutes:number
    rating:number
    reviewCount:number
    servings:number
    tags:string[]
    userId:number
  }

  const fetchSuggestions = async (query: string): Promise<string[]> => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    )
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const result = await response.json()
   /*  console.log(result?.recipes,"res") */
    const recipesName: string[] = result.recipes?.map((r:Recipe)=>r?.name)
/*     console.log(recipesName,"recipesName") */
    return recipesName
  }

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <Autocomplete
        /* staticData={staticData} */
        placeholder="Search for a country..."
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading Recipes ...</>}
        onSelect={(item) => console.log(item)}
        onFocus={(e) => console.log(e)}
        onBlur={(e) => console.log(e)}
      />
    </div>
  )
}
export default App
